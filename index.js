console.log(`Do or do not. There is not try.`)

const state = {
  pups: [],
  pupDetails: [],
}

const main = document.querySelector(`main`)

//get the api of puppies
const getPuppies = async () => {
  const puppies = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2501-FTB-ET-WEB-FT/players`);
  const allPups = await puppies.json();
  console.log(`All Pups` , allPups)

  state.pups = allPups.data.players;
  // console.log(allPups.data.players)
  renderPuppies();
}

const renderPuppies = () => {
  main.innerHTML = ``;

  const ol = document.createElement(`ol`);
  // console.log(ol)
  
  state.pups.forEach((singlePup) => {
    // console.log(`single pup` , singlePup);

    const li = document.createElement(`li`);
    // console.log(li);

    li.innerText = singlePup.name;
    // console.log(li);

    li.addEventListener(`click` , () => {
      console.log(`Pupper`, singlePup);

      state.pupDetails = singlePup;
      renderPupDetails();

    })
          ol.append(li);

  });

  main.append(ol);
}   //renderPuppies end curly bracket

const renderPupDetails = () => {
  const pupDetailsHTML = `
  <h1>${state.pupDetails.name}</h1>
  <p>${state.pupDetails.breed}</p>
  <p>${state.pupDetails.status}</p>
  <img src="${state.pupDetails.imageUrl}" style= width="50%" height="50%vh">`
  
  const button = document.createElement(`button`);
  button.innerText = `Back`;
  button.addEventListener(`click` , () => {
    renderPuppies();
  })
  main.innerHTML = pupDetailsHTML
  main.append(button)
}


getPuppies();