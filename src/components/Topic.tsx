import React from "react";
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
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <ul>
        {keywords.map((keyword, index) => (
          <li key={index}>{keyword}</li>
        ))}
      </ul>
      <button className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Topic;
