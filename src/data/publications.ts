import type { Publication } from "@/types/publication";

export const publications: Publication[] = [
  {
    id: "descriptive-qa-ieee-pune-2021",
    title: "Descriptive Question Answering System using BERT-based Transformers",
    authors: "Gourishankar Bansode et al.",
    venue: "IEEE Pune Section International Conference",
    year: 2021,
    type: "conference",
    abstract:
      "A transformer-based descriptive question answering system that leverages a fine-tuned BERT model and a sentence-ranking pipeline for information retrieval over document collections.",
    // link: "https://..." // add official link if you have it
    // pdf: "/pdfs/descriptive_qa_ieee_2021.pdf" // if you later place a PDF in public/pdfs
    bibtex: `@inproceedings{bansode2021descriptiveQA,
  title={Descriptive Question Answering System using BERT-based Transformers},
  author={Bansode, Gourishankar and Others},
  booktitle={IEEE Pune Section International Conference},
  year={2021}
}`,
  },
  // Add future robotics / AI publications here
];
