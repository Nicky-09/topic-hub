import React, { useState } from "react";
import "./BlogEditor.css";

interface BlogEditorProps {
  onGenerate: (tone: string) => void;
}

const BlogEditor: React.FC<BlogEditorProps> = ({ onGenerate }) => {
  const [tone, setTone] = useState("");

  const handleGenerate = () => {
    onGenerate(tone);
  };

  return (
    <div className="blog-editor">
      <h2>Blog Editor</h2>
      <div className="form-group">
        <label htmlFor="tone">Tone:</label>
        <select
          id="tone"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
        >
          <option value="">Select Tone</option>
          <option value="Formal">Formal</option>
          <option value="Casual">Casual</option>
          <option value="Friendly">Friendly</option>
        </select>
      </div>
      <button className="generate-button" onClick={handleGenerate}>
        Generate
      </button>
    </div>
  );
};

export default BlogEditor;
