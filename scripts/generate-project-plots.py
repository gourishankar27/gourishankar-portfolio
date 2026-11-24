"""Rebuild portfolio figures from small, sanitized evidence extracts.

Optional import: --import-results <robotics repository's results directory>.
Only the two named CSVs are read. No simulator, model, dataset or service is run.
"""
from __future__ import annotations

import argparse
import csv
import hashlib
import html
import json
import math
import re
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt  # noqa: E402

ROOT = Path(__file__).resolve().parents[1]
EVIDENCE = ROOT / "docs" / "evidence"
ROBOT_SHA = "b033f38f7d9c4807ef5e04135ef766156a2598e1"
PHASE45 = "phase45/run-20261103T213021Z/analysis/evaluate-001/per-episode.csv"
PHASE6 = "phase6a1/run-20261105T015355Z/geometry-v4/analysis/report-002/conditions.csv"


def rows(path: Path) -> list[dict]:
    with path.open(encoding="utf-8-sig", newline="") as handle:
        return list(csv.DictReader(handle))


def write_extract(name: str, data: list[dict], fields: list[str]) -> None:
    with (EVIDENCE / name).open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fields, extrasaction="ignore")
        writer.writeheader()
        writer.writerows(data)


def import_results(directory: Path) -> None:
    EVIDENCE.mkdir(parents=True, exist_ok=True)
    release = rows(directory / PHASE45)
    assert len(release) == 64 and len({r["trial_id"] for r in release}) == 64
    write_extract("phase45-stop-errors.csv", release, [
        "trial_id", "heuristic_nominal", "learned_nominal", "learned_training_mean",
        "learned_nongradient", "learned_warp",
    ])
    contact = [r for r in rows(directory / PHASE6) if r["id"].startswith("confirmation6a1-v2-")]
    contact.sort(key=lambda r: r["id"])
    assert len(contact) == 8 and len({r["seed"] for r in contact}) == 8
    write_extract("phase6a1-confirmations.csv", contact, [
        "id", "seed", "tool_variant", "slope", "dx_mm", "dy_mm", "heading_error_deg",
        "push_tracking_max_mm", "workflow_passed", "gate_status",
    ])
    artifacts = []
    for relative in (PHASE45, PHASE6):
        artifacts.append({
            "source_artifact": f"results/{relative}",
            "sha256": hashlib.sha256((directory / relative).read_bytes()).hexdigest(),
        })
    (EVIDENCE / "robotics-extract-provenance.json").write_text(json.dumps({
        "repository": "https://github.com/gourishankar27/Vision-Guided-Robotic-Manipulation",
        "source_commit": ROBOT_SHA,
        "note": "Reports/source are committed at this SHA. Raw results were inspected read-only in the matching clean WSL checkout and are not tracked in Git. Extracts omit host paths and retain original numeric strings.",
        "units": {"phase45_errors": "m (Euclidean stop-position error per condition)", "phase6_displacements": "mm", "phase6_angles": "degrees"},
        "artifacts": artifacts,
    }, indent=2) + "\n", encoding="utf-8")


plt.rcParams.update({
    "figure.facecolor": "#0b1020", "axes.facecolor": "#0b1020",
    "text.color": "#e7eaf0", "axes.labelcolor": "#cbd5e1",
    "xtick.color": "#cbd5e1", "ytick.color": "#cbd5e1",
    "axes.edgecolor": "#46516a", "grid.color": "#46516a",
    "font.family": "DejaVu Sans", "font.size": 13,
    "svg.fonttype": "none", "svg.hashsalt": "portfolio-phase1-20261124",
})


