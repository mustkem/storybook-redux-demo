import React from "react";

import Tasks from "./Tasks";
import { Provider } from "react-redux";

import store from "./lib/redux";

export default {
  component: Tasks,
  title: "Redux Todo List",
  excludeStories: /.*Data$/,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};

export const Default = () => <Tasks />;
