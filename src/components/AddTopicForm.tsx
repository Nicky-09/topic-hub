import React, { useState } from "react";
import "./AddTopicForm.css";

interface AddTopicFormProps {
  onAddTopic: (name: string, category: string, keywords: string[]) => void;
}

const AddTopicForm: React.FC<AddTopicFormProps> = ({ onAddTopic }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [keywords, setKeywords] = useState("");

  const handleSave = () => {
    const keywordList = keywords.split(",").map((keyword) => keyword.trim());
    onAddTopic(name, category, keywordList);
    setName("");
    setCategory("");
    setKeywords("");
  };

  return (
    <div className="add-topic-form">
      <h2>Add Topic</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="keywords">Keywords:</label>
        <input
          type="text"
          id="keywords"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
      </div>
      <button className="save-button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default AddTopicForm;
