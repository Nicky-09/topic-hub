import React, { useState } from "react";
import { Select } from "antd";
import Topic from "./Topic";

const { Option } = Select;

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
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const uniqueCategories = [...new Set(topics.map((topic) => topic.category))];

  const filteredTopics = selectedCategory
    ? topics.filter((topic) => topic.category === selectedCategory)
    : topics;

  return (
    <div>
      <h2>Topics</h2>
      <div className="filter-bar">
        <label htmlFor="category-filter">Filter by Category:</label>
        <Select
          id="category-filter"
          value={selectedCategory}
          onChange={handleCategoryChange}
          style={{ width: 200 }}
        >
          <Option value="">All</Option>
          {uniqueCategories.map((category) => (
            <Option key={category} value={category}>
              {category}
            </Option>
          ))}
        </Select>
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
