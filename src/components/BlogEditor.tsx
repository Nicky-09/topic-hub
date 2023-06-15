import React, { useState, KeyboardEvent, ChangeEvent } from "react";
import { Editor, EditorState, RichUtils, getDefaultKeyBinding } from "draft-js";
import "draft-js/dist/Draft.css";
import "./BlogEditor.css";

interface BlogEditorProps {
  onGenerate: (tone: string, content: string) => void;
}

const BlogEditor: React.FC<BlogEditorProps> = ({ onGenerate }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleEditorChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
  };

  const handleKeyCommand = (command: string, editorState: EditorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      handleEditorChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  const handleGenerateBlog = () => {
    const contentState = editorState.getCurrentContent();
    const blogContent = contentState.getPlainText();
    const tone = "Selected Tone"; // Replace with the actual selected tone
    onGenerate(tone, blogContent);
  };

  const keyBindingFn = (e: KeyboardEvent): string | null => {
    if (e.ctrlKey && e.key === "z") {
      return "undo";
    }
    return getDefaultKeyBinding(e);
  };

  const handleInlineStyle = (style: string) => {
    const newState = RichUtils.toggleInlineStyle(editorState, style);
    handleEditorChange(newState);
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      // Handle file upload logic here
    }
  };

  return (
    <div>
      <h2>Blog Editor</h2>
      <div className="editor-toolbar">
        <button onClick={() => handleInlineStyle("BOLD")}>Bold</button>
        <button onClick={() => handleInlineStyle("ITALIC")}>Italic</button>
        <label htmlFor="image-upload" className="upload-label">
          Upload Image
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </label>
      </div>
      <div className="editor-container">
        <Editor
          editorState={editorState}
          onChange={handleEditorChange}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={keyBindingFn}
        />
      </div>
      <div className="editor-actions">
        <button onClick={handleGenerateBlog}>Generate</button>
      </div>
    </div>
  );
};

export default BlogEditor;
