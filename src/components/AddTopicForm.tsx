import React, { useState } from "react";
import { Form, Input, Select, Button } from "antd";

const { Option } = Select;

interface AddTopicFormProps {
  onAddTopic: (name: string, category: string, keywords: string[]) => void;
  onCancel: () => void;
  //   categories: string[];
}

const AddTopicForm: React.FC<AddTopicFormProps> = ({
  onAddTopic,
  onCancel,
  //   categories,
}) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [keywords, setKeywords] = useState<string[]>([]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  const handleKeywordChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value.trim();
    if (value !== "") {
      setKeywords((prevKeywords) => [...prevKeywords, value]);
      (e.target as HTMLInputElement).value = "";
    }
  };

  const handleKeywordDelete = (keyword: string) => {
    setKeywords((prevKeywords) => prevKeywords.filter((k) => k !== keyword));
  };

  const handleAddTopic = () => {
    onAddTopic(name, category, keywords);
    setName("");
    setCategory("");
    setKeywords([]);
  };

  return (
    <Form>
      <Form.Item label="Name" required>
        <Input value={name} onChange={handleNameChange} />
      </Form.Item>
      <Form.Item label="Category" required>
        {/* <Select value={category} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <Option key={category} value={category}>
              {category}
            </Option>
          ))}
        </Select> */}
      </Form.Item>
      <Form.Item label="Keywords">
        <Input
          placeholder="Enter keyword and press Enter"
          onPressEnter={handleKeywordChange}
        />
      </Form.Item>
      {keywords.length > 0 && (
        <div>
          <strong>Keywords:</strong>
          <ul>
            {keywords.map((keyword) => (
              <li key={keyword}>
                {keyword}
                <Button
                  type="link"
                  size="small"
                  onClick={() => handleKeywordDelete(keyword)}
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Form.Item>
        <Button
          type="primary"
          onClick={handleAddTopic}
          disabled={!name || !category}
        >
          Add Topic
        </Button>
        <Button onClick={onCancel}>Cancel</Button>
      </Form.Item>
    </Form>
  );
};

export default AddTopicForm;
