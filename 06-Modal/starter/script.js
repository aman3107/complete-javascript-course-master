'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++) {
  // console.log(btnsShowModal[i].textContent);
  // btnsShowModal[i].addEventListener('click', function () {
  //   modal.classList.remove('hidden');
  //   overlay.classList.remove('hidden');
  //   btnCloseModal.addEventListener('click', function () {
  //     modal.classList.add('hidden');
  //     overlay.classList.add('hidden');
  //   });
  // });
  btnsShowModal[i].addEventListener('click', openModal);
}
btnCloseModal.addEventListener('click', closeModal);

// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
