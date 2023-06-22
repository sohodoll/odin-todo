import { createProject } from './projects';
import { createTodo } from './todos';

export const projectModule = (() => {
  const projects = [];
  let currentProject = createProject('Inbox');
  projects.push(currentProject);

  const setCurrentProject = (project) => {
    currentProject = project;
  };

  const getCurrentProject = () => currentProject.title;

  const createNewProject = (title) => {
    const project = createProject(title);
    projects.push(project);

    return project;
  };

  const addTodoToProject = (todo) => {
    currentProject.addTodo(todo);

    return todo;
  };

  const getProjects = () => projects;

  return { createNewProject, addTodoToProject, setCurrentProject, getCurrentProject, getProjects };
})();
