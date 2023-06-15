import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TopicData } from "./components/types";

interface TopicsState {
  topics: TopicData[];
}

const initialState: TopicsState = {
  topics: [
    {
      id: 1,
      category: "Category1",
      name: "Topic 1",
      keywords: ["Keyword 1", "Keyword 2", "Keyword 3"],
    },
    // Add your initial topics here
  ],
};

const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {
    addTopic: (state, action: PayloadAction<TopicData>) => {
      state.topics.push(action.payload);
    },
    deleteTopic: (state, action: PayloadAction<number>) => {
      state.topics = state.topics.filter(
        (topic) => topic.id !== action.payload
      );
    },
  },
});

export const { addTopic, deleteTopic } = topicsSlice.actions;

export default topicsSlice.reducer;
