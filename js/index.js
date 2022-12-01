

let regions = [];
let regionsList = document.querySelector('.inner-box');
let mobileRegionsList = document.querySelector('.inner-box-mobile');

console.log(regionsList)

window.addEventListener('load', async function () {
 let url = './files/regions.json'
 let response = await fetch(url)
 let json = await response.json();
 json.forEach(el => {
  regions.push(el.region)
 });
  create()
})

create = () => {
for (let i = 0; i < regions.length; i++) {
  let label = document.createElement("label");
  let label1 = document.createElement("label");
  let input = document.createElement("input");
  let input1 = document.createElement("input");
  let p = document.createElement("p");
  let p1 = document.createElement("p");
  p.textContent = `${regions[i]}`;
  p1.textContent = `${regions[i]}`;
  input.type = 'checkbox';
  input1.type = 'checkbox';
  
  label.appendChild(input);
  label.appendChild(p);
  label1.appendChild(input1);
  label1.appendChild(p1);
  
  mobileRegionsList.appendChild(label1);
  regionsList.appendChild(label);
 }}


 let stars = document.querySelectorAll('.stars');

 for(let i = 0; i < stars.length; i++){
  stars[i].addEventListener('click', () => {
    console.log('click')
    stars[i].classList.toggle('active')
  })
 }


let filterButton = document.querySelector('.filter-title');
let MobileFilter = document.querySelector('.mobile-filter');
let submit = document.querySelector('.submit-2')
filterButton.addEventListener('click', () => {
 MobileFilter.classList.add('active')
})

submit.addEventListener('click', () => {
  MobileFilter.classList.remove('active')
})


