// Seleziono contenitore
const selectcontainer = document.getElementById("team-container-id");
// Seleziono button add
const addbutton = document.getElementById("addMemberButton");

// Creo array con i cards
let cards = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Wayne Barnett",
    role: "Barbara Ramos",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

console.log(cards);


// function che ricarica l array con immagini
function reload() {
  selectcontainer.innerHTML = "";
  for (let i = 0; i < cards.length; i++) {
    selectcontainer.innerHTML += `<div class="team-card">
    <div class="card-image">
      <img
        src="img/${cards[i].image}";
        alt="${cards[i].role}"
      />
    </div>
    <div class="card-text">
      <h3>${cards[i].name}</h3>
      <p>${cards[i].role}</p>
    </div>
  </div>`;
  }
}

// chiamo la function
reload();



// Aggiungo evento al button add
addbutton.addEventListener("click", function () {
    // Seleziono valori dei input
  let newname = document.getElementById("name").value;
  let newrole = document.getElementById("role").value;
  let newimage = document.getElementById("image").value;
  console.log(
    newname + " " + newrole + " " + newimage
  );
//   Inserisco nel array card nuova
  cards.push({ name : newname, role : newrole, image : newimage });
//   ricarico cards con array aggiornato
  reload();
});


