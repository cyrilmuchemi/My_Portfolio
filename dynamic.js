//displaying cards dynamically

if (window.screen.width < 768){
  const cardData = [
    {
      title: 'Multi-Post Stories',
      background: 'pics/holder.png',
      description: 'A daily selection of privately personalized reads no accounts or sign-ups required has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
      technologies: ['css','html', 'bootstrap', 'Ruby']
    },

    {
      title: 'Profesional Art Printing Data',
      background: 'pics/proff.png',
      description: 'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry\'s standard',
      technologies: ['html', 'bootstrap', 'Ruby'],

    },
  ];

  let tech = '';
  cardData[0].technologies.forEach((technology) => { tech += ` <li>${technology}</li> `; });
  document.querySelector('.holder').innerHTML = `
  <img src= '${cardData[0].background}'>
  <h3>${cardData[0].title}</h3>
  <p>${cardData[0].description}</p>
  <div class="projectTag">
  <ul>
  ${tech}
  </ul>
  </div>

  <div class="firstButton">
  <button class="seeProject" type="button">See project</button>
  `
  //looping
  let cardID = '';
  let ID = [];
  for(let i = 1; i <= 6; i++){
      if(i===1){
          cardID = 'cardOne';
      }
      else if(i===2){
          cardID = 'secondCard';
      }
      else if(i===3){
          cardID = 'thirdCard';
      }
      else if(i===4){
          cardID = 'fourthCard';
      } else if(i===5){
          cardID = 'fifthCard';
      } else{
          cardID = 'sixthCard';
      }
      let tech = '';
  cardData[1].technologies.forEach((technology) => { tech += ` <li>${technology}</li> `; });
  ID[i] = document.querySelector('#projectCards');
  ID[i].innerHTML += `
  <div id="${cardID}">
  <h2>${cardData[1].title}</h2>
  <p>${cardData[1].description}</p>
    <div id="secondTag">
        <ul>
            ${tech}
        </ul>
        </div>
        <div class="Button1"><button class="seeProject" type="button">See Project</button></div>
  `
  }
}
else {
  const cardData = [
    {
      title: 'Multi-Post Stories',
      background: 'pics/holder.png',
      description: 'A daily selection of privately personalized reads no accounts or sign-ups required has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
      technologies: ['css','html', 'bootstrap', 'Ruby']
    },

    {
      title: '',
      background: '',
      description: '',
      technologies: [],
    },

    {
      title: 'Data Dashboard Healthcare',
      background: 'pics/proff.png',
      description: 'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry\'s standard',
      technologies: ['html', 'bootstrap', 'Ruby'],
    },

    {
      title: 'Website Protfolio ',
      background: 'pics/proff.png',
      description: 'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry\'s standard',
      technologies: ['html', 'bootstrap', 'Ruby'],
    },

    {
      title: 'Profesional Art Printing Data More',
      background: 'pics/proff.png',
      description: 'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry\'s standard',
      technologies: ['html', 'bootstrap', 'Ruby'],
    },

    {
      title: 'Data Dashboard Healthcare',
      background: 'pics/proff.png',
      description: 'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry\'s standard',
      technologies: ['html', 'bootstrap', 'Ruby'],
    },

    {
      title: 'Website Protfolio',
      background: 'pics/proff.png',
      description: 'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry\'s standard',
      technologies: ['html', 'bootstrap', 'Ruby'],
    },
  ];

    let tech = '';
    cardData[0].technologies.forEach((technology) => { tech += ` <li>${technology}</li> `; });
    document.querySelector('.holder').innerHTML = `
    <img src= '${cardData[0].background}'>
    <h3>${cardData[0].title}</h3>
    <p>${cardData[0].description}</p>
    <div class="projectTag">
    <ul>
    ${tech}
    </ul>
    </div>

    <div class="firstButton">
    <button class="seeProject" type="button">See project</button>
    `
    //looping
    let cardID = '';
    let ulID ='';
    let ID = [];
    for(let i = 1; i <= 6; i++){
        if(i===1){
            cardID = 'cardOne';
            ulID = 'secondTag';
        }
        else if(i===2){
            cardID = 'secondCard';
            ulID = 'thirdTag';
        }
        else if(i===3){
            cardID = 'thirdCard';
            ulID = 'fourthTag';
        }
        else if(i===4){
            cardID = 'fourthCard';
            ulID = 'fifthTag';
        } else if(i===5){
            cardID = 'fifthCard';
            ulID = 'sixthTag';
        } else{
            cardID = 'sixthCard';
            ulID = 'seventhTag';
        }
        let tech = '';

    if (cardID === 'cardOne') {
      cardData[i].technologies.forEach((technology) => { tech += ` <li>${technology}</li> `; });
    ID[i] = document.querySelector('#projectCards');
    ID[i].innerHTML += `
    <div id="${cardID}">
    <p>${cardData[i].description}</p>
      <div id="${ulID}">
          <ul>
              ${tech}
          </ul>
          </div>
          <div class="Button1"><button class="seeProject" type="button">See Project</button></div>
    `
    }
    else {
      cardData[i].technologies.forEach((technology) => { tech += ` <li>${technology}</li> `; });
      ID[i] = document.querySelector('#projectCards');
      ID[i].innerHTML += `
      <div id="${cardID}">
      <h3 id="desktopHeading">${cardData[i].title}</h3>
      <p>${cardData[i].description}</p>
        <div id="${ulID}">
            <ul>
                ${tech}
            </ul>
            </div>
            <div class="Button1"><button class="seeProject" type="button">See Project</button></div>
      `
    }
  }
}
