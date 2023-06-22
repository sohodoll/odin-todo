export const createProject = (title) => {
  const todos = [];

  const addTodo = (todo) => {
    todos.push(todo);
  };

  return { title, todos, addTodo };
};
