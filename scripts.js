const projects = {
  group1: [
    { name: "项目1-1", description: "这是一个用JavaScript实现的项目", url: "project1-1/index.html" },
    { name: "项目1-2", description: "这是另一个用JavaScript实现的项目", url: "project1-2/index.html" },
    // 添加更多项目...
  ],
  group2: [
    { name: "项目2-1", description: "这是一个用JavaScript实现的项目", url: "project2-1/index.html" },
    { name: "项目2-2", description: "这是另一个用JavaScript实现的项目", url: "project2-2/index.html" },
    // 添加更多项目...
  ],
  group3: [
    { name: "项目3-1 Quote Generator", description: "这是一个用JavaScript实现的项目", url: "project3-1/index.html" },
    { name: "项目3-2", description: "这是另一个用JavaScript实现的项目", url: "project3-2/index.html" },
    // 添加更多项目...
  ],
  group4: [
    { name: "项目4-1 Blackjack", description: "这是一个用JavaScript实现的项目", url: "project4-1/index.html" },
    { name: "项目4-2 Rock Paper Scissors", description: "这是另一个用JavaScript实现的项目", url: "project4-2/index.html" },
    { name: "项目4-3 Midi Piano", description: "这是另一个用JavaScript实现的项目", url: "project4-3/index.html" }
    // 添加更多项目...
  ],
  group5: [
    { name: "项目5-1", description: "这是一个用JavaScript实现的项目", url: "project5-1/index.html" },
    { name: "项目5-2", description: "这是另一个用JavaScript实现的项目", url: "project5-2/index.html" },
    // 添加更多项目...
  ]
};

const navLinks = document.getElementById('nav-links');
const projectsContainer = document.getElementById('projects-container');

// 生成导航链接
Object.keys(projects).forEach(group => {
  const link = document.createElement('li');
  link.innerHTML = `<a href="#" data-group="${group}">${group}</a>`;
  navLinks.appendChild(link);
});

// 处理导航点击事件
navLinks.addEventListener('click', (event) => {
  event.preventDefault();
  const target = event.target;
  if (target.tagName === 'A') {
    const group = target.getAttribute('data-group');
    displayProjects(group);
  }
});

// 显示指定组的项目
function displayProjects(group) {
  projectsContainer.innerHTML = '';
  projects[group].forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.className = 'project';

    const title = document.createElement('h2');
    title.textContent = project.name;

    const description = document.createElement('p');
    description.textContent = project.description;

    const link = document.createElement('a');
    link.href = project.url;
    link.textContent = '查看项目';

    projectElement.appendChild(title);
    projectElement.appendChild(description);
    projectElement.appendChild(link);

    projectsContainer.appendChild(projectElement);
  });
}

// 默认显示第一个组的项目
displayProjects(Object.keys(projects)[0]);