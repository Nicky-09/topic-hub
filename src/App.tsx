import React, { useState } from "react";
import { Button, Modal } from "antd";
import TopicsList from "./components/TopicsList";
import AddTopicForm from "./components/AddTopicForm";
import BlogEditor from "./components/BlogEditor";
import "./App.css";

interface TopicData {
  id: number;
  category: string;
  name: string;
  keywords: string[];
}

const App: React.FC = () => {
  const [topics, setTopics] = useState<TopicData[]>([
    {
      id: 1,
      category: "Category1",
      name: "Topic 1",
      keywords: ["Keyword 1", "Keyword 2", "Keyword 3"],
    },
    {
      id: 2,
      category: "Category2",
      name: "Topic 2",
      keywords: ["Keyword 4", "Keyword 5", "Keyword 6"],
    },
    {
      id: 3,
      category: "Category3",
      name: "Topic 3",
      keywords: ["Keyword 7", "Keyword 8", "Keyword 9"],
    },
    {
      id: 4,
      category: "Category4",
      name: "Topic 4",
      keywords: ["Keyword 10", "Keyword 11", "Keyword 12"],
    },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddTopic = (
    name: string,
    category: string,
    keywords: string[]
  ) => {
    const newTopic: TopicData = {
      id: Date.now(),
      category,
      name,
      keywords,
    };
    setTopics([...topics, newTopic]);
    setIsModalVisible(false);
  };

  const handleDeleteTopic = (id: number) => {
    const updatedTopics = topics.filter((topic) => topic.id !== id);
    setTopics(updatedTopics);
  };

  const handleGenerateBlog = (tone: string) => {
    // Logic for generating the blog based on the selected tone
    console.log(`Generating blog with tone: ${tone}`);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="main-container">
      <h1>TopicHub</h1>
      <div className="topics-container">
        <TopicsList topics={topics} onDelete={handleDeleteTopic} />
        <div className="add-topic-button">
          <Button onClick={showModal}>Add Topic</Button>
        </div>
      </div>
      <Modal
        title="Add Topic"
        visible={isModalVisible}
        onCancel={closeModal}
        footer={null}
      >
        <AddTopicForm
          // categories={uniqueCategories}
          onAddTopic={handleAddTopic}
          onCancel={closeModal}
        />
      </Modal>

      {/* <BlogEditor onGenerate={handleGenerateBlog} /> */}
    </div>
  );
};

export default App;
