import React from "react";

import Button from "./Button";
import { Provider } from "react-redux";

import store from "./lib/redux";

export default {
  component: Button,
  title: "Redux Todo List",
  excludeStories: /.*Data$/,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};

export const Default = () => <Button />;
