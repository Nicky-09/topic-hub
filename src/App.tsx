import React, { useState } from "react";
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
  };

  const handleDeleteTopic = (id: number) => {
    const updatedTopics = topics.filter((topic) => topic.id !== id);
    setTopics(updatedTopics);
  };

  const handleGenerateBlog = (tone: string) => {
    // Logic for generating the blog based on the selected tone
    console.log(`Generating blog with tone: ${tone}`);
  };

  return (
    <div>
      <h1>TopicHub</h1>
      <TopicsList topics={topics} onDelete={handleDeleteTopic} />
      <AddTopicForm onAddTopic={handleAddTopic} />
      <BlogEditor onGenerate={handleGenerateBlog} />
    </div>
  );
};

export default App;
