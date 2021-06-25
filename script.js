const main = document.getElementById('main')
const add_userBtn = document.getElementById('add_user')
const doubleBtn = document.getElementById('double')
const show_millionairesBtn = document.getElementById('show_millionaires')
const sortBtn = document.getElementById('sort')
const calculate_wealthBtn = document.getElementById('calculate_wealth')

let data = [

]

getRandomUser()
getRandomUser()
getRandomUser()

// Fetch random user and add money
async function getRandomUser(){
  const res = await fetch('https://randomuser.me/api')
  const data = await res.json()

  const user = data.results[0]

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  }
  console.log(newUser);

  addData(newUser);
}

// Add new obj to data array
function addData(obj){
  data.push(obj)
}

console.log(data);


