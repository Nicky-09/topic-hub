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
      category: "Technology",
      name: "Exploring Artificial Intelligence and its Applications",
      keywords: ["Machine Learning", "Deep Learning", "Neural Networks"],
    },
    {
      id: 2,
      category: "Science",
      name: "Understanding Quantum Physics: The Realm of Possibilities",
      keywords: ["Quantum Mechanics", "Superposition", "Entanglement"],
    },
    {
      id: 3,
      category: "Sports",
      name: "The Excitement of Football: Goals, Passion, and Teamwork",
      keywords: ["Soccer", "FIFA World Cup", "Premier League"],
    },
    {
      id: 4,
      category: "Music",
      name: "Rock Music Through the Ages: Legends, Anthems, and Guitar Riffs",
      keywords: ["Classic Rock", "Guitar Solos", "Rock Bands"],
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
        {/* <div className="add-topic-button">
          <Button onClick={showModal}>Add Topic</Button>
        </div> */}
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
