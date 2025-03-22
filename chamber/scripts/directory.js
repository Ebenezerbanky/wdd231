// async function fetchMembers() {
//   const response = await fetch('data/members.json');
//   const members = await response.json();
//   displayMembers(members);
// }

// function displayMembers(members) {
//   const cardView = document.getElementById('cardview');
//   const listView = document.getElementById('listview').querySelector('table');

//   members.forEach(member => {
//     // Create card view
//     const card = document.createElement('div');
//     card.classList.add('card');
//     card.innerHTML = `
//       <img src="images/${member.image}" alt="${member.name}">
//       <h3>${member.name}</h3>
//       <p>${member.address}</p>
//       <p>${member.phone}</p>
//       <a href="${member.website}" target="_blank">${member.website}</a>
//     `;
//     cardView.appendChild(card);

//     // Create list view
//     const row = document.createElement('tr');
//     row.innerHTML = `
//       <td>${member.name}</td>
//       <td>${member.address}</td>
//       <td>${member.phone}</td>
//       <td><a href="${member.website}" target="_blank">${member.website}</a></td>
//     `;
//     listView.appendChild(row);
//   });
// }

// function toggleView(view) {
//   const cardView = document.getElementById('cardview');
//   const listView = document.getElementById('listview');

//   if (view === 'grid') {
//     cardView.style.display = 'flex';
//     listView.style.display = 'none';
//   } else {
//     cardView.style.display = 'none';
//     listView.style.display = 'table';
//   }
// }

// document.getElementById('gridselect').addEventListener('click', () => toggleView('grid'));
// document.getElementById('listselect').addEventListener('click', () => toggleView('list'));

// fetchMembers();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
