import React from "react";
import { Tag, Space, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
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
    <div className="topic">
      <div className="topic-info">
        <h3>{name}</h3>
        <span className="category">{category}</span>
      </div>
      <div className="keywords">
        {keywords.map((keyword, index) => (
          <Tag key={index} color={getKeywordColor(index)}>
            {keyword}
          </Tag>
        ))}
      </div>
      <Space align="end">
        <Button type="primary" icon={<DeleteOutlined />} onClick={onDelete}>
          Delete
        </Button>
      </Space>
    </div>
  );
};

const getKeywordColor = (index: number): string => {
  const colors = [
    "magenta",
    "red",
    "volcano",
    "orange",
    "gold",
    "lime",
    "green",
    "cyan",
    "blue",
    "geekblue",
    "purple",
  ];
  return colors[index % colors.length];
};

export default Topic;
