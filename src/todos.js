export const createTodo = (title, description, project, dueDate, priority) => {
  return {
    title,
    description,
    dueDate,
    priority,
    project,
    status: 'incomplete',
  };
};
