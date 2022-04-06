const humburger = document.getElementById('humburger');
humburger.addEventListener('click', () => {
  document.getElementById('top-navigation').style.display = 'none';
  document.getElementById('topSection').style.display = 'none';
  document.getElementById('projectIntro').style.display = 'none';
  document.getElementById('projectCards').style.display = 'none';
  document.getElementById('meSection').style.display = 'none';
  document.getElementById('form-container').style.display = 'none';
  document.getElementById('socialmedia-2').style.display = 'none';
  document.getElementById('menu').style.display = 'block';
});

const closingIcon = document.getElementById('closingIcon');
closingIcon.addEventListener('click', () => {
  document.getElementById('top-navigation').style.display = 'block';
  document.getElementById('topSection').style.display = 'flex';
  document.getElementById('projectIntro').style.display = 'grid';
  document.getElementById('projectCards').style.display = 'block';
  document.getElementById('meSection').style.display = 'grid';
  document.getElementById('form-container').style.display = 'flex';
  document.getElementById('socialmedia-2').style.display = 'block';
  document.getElementById('menu').style.display = 'none';
});

const linkA = document.getElementById('linkA');
linkA.addEventListener('click', () => {
  document.getElementById('top-navigation').style.display = 'block';
  document.getElementById('topSection').style.display = 'flex';
  document.getElementById('projectIntro').style.display = 'grid';
  document.getElementById('projectCards').style.display = 'block';
  document.getElementById('meSection').style.display = 'grid';
  document.getElementById('form-container').style.display = 'flex';
  document.getElementById('socialmedia-2').style.display = 'block';
  document.getElementById('menu').style.display = 'none';
});

const linkB = document.getElementById('linkB');
linkB.addEventListener('click', () => {
  document.getElementById('top-navigation').style.display = 'block';
  document.getElementById('topSection').style.display = 'flex';
  document.getElementById('projectIntro').style.display = 'grid';
  document.getElementById('projectCards').style.display = 'block';
  document.getElementById('meSection').style.display = 'grid';
  document.getElementById('form-container').style.display = 'flex';
  document.getElementById('socialmedia-2').style.display = 'block';
  document.getElementById('menu').style.display = 'none';
});

const linkC = document.getElementById('linkC');
linkC.addEventListener('click', () => {
  document.getElementById('top-navigation').style.display = 'block';
  document.getElementById('topSection').style.display = 'flex';
  document.getElementById('projectIntro').style.display = 'grid';
  document.getElementById('projectCards').style.display = 'block';
  document.getElementById('meSection').style.display = 'grid';
  document.getElementById('form-container').style.display = 'flex';
  document.getElementById('socialmedia-2').style.display = 'block';
  document.getElementById('menu').style.display = 'none';
});

const popup = {
  titlemobile: 'Multi Post Stories',
  titledesktop: 'Keeping track of hundreds of components website',
  popupimage: 'pics/popup.png',
  popuptext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  desktoptext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
};

const titleMobile = document.getElementById('titleMobile');
titleMobile.textContent = popup.titlemobile;

const titleDesktop = document.getElementById('titleDesktop');
titleDesktop.textContent = popup.titledesktop;

const imageMobile = document.getElementById('imageMobile');
imageMobile.src = popup.popupimage;

const textMobile = document.getElementById('textMobile');
textMobile.textContent = popup.popuptext;

const imageDesktop = document.getElementById('imageDesktop');
imageDesktop.src = popup.popupimage;

const textDesktop = document.getElementById('textDesktop');
textDesktop.textContent = popup.desktoptext;

const projectDetails = document.querySelectorAll('.seeProject');

for (let i = 0; i < projectDetails.length; i += 1) {
  projectDetails[i].addEventListener('click', () => { 
    if (window.screen.width < 768) {
      document.getElementById('top-navigation').style.display = 'none';
      document.getElementById('topSection').style.display = 'none';
      document.getElementById('projectIntro').style.display = 'none';
      document.getElementById('projectCards').style.display = 'none';
      document.getElementById('meSection').style.display = 'none';
      document.getElementById('form-container').style.display = 'none';
      document.getElementById('socialmedia-2').style.display = 'none';
      document.getElementById('menu').style.display = 'none';
      document.getElementById('popupDesktop').style.display = 'none';
      document.getElementById('imagePopup').style.display = 'flex'; 
    } else {
      document.getElementById('portfolioHeader').style.display = 'none';
      document.getElementById('top-navigation').style.display = 'none';
      document.getElementById('topSection').style.display = 'none';
      document.getElementById('projectIntro').style.display = 'none';
      document.getElementById('projectCards').style.display = 'none';
      document.getElementById('meSection').style.display = 'none';
      document.getElementById('form-container').style.display = 'none';
      document.getElementById('socialmedia-2').style.display = 'none';
      document.getElementById('menu').style.display = 'none';
      document.getElementById('popupDesktop').style.display = 'flex';
      document.getElementById('imagePopup').style.display = 'none';
    }
  });
}

const closingIcon2 = document.getElementById('closingIcon2');
closingIcon2.addEventListener('click', () => {
  document.getElementById('top-navigation').style.display = 'block';
  document.getElementById('topSection').style.display = 'flex';
  document.getElementById('projectIntro').style.display = 'grid';
  document.getElementById('projectCards').style.display = 'block';
  document.getElementById('meSection').style.display = 'grid';
  document.getElementById('form-container').style.display = 'flex';
  document.getElementById('socialmedia-2').style.display = 'block';
  document.getElementById('menu').style.display = 'none';
  document.getElementById('popupDesktop').style.display = 'none';
  document.getElementById('imagePopup').style.display = 'none';
});

const closingIcon3 = document.getElementById('closingIcon3');
closingIcon3.addEventListener('click', () => {
  document.getElementById('top-navigation').style.display = 'block';
  document.getElementById('topSection').style.display = 'flex';
  document.getElementById('projectIntro').style.display = 'grid';
  document.getElementById('projectCards').style.display = 'block';
  document.getElementById('meSection').style.display = 'grid';
  document.getElementById('form-container').style.display = 'flex';
  document.getElementById('socialmedia-2').style.display = 'block';
  document.getElementById('menu').style.display = 'none';
  document.getElementById('popupDesktop').style.display = 'none';
  document.getElementById('imagePopup').style.display = 'none';
});

{
  "no-trailing-spaces"; [2, { "skipBlankLines": true }]
}