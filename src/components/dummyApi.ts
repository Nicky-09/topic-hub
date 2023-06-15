interface TopicData {
  id: number;
  category: string;
  name: string;
  keywords: string[];
}

interface DummyApiData {
  topics: TopicData[];
  recommendedTopics: TopicData[];
}

const dummyApiData: DummyApiData = {
  topics: [
    {
      id: 1,
      category: "Technology",
      name: "Introduction to React",
      keywords: ["React", "JavaScript", "Frontend"],
    },
    {
      id: 2,
      category: "Science",
      name: "The Theory of Relativity",
      keywords: ["Physics", "Albert Einstein", "Space"],
    },
    // Add more topics here...
  ],
  recommendedTopics: [
    {
      id: 3,
      category: "Technology",
      name: "Introduction to TypeScript",
      keywords: ["TypeScript", "JavaScript", "Static Typing"],
    },
    {
      id: 4,
      category: "Science",
      name: "The Origins of the Universe",
      keywords: ["Astronomy", "Cosmology", "Big Bang"],
    },
    // Add more recommended topics here...
  ],
};

export const recommendedTopics = [
  {
    id: 1,
    category: "Technology",
    name: "Artificial Intelligence",
    keywords: ["AI", "Machine Learning", "Deep Learning"],
  },
  {
    id: 2,
    category: "Science",
    name: "Space Exploration",
    keywords: ["Astronomy", "Planets", "Mars"],
  },
  // Add more recommended topics as needed
];

export default dummyApiData;
