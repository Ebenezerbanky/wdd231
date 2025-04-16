import { fetchTeamData } from './data.js';
import { setupModal, showModal } from './modal.js';

const container = document.getElementById('team-container');

function saveToLocalStorage(data) {
  localStorage.setItem('teamMembers', JSON.stringify(data));
}

function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem('teamMembers')) || [];
}

function createTeamCard(member) {
  const card = document.createElement('div');
  card.className = 'team-card';

  card.innerHTML = `
    <img src="${member.photo}" alt="${member.name}" />
    <h3>${member.name}</h3>
    <p><strong>${member.role}</strong></p>
    <p>${member.location}</p>
    <button class="view-bio" data-name="${member.name}">View Bio</button>
  `;

  const button = card.querySelector('button.view-bio');
  button.addEventListener('click', () => showModal(member));

  return card;
}

async function init() {
  setupModal();

  let data = getFromLocalStorage();

  if (data.length === 0) {
    data = await fetchTeamData();
    saveToLocalStorage(data);
  }

  // Render 15 items from the data
  data.slice(0, 15).forEach(member => {
    const card = createTeamCard(member);
    container.appendChild(card);
  });
}

init();
