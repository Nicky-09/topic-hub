import React, { useState } from "react";
import { Button, Row, Col } from "antd";
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
          <Row gutter={16} align="middle">
            <Col span={8}>
              <label htmlFor="category-filter">Filter by Category:</label>
            </Col>
            <Col span={16}>
              <div className="category-buttons">
                <Button
                  type={selectedCategory === "" ? "primary" : "default"}
                  onClick={() => handleCategoryChange("")}
                >
                  All
                </Button>
                {uniqueCategories.map((category) => (
                  <Button
                    key={category}
                    type={selectedCategory === category ? "primary" : "default"}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>
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
