
function updateGreeting() {
    const greeting = document.querySelector('#greeting');
    const hour = new Date().getHours();
    greeting.textContent = hour < 12 ? 'Good Morning!' : 'Good Afternoon!';
}

function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    alert(`Thanks, ${name}!`);
}

if (document.querySelector('#contact-form')) {
    document.querySelector('#contact-form').addEventListener('submit', handleFormSubmit);
}
if (document.querySelector('#greeting')) {
    updateGreeting();
}


const user = { name: '', email: '' };
const projects = ['Project A', 'Project B', 'Project C'];

function displayProjects(filter) {
    const list = document.querySelector('#project-list');
    const filteredProjects = filter ? projects.filter(p => p.includes(filter)) : projects;
    list.innerHTML = filteredProjects.map(project => `<li>${project}</li>`).join('');
}

if (document.querySelector('#project-list') && projects.length > 0) {
    displayProjects();
}


function saveFormData() {
    const name = document.querySelector('#name').value;
    localStorage.setItem('userName', name);
}

function loadFormData() {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
        document.querySelector('#name').value = savedName;
    }
}

if (document.querySelector('#contact-form')) {
    document.querySelector('#contact-form').addEventListener('submit', saveFormData);
    loadFormData();
  }