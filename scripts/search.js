let travel = document.querySelector('.travel__content')

let travelImg = document.createElement('div')
travelImg.classList.add('img__travel')
//добавить вставку картинки 

let travelText = document.createElement('div')
travelImg.classList.add('text__trevel')

let region = document.createElement('h3')
region.id = "region"
region.innerHTML = sessionStorage.getItem('region');

let name_travel = document.createElement('p')
name_travel.id = "name_travel"
name_travel.innerHTML = "Name trevel"

let difficult = document.createElement('p')
difficult.id = "difficult"
difficult.innerHTML = sessionStorage.getItem('level');

let colov = document.createElement('p')
colov.id = "colov"
colov.innerHTML = sessionStorage.getItem('colov');

let date = document.createElement('p')
date.id = "date"
date.innerHTML = sessionStorage.getItem('date');

travelText.appendChild(region)
travelText.appendChild(name_travel)
travelText.appendChild(difficult)
travelText.appendChild(colov)
travelText.appendChild(date)

travel.appendChild(travelImg)
travel.appendChild(travelText)

