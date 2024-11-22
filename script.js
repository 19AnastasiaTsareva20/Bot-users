const userList = document.getElementById('userList');
const searchInput = document.getElementById('searchInput');
const userDetail = document.getElementById('userDetail');

let users = []; // Массив для хранения пользователей

// Генерация 20 пользователей с рандомными именами
function generateUsers() {
  const names = ["John", "Jane", "Alice", "Bob", "Emily", "David", "Olivia", "William", "Ava", "Ethan", "Sophia", "Mia", "Noah", "Isabella", "Liam", "Charlotte", "Mason", "Evelyn", "Logan", "Abigail"];
  const lastNames = ["Doe", "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Wilson", "Martinez", "Anderson", "Taylor", "Thomas", "Hernandez", "Moore", "Martin", "Jackson", "Thompson"];

  for (let i = 0; i < 20; i++) {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const randomAvatarUrl = `https://avatars.dicebear.com/api/human/${randomName + randomLastName}.svg`; // Используйте Dicebear для генерации аватаров
    users.push({
      name: `${randomName} ${randomLastName}`,
      avatarUrl: randomAvatarUrl
    });
  }
}

generateUsers(); // Генерация пользователей при загрузке страницы

function displayUsers(users) {
  userList.innerHTML = '';
  users.forEach(user => {
    const userElement = document.createElement('div');
    userElement.classList.add('user');
    userElement.textContent = user.name;
    userElement.addEventListener('click', () => displayUserDetails(user));
    userList.appendChild(userElement);
  });
}

function displayUserDetails(user) {
  userDetail.innerHTML = `
    <img src="${user.avatarUrl}" alt="${user.name}">
    <p>${user.name}</p>
  `;
}

function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm));
  displayUsers(filteredUsers);
}

// Initial Fetch
displayUsers(users);

// Event listeners
searchInput.addEventListener('input', handleSearch);