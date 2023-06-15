import React from "react";
import { Card, Tag, Button } from "antd";
import "./Topic.css";

interface TopicProps {
  category: string;
  name: string;
  keywords: string[];
  onDelete: () => void;
}

const Topic: React.FC<TopicProps> = ({
  category,
  name,
  keywords,
  onDelete,
}) => {
  return (
    <Card
      title={name}
      className="topic"
      extra={<Button onClick={onDelete}>Delete</Button>}
    >
      <p>Category: {category}</p>
      <ul>
        {keywords.map((keyword, index) => (
          <Tag key={index}>{keyword}</Tag>
        ))}
      </ul>
    </Card>
  );
};

export default Topic;
