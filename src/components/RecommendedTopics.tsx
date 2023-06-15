import React from "react";
import Topic from "./Topic";
import { TopicData } from "./types";

interface RecommendedTopicsProps {
  topics: TopicData[];
  onDelete: (id: number) => void;
  selectedCategory: string; // Add the selectedCategory prop
}

const RecommendedTopics: React.FC<RecommendedTopicsProps> = ({
  topics,
  onDelete,
  selectedCategory,
}) => {
  const filteredTopics = selectedCategory
    ? topics.filter((topic) => topic.category === selectedCategory)
    : topics;

  return (
    <div>
      <h3>Recommended Topics</h3>
      {filteredTopics.map((topic) => (
        <Topic
          key={topic.id}
          category={topic.category}
          name={topic.name}
          keywords={topic.keywords}
          onDelete={() => onDelete(topic.id)}
        />
      ))}
    </div>
  );
};

export default RecommendedTopics;
