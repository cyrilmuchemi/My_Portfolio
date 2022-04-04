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