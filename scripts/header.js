let header = document.querySelector('header')

let logo = document.createElement('div')
logo.classList.add("logo")
let image = document.createElement('img')
image.classList.add("logo__img")
image.src  = 'https://turistpro.ru/wa-data/public/site/themes/goods/img/logo.png?v1585234235?v1.0.3.7'
image.alt = 'логотип компании'
logo.appendChild(image)

navigation_arr = ["Акции","Поиск","Управление бронированием"];
let navigation = document.createElement('div')
navigation.classList.add("navigation")
let newOl = document.createElement('ul')
newOl.classList.add("ul__navigation")

for (let nav of navigation_arr) {
    let navigation_spisok = document.createElement('li')
    navigation_spisok.classList.add("li__navigation")
    navigation_spisok.innerHTML = nav
    newOl.appendChild(navigation_spisok)
}

navigation.appendChild(newOl)

header.appendChild(logo);
header.appendChild(navigation);  



