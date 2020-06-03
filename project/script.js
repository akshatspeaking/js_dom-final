let nav = document.querySelector("ul");

let container = document.querySelector(".container");

let lis = document.querySelectorAll("li");





// Event listener on parent UL

nav.addEventListener("click", handleClick);


// HandleClick : to change container content by house

function handleClick(e) {

   // Clear container
   container.innerHTML = "";

   // Change Selected LI: first remove .selected from all LIs, then add .selected to event targer
   lis.forEach(li => li.classList.remove("selected"));
   e.target.classList.add("selected");
   
   // Fetch data

   let houseName = e.target.innerText;
   let housePoeple;
   let boxContent = "";

   // Loop and find matching house in GOT, then fetch that house content and display
   got.houses.forEach(house => {
     if (house.name == houseName) {
      housePoeple = house.people;
     }
   });


   // For each person, generate .box with details and add to container
   housePoeple.forEach(person => {
      boxContent = `<div class="box">
      <div class="flexrow">
         <img src="${person.image}" alt="${person.name}">
         <h2>${person.name}</h2>
      </div>
      <p>
      ${person.description}
      </p>
   </div>`;
   container.innerHTML += boxContent;
   // console.log(boxContent);
   })

   
}

// Default selected > Starks

nav.children[0].click();