def finish(fig, ax, path: Path, title: str, description: str) -> None:
    ax.spines[["top", "right"]].set_visible(False)
    ax.set_axisbelow(True)
    path.parent.mkdir(parents=True, exist_ok=True)
    fig.savefig(path, metadata={"Title": title, "Description": description, "Date": None})
    svg = path.read_text(encoding="utf-8")
    svg = re.sub(
        r"(<svg\b[^>]*)(>)",
        lambda match: match[1] + ' role="img" aria-labelledby="figure-title figure-description">'
        + f'\n<title id="figure-title">{html.escape(title)}</title>'
        + f'\n<desc id="figure-description">{html.escape(description)}</desc>',
        svg, count=1, flags=re.S,
    )
    path.write_text(svg, encoding="utf-8")
    plt.close(fig)


def stop_chart() -> None:
    data = rows(EVIDENCE / "phase45-stop-errors.csv")
    assert len(data) == 64
    keys = ["heuristic_nominal", "learned_nominal", "learned_training_mean", "learned_nongradient", "learned_warp"]
    values = [math.sqrt(sum(float(row[k]) ** 2 for row in data) / len(data)) * 1000 for k in keys]
    assert abs(values[0] - 4.500) < .001 and abs(values[-1] - 2.834) < .001
    labels = ["Heuristic release + nominal friction", "Learned release + nominal friction", "Learned + training-mean friction", "Learned + bounded-fit friction", "Learned + Warp-fit friction"]
    fig, ax = plt.subplots(figsize=(16, 9))
    fig.subplots_adjust(left=.34, right=.92, bottom=.2, top=.79)
    fig.text(.06, .92, "Phase 4.5 · held-out stop forecasts", fontsize=25, weight="bold")
    fig.text(.06, .86, "64 independent Gazebo conditions · frozen models · identical recorded actions", fontsize=15, color="#cbd5e1")
    bars = ax.barh(labels, values, color=["#ff6b6b", "#bd879b", "#9aa4b2", "#4da3ff", "#82c4ff"], height=.58)
    ax.invert_yaxis()
    ax.bar_label(bars, labels=[f"{v:.3f} mm" for v in values], padding=10, fontsize=15)
    ax.set_xlim(0, 5.3)
    ax.set_xlabel("Euclidean stop-position RMSE (mm)", labelpad=14)
    ax.grid(axis="x", alpha=.35)
    fig.text(.06, .09, "The training-mean baseline nearly matches both fitted models. No demonstrated gradient accuracy advantage.", fontsize=14)
    fig.text(.06, .045, "Source: run-20261103T213021Z / evaluate-001 / per-episode.csv · Forecast errors are not controller success rates.", fontsize=12, color="#9aa4b2")
    finish(fig, ax, ROOT / "public/projects/vision-guided-diff-physics/phase45-stop-comparison.svg", "Phase 4.5 held-out stopping forecasts", "Recomputed RMSE in millimeters over 64 independent condition errors; training mean and fitted friction baselines are retained.")


def contact_chart() -> None:
    data = rows(EVIDENCE / "phase6a1-confirmations.csv")
    values = [float(r["dy_mm"]) for r in data]
    assert len(data) == 8 and all(r["gate_status"] == "PASS" for r in data)
    assert abs(min(abs(v) for v in values) - 18.448) < .001
    assert abs(max(abs(v) for v in values) - 27.801) < .001
    fig, ax = plt.subplots(figsize=(16, 9))
    fig.subplots_adjust(left=.1, right=.96, top=.79, bottom=.23)
    fig.text(.06, .92, "Phase 6A.1 · corrected contact confirmation", fontsize=25, weight="bold")
    fig.text(.06, .86, "Eight fresh unseen seeds · geometry-v4 · two mirrored fixtures · Gazebo simulation", fontsize=15, color="#cbd5e1")
    bars = ax.bar(range(8), values, color=["#4da3ff" if v < 0 else "#ff6b6b" for v in values], width=.65)
    ax.bar_label(bars, labels=[f"{v:+.3f}" for v in values], padding=5, fontsize=12)
    ax.axhline(0, color="#9aa4b2", lw=1)
    ax.axhline(3, color="#9aa4b2", ls="--", alpha=.7, label="Original ±3 mm signed lateral requirement")
    ax.axhline(-3, color="#9aa4b2", ls="--", alpha=.7)
    ax.set_xticks(range(8), [r["seed"] for r in data])
    ax.set_xlabel("Predeclared simulator seed", labelpad=12)
    ax.set_ylabel("Signed lateral object displacement (mm)")
    ax.set_ylim(-31, 36)
    ax.grid(axis="y", alpha=.3)
    ax.legend(loc="upper left", frameon=False, fontsize=11)
    fig.text(.06, .105, "Frozen endpoint: 100 ms median ending 1 simulated second after task response. Eight confirmations passed.", fontsize=13)
    fig.text(.06, .06, "Bounded contact feasibility only. Overall lifecycle gate still failed: 93/94 actual scenes clean; larger collection blocked.", fontsize=13)
    finish(fig, ax, ROOT / "public/projects/vision-guided-diff-physics/phase6a1-lateral-confirmation.svg", "Phase 6A.1 signed lateral confirmation", "Signed object displacement in millimeters for eight independent unseen-seed simulations with mirrored two-cylinder fixtures; this is not general closed-loop planar control.")


