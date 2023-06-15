import React, { useState } from "react";
import Topic from "./Topic";

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

  const uniqueCategories = topics.reduce((categories: string[], topic) => {
    if (!categories.includes(topic.category)) {
      categories.push(topic.category);
    }
    return categories;
  }, []);

  const filteredTopics = selectedCategory
    ? topics.filter((topic) => topic.category === selectedCategory)
    : topics;

  return (
    <div>
      <h2>Topics</h2>
      <div className="filter-bar">
        <label htmlFor="category-filter">Filter by Category:</label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="">All</option>
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
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

export default TopicsList;
