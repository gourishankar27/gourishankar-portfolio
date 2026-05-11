import type { Achievement } from "@/types/achievement";

export const achievements: Achievement[] = [
  {
    id: "smart-india-hackathon-winner-2019",
    title: "Smart India Hackathon Winner",
    issuer: "Ministry of Human Resource Development (MHRD), Government of India",
    date: "Mar 2019",
    description:
      "Won the Smart India Hackathon, a national innovation competition organized by MHRD, Government of India.",
    tags: ["Winner", "Hackathon", "Innovation", "National"],
  },
  {
    id: "national-innovation-contest-finalist-2020",
    title: "National Innovation Contest Finalist",
    issuer: "MHRD Innovation Cell",
    date: "Aug 2020",
    description:
      "Represented MIT-ADT University at the National Innovation Contest by MHRD Innovation Cell.",
    tags: ["Finalist", "Innovation", "University Representative"],
  },
  {
    id: "ieee-pune-2021-qa-paper",
    title: "IEEE Publication - Descriptive Question Answering System",
    issuer: "IEEE Pune Section International Conference",
    date: "Dec 2021",
    description:
      "Published work on a transfer-learning approach for a descriptive question answering system using BERT-based transformer methods.",
    tags: ["Publication", "NLP", "BERT", "IEEE"],
  },
  {
    id: "certifications-qt-ml",
    title: "Technical Certifications",
    issuer: "Qt / Stanford University via Coursera",
    description:
      "Completed Qt 6 Core with C++ (Beginner, Intermediate, Advanced) and Machine Learning by Stanford University/Coursera.",
    tags: ["C++", "Qt", "Machine Learning"],
  },
];
