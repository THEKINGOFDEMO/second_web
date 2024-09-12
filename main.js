const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['ggb_1.jpg', 'ggb_2.jpg', 'ggb_3.jpg','ggb_4.jpg','ggb_5.jpg','ggb_6.jpg'];
const alts = {
  'ggb_1.jpg' : '头像是我你不满意',
  'ggb_2.jpg' : '拿捏不了你小呆呆',
  'ggb_3.jpg' : '小呆呆持枪',
  'ggb_4.jpg' : '别看我，我也没办法',
  'ggb_5.jpg' : '只因侠',
  'ggb_6.jpg' : 'ggb吃包子'
}

/* Looping through images */

for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});