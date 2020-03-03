import React from "react";
import { action } from "@storybook/addon-actions";
import Task from "./Task";

//tell Storybook about the component being documented
//component:the component itself, title:reference to component in Storybook app
export default {
  component: Task,
  title: "Task",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const taskData = {
  id: "1",
  title: "Test Task",
  state: "TASK_INBOX",
  updatedAt: new Date(2018, 0, 1, 9, 0)
};

export const actionsData = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask")
};

//builds Tasks 3 states
//<Task {...actionsData}> is equivalent to 
//<Task onPinTask={actionsData.onPinTask} onArchiveTask={actions
export const Default = () => {
    return <Task task={{...taskData}}{...actionsData}/>
};

export const Pinned = () => (
    <Task task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData} />
  );
  
  export const Archived = () => (
    <Task task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />
  );
