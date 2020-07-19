import { createStore } from "redux";

export const actions = {
  GET_TASKS: "GET_TASKS",
  ADD_TASK: "ADD_TASK",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case actions.ADD_TASK:
      const tasks = state.tasks;
      tasks.data.push(action.payload);
      return {
        ...state,
        tasks: {
          ...tasks,
        },
      };
    default:
      return state;
  }
};
const initialState = {
  tasks: {
    data: [
      { id: "1", title: "Something", state: "TASK_INBOX" },
      { id: "2", title: "Something more", state: "TASK_INBOX" },
      { id: "3", title: "Something else", state: "TASK_INBOX" },
      { id: "4", title: "Something again", state: "TASK_INBOX" },
    ],
    loading: false,
  },
};
const store = createStore(reducer, {});
export default store;

export const updateData = (data) => ({
  type: actions.UPDATE_DATA,
  payload: data,
});

export const getTasks = (dispatch) => {
  console.log("test");
  dispatch({ type: actions.GET_TASKS, payload: { data: null, loading: true } });
  setTimeout(() => {
    dispatch({ type: actions.GET_TASKS, payload: initialState.tasks });
  }, 1000);
};

export const addTask = (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: actions.ADD_TASK,
      payload: { id: "4", title: "Something again", state: "TASK_INBOX" },
    });
  }, 500);
};
