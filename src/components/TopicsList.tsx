import React, { useState } from "react";
import Topic from "./Topic";
import "./TopicsList.css";

interface TopicData {
  id: number;
  category: string;
  name: string;
  keywords: string[];
}

interface TopicsListProps {
  topics: TopicData[];
  onDelete: (id: number) => void;
}

const TopicsList: React.FC<TopicsListProps> = ({ topics, onDelete }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const uniqueCategories = Array.from(
    new Set([
      ...topics.map((topic) => topic.category),
      "Category1",
      "Category2",
      "Category3",
      "Category4",
    ])
  );

  const filteredTopics = selectedCategory
    ? topics.filter((topic) => topic.category === selectedCategory)
    : topics;

  return (
    <div className="topics-container">
      <h2>Topics</h2>
      <div className="topics-list">
        <div className="filter-bar">
          <label htmlFor="category-filter">Filter by Category:</label>
          <div className="category-buttons">
            <button
              className={selectedCategory === "" ? "active" : ""}
              onClick={() => handleCategoryChange("")}
            >
              All
            </button>
            {uniqueCategories.map((category) => (
              <button
                key={category}
                className={selectedCategory === category ? "active" : ""}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="topic-list">
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
      </div>
    </div>
  );
};

export default TopicsList;
