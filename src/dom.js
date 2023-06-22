import { projectModule } from './app.js';
import { addTodoToCurrentProject, createTodo } from './todos.js';

const currentProjectTitleElement = document.querySelector('#current-project-title');
const projectsContainer = document.querySelector('#projects-container');
const todosContainer = document.querySelector('#todos-container');

const currentProjectTitle = projectModule.getCurrentProject();
currentProjectTitleElement.textContent = currentProjectTitle;

const renderProject = (project) => {
  const element = document.createElement('div');
  element.classList.add('project');
  element.textContent = project.title;

  element.addEventListener('click', () => {
    projectModule.setCurrentProject(project);
    renderNewProjectTitle(project.title);
  });

  projectsContainer.appendChild(element);
};

const renderProjects = () => {
  const projects = projectModule.getProjects();

  projects.forEach((project) => {
    renderProject(project);
  });
};

renderProjects();

const addProjectButton = document.querySelector('#add-project-button');

const renderNewProjectTitle = (title) => {
  currentProjectTitleElement.textContent = title;
};

addProjectButton.addEventListener('click', () => {
  const projectTitle = prompt('Enter project title');

  if (projectTitle) {
    const project = projectModule.createNewProject(projectTitle);
    projectModule.createNewProject(projectTitle);
    renderProject(project);
  }
});

const addTodoButton = document.querySelector('#add-todo-button');

addTodoButton.addEventListener('click', () => {
  const renderTodo = (todo) => {
    const element = document.createElement('div');

    element.classList.add('todo');
    element.innerHTML = `
        <h3>${todo.title}</h3>
        <p>${todo.description}</p>
        <p>Due Date: ${todo.dueDate}</p>
        <p>Priority: ${todo.priority}</p>
        <p>Is Done: ${todo.status}</p>
      `;

    todosContainer.appendChild(element);
  };

  const todoTitle = prompt('Enter todo title');
  const todoDescription = prompt('Enter todo description');
  const todoDueDate = prompt('Enter todo due date');
  const todoPriority = prompt('Enter todo priority');

  if (todoTitle && todoDescription && todoDueDate && todoPriority) {
    const todo = createTodo(todoTitle, todoDescription, todoDueDate, todoPriority);
    addTodoToCurrentProject(todo);
    renderTodo(todo);
  }
});
