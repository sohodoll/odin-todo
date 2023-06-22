const todosCreator = () => {
  const obj = {
    title: '',
    description: '',
    dueDate: '',
    priority: '',
    project: 'Inbox',
  };
  return obj;
};

const projectsCreator = () => {
  const obj = {
    title: '',
    description: '',
  };
  return obj;
};

const defaultProject = projectsCreator();
defaultProject.title = 'Inbox';

const projects = [defaultProject];
const defaultTodo = todosCreator();

const todos = [defaultTodo];
