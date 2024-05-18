'use strict';

const imgClass = document.querySelector('.images');

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const renderCountry = function (data, className = '') {
//   const html = ` <article class="country ${className}">
//   <img class="country__img" src="${data.flag}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)} people</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//   </div>
// </article>`;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   // countriesContainer.style.opacity = 1;
// };

// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
//   )
//     .then(response => {
//       if (!response.ok) throw new Error('Wrong Coordinates');
//       return response.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city} and ${data.countryName}`);
//       return fetch(`https://restcountries.com/v2/name/${data.countryName}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]))
//     .catch(err => {
//       console.log(`Something went wrong ${err}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// whereAmI(52.508, 10.98);
// const request = fetch(
//   `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=51.50354&longitude=-0.12768`
// )
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     return data;
//   });
// console.log(request);

// const request1 = fetch(`https://restcountries.com/v3.1/capital/London`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     return data;
//   });

/* 2nd Challenge */

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgClass.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// let currentImage = createImage(
//   'https://img.etimg.com/thumb/width-1200,height-900,imgsize-16886,resizemode-75,msid-102702886/news/international/us/starting-naruto-check-where-to-begin-how-to-watch-heres-your-complete-guide-to-iconic-ninja-series.jpg'
// )
//   .then(img => {
//     currentImage = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//     return createImage('https://cdn.staticneo.com/w/naruto/Nprofile2.jpg');
//   })
//   .then(img => {
//     currentImage = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//   })
//   .catch(err => console.error(err));

/* Challenge 3 */

const loadNPause = async function () {
  try {
    let currentImage = await createImage(
      'https://img.etimg.com/thumb/width-1200,height-900,imgsize-16886,resizemode-75,msid-102702886/news/international/us/starting-naruto-check-where-to-begin-how-to-watch-heres-your-complete-guide-to-iconic-ninja-series.jpg'
    );
    console.log('Image 1 loaded');
    let waiting = await wait(2);
    currentImage.style.display = 'none';

    currentImage = await createImage(
      'https://cdn.staticneo.com/w/naruto/Nprofile2.jpg'
    );
    console.log('Image 2 loaded');
    waiting = await wait(2);
    currentImage.style.display = 'none';
  } catch (err) {
    console.error(err.message);
  }
};

// loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    const imgEl = await Promise.all(imgs);
    imgEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err.message);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
