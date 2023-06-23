import { createProject } from './projects';

export const projectModule = (() => {
  const projects = [];
  let currentProject = createProject('Inbox');
  const sampleProject = createProject('Sample Project');
  projects.push(currentProject, sampleProject);

  const setCurrentProject = (project) => {
    currentProject = project;
  };

  const getCurrentProject = () => currentProject;

  const createNewProject = (title) => {
    const project = createProject(title);
    projects.push(project);

    return project;
  };

  const addTodoToCurrentProject = (todo) => {
    currentProject.addTodo(todo);
  };

  const getProjects = () => projects;

  const getProjectTodos = (project) => project.todos;

  console.log(projects);

  return { createNewProject, addTodoToCurrentProject, setCurrentProject, getCurrentProject, getProjects, getProjectTodos, projects };
})();

window.projects = projectModule.projects;
