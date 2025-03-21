
let cardSelector = document.querySelector("#gridselect");
let listSelector = document.querySelector("#listselect");
let cardview = document.querySelector("#cardview");
let listview = document.querySelector("#listview");

cardSelector.addEventListener("click", (event) => {
  cardview.style.display = "grid";
  listview.style.display = "none";
  cardSelector.style.opacity = "1.0";
  listSelector.style.opacity = "0.5";
}
)
listSelector.addEventListener("click", (event) => {
  cardview.style.display = "none";
  listview.style.display = "block";
  cardSelector.style.opacity = "0.5";
  listSelector.style.opacity = "1.0";
}
)




function displayCard(card){
    
  let cardIt = document.createElement('section');

  let img = document.createElement('img');
  img.setAttribute('src', card.imageurl);
  img.setAttribute('alt', "Brand Logo");

  let h2 = document.createElement('h2');    
  h2.textContent = `${card.name}`;

  let p1 = document.createElement('p');
  p1.textContent = `Address: ${card.street}`;

  let p2= document.createElement('p');
  p2.textContent = `Phone: ${card.phone}`;

  

  cardIt.appendChild(img);
  cardIt.appendChild(h2);
  cardIt.appendChild(p1);
  cardIt.appendChild(p2);
  
  document.querySelector('div.cards').appendChild(cardIt);
}

function displayList(list){
  let card = document.createElement("tr");
  card.innerHTML=
  `<td>${list.name}</td>
   <td>${list.street}</td>
   <td>${list.phone}</td>
   <td><a href="${list.website}">website</a></td>`;

   document.querySelector ("#listview table").appendChild(card);
}

const requestURL = './data/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const bizlist = jsonObject['companies'];
    bizlist.forEach(displayCard);
    bizlist.forEach(displayList);

  });
