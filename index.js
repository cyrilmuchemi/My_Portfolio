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
  title_mobile: 'Multi Post Stories',
  title_desktop: 'Keeping track of hundreds of components website',
  popup_image: 'pics/popup.png',
  popup_text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'
}

const titleMobile = document.getElementById('titleMobile');
titleMobile.textContent = popup.title_mobile;

const titleDesktop = document.getElementById('titleDesktop');
titleDesktop.textContent = popup.title_desktop;

const imageMobile = document.getElementById('imageMobile');
imageMobile.src = popup.popup_image;

const textMobile = document.getElementById('textMobile');
textMobile.textContent = popup.popup_text;