def owner_chart() -> None:
    evidence = json.loads((EVIDENCE / "ownerpilot-phase32.json").read_text(encoding="utf-8"))
    data = evidence["variants"]
    assert sum(r["rfqs"] for r in data) == 240
    x = list(range(4))
    fig, ax = plt.subplots(figsize=(16, 9))
    fig.subplots_adjust(left=.09, right=.97, top=.79, bottom=.24)
    fig.text(.06, .92, "OwnerPilot · research completion vs source inspection", fontsize=24, weight="bold")
    fig.text(.06, .86, "Phase 3.2 · qwen3:8b · 60 held-out fictional RFQs per configuration · no held-out retuning", fontsize=15, color="#cbd5e1")
    complete = [r["verified_complete"] / r["rfqs"] * 100 for r in data]
    covered = [r["source_covered_lines"] / r["lines"] * 100 for r in data]
    a = ax.bar([i-.18 for i in x], complete, .34, color="#4da3ff", label="Verified RFQ completion")
    b = ax.bar([i+.18 for i in x], covered, .34, color="#9aa4b2", label="Required line source inspection")
    ax.bar_label(a, labels=[f"{r['verified_complete']}/60" for r in data], padding=5, fontsize=13)
    ax.bar_label(b, labels=[f"{r['source_covered_lines']}/324" for r in data], padding=5, fontsize=13)
    ax.axhline(95, color="#ff6b6b", ls="--", label="Verified completion target: 57/60 (unmet)")
    ax.set_xticks(x, [r["label"] for r in data], fontsize=12)
    ax.set_ylabel("Percentage (%) · distinct denominators")
    ax.set_ylim(0, 119)
    ax.set_yticks([0, 20, 40, 60, 80, 100])
    ax.grid(axis="y", alpha=.3)
    ax.legend(loc="upper left", frameon=False, fontsize=11)
    fig.text(.06, .105, "D/four was selected before held-out evaluation. Complete source reads do not imply verified completion or quote readiness.", fontsize=13)
    fig.text(.06, .06, "Independent oracle: 0 unsupported/misbound accepted facts and 0 unauthorized successful tools across 240 executions.", fontsize=13)
    finish(fig, ax, ROOT / "public/projects/ownerpilot-ai-operating-copilot/phase32-evaluation.svg", "OwnerPilot Phase 3.2 held-out research evaluation", "Verified RFQ completion and required line source coverage use different denominators. The preselected hybrid completed 52/60 RFQs despite 324/324 source-covered lines.")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--import-results", type=Path)
    args = parser.parse_args()
    if args.import_results:
        import_results(args.import_results)
    stop_chart()
    contact_chart()
    owner_chart()
    print("Generated three figures; source cardinality and reported robotics RMSE/range checks passed.")
