const slider = document.getElementById('traffic');
const fill = document.querySelector('.fill');

const moveBar = function () {
  fill.style.width = `${slider.value}%`;
};

moveBar();

slider.addEventListener('input', moveBar);
