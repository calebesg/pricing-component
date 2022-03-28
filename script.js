const slider = document.getElementById('traffic');
const fill = document.querySelector('.fill');
const displayPageView = document.querySelector('.display--view');
const typePayment = document.getElementById('payment');
const displayPrice = document.querySelector('.price span');
const displayTypePayment = document.querySelector('.price small');

const playmentPlans = [
  {
    value: 8,
    quantity: 10,
  },
  {
    value: 12,
    quantity: 50,
  },
  {
    value: 16,
    quantity: 100,
  },
  {
    value: 24,
    quantity: 500,
  },
  {
    value: 36,
    quantity: 1,
  },
];

let currentPlan = playmentPlans[0];
let yearPlan = false;
displayTypePayment.textContent = '/ month';

const applyDiscount = function () {
  const totalAnnual = currentPlan.value * 12 * 0.25;

  displayPageView.textContent = currentPlan.quantity;
  displayPrice.textContent = totalAnnual.toFixed(2);
};

const calculate = function () {
  if (yearPlan) return applyDiscount();

  displayPageView.textContent = currentPlan.quantity;
  displayPrice.textContent = currentPlan.value.toFixed(2);
};

const moveBar = function () {
  const sliderPosition = slider.value;

  fill.style.width = `${sliderPosition * 25}%`;

  currentPlan = playmentPlans[sliderPosition];
};

slider.addEventListener('input', function () {
  moveBar();
  calculate();
});

typePayment.addEventListener('change', function () {
  yearPlan = !yearPlan;
  displayTypePayment.textContent = yearPlan ? '/ year' : '/ month';
  calculate();
});

moveBar();
