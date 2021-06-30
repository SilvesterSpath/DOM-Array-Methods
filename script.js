const main = document.getElementById('main');
const add_userBtn = document.getElementById('add_user');
const doubleBtn = document.getElementById('double');
const show_millionairesBtn = document.getElementById('show_millionaires');
const sortBtn = document.getElementById('sort');
const calculate_wealthBtn = document.getElementById('calculate_wealth');

let data = [];

// Fetch random user and add money
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };
  console.log(newUser);

  addData(newUser);
}

// Double everyones money
function doubleMoney() {
  data = data.map((i) => {
    return { ...i, money: i.money * 2 };
  });

  updateDOM();
}

// Add new obj to data array
function addData(obj) {
  data.push(obj);
  console.log(data);

  updateDOM();
}

// Sort by richest
function sortByRichest() {
  const newdata = data.sort((a, b) => b.money - a.money);

  updateDOM(newdata);
}

function showMillionaires() {
  data = data.filter((i) => i.money > 1000000);
  updateDOM();
}

// Update DOM
function updateDOM(providedData = data) {
  // Clear the main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  providedData.forEach((i) => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${i.name}</strong> ${formatMoney(i.money)}`;
    main.appendChild(element);
  });
}

// Format number as money
function formatMoney(number) {
  const formattedNumber =
    '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); // 12,345.67
  return formattedNumber;
}

// Event listeners
add_userBtn.addEventListener('click', () => {
  getRandomUser();
});

doubleBtn.addEventListener('click', () => {
  doubleMoney();
});

sortBtn.addEventListener('click', () => {
  sortByRichest();
});

show_millionairesBtn.addEventListener('click', () => {
  showMillionaires();
});

console.log(data);
