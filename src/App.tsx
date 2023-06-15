import React, { useState } from "react";
import { Button, Modal } from "antd";
import TopicsList from "./components/TopicsList";
import AddTopicForm from "./components/AddTopicForm";
import BlogEditor from "./components/BlogEditor";

interface TopicData {
  id: number;
  category: string;
  name: string;
  keywords: string[];
}

const App: React.FC = () => {
  const [topics, setTopics] = useState<TopicData[]>([]);
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
    <div>
      <h1>TopicHub</h1>
      <TopicsList topics={topics} onDelete={handleDeleteTopic} />
      <div className="add-topic-button">
        <Button onClick={showModal}>Add Topic</Button>
      </div>
      <Modal
        title="Add Topic"
        visible={isModalVisible}
        onCancel={closeModal}
        footer={null}
      >
        <AddTopicForm onAddTopic={handleAddTopic} onCancel={closeModal} />
      </Modal>
      {/* <BlogEditor onGenerate={handleGenerateBlog} /> */}
    </div>
  );
};

export default App;
