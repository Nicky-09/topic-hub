import React from "react";
import { Modal, Form, Input, Button } from "antd";

interface AddTopicFormProps {
  onAddTopic: (name: string, category: string, keywords: string[]) => void;
  onCancel: () => void;
}

const AddTopicForm: React.FC<AddTopicFormProps> = ({
  onAddTopic,
  onCancel,
}) => {
  const [form] = Form.useForm();

  const handleSave = () => {
    form.validateFields().then((values) => {
      const { name, category, keywords } = values;
      const keywordList = keywords
        .split(",")
        .map((keyword: string) => keyword.trim());
      onAddTopic(name, category, keywordList);
      form.resetFields();
      onCancel();
    });
  };

  return (
    <Form form={form} layout="vertical">
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please enter the topic name" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Category"
        name="category"
        rules={[{ required: true, message: "Please enter the category" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Keywords"
        name="keywords"
        rules={[
          { required: true, message: "Please enter at least one keyword" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button key="save" type="primary" onClick={handleSave}>
          Save
        </Button>
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>
        ,
      </Form.Item>
    </Form>
  );
};

export default AddTopicForm;
