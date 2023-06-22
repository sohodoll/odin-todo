import { projectModule } from './app';

export const createTodo = (title, description, dueDate, priority) => {
  return {
    title,
    description,
    dueDate,
    priority,
    status: 'incomplete',
  };
};

export const addTodoToCurrentProject = (todo) => {
  projectModule.addTodoToProject(todo);
};
