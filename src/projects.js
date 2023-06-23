export const createProject = (title) => {
  const todos = [];

  if (title === 'Inbox') {
    todos.push({
      title: 'Sample Inbox Todo',
      description: 'This is a sample todo',
      project: 'Inbox',
      dueDate: '2020-10-10',
      priority: 'low',
      status: 'incomplete',
    });
  }

  if (title === 'Sample Project') {
    todos.push({
      title: 'Sample Project Todo',
      description: 'This is a sample todo',
      dueDate: '2020-10-10',
      project: 'Sample Project',
      priority: 'low',
      status: 'incomplete',
    });
  }

  const addTodo = (todo) => {
    todos.push(todo);
  };

  return { title, todos, addTodo };
};
