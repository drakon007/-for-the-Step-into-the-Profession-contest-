let footer = document.querySelector('footer')

let nombers = document.createElement('div')
nombers.innerHTML = "Телефон 8 (800) 555-33-10"
nombers.classList.add("nombers")


navigation_arr2 = ["Акции","Поиск","Управление бронированием"];
let navigation2 = document.createElement('div')
navigation2.classList.add("navigation")
let newOl2 = document.createElement('ul')
newOl2.classList.add("ul__navigation")

for (let nav of navigation_arr2) {
    let navigation_spisok = document.createElement('li')
    navigation_spisok.classList.add("li__navigation")
    navigation_spisok.innerHTML = nav
    newOl2.appendChild(navigation_spisok)
}

navigation2.appendChild(newOl2)

footer.appendChild(nombers);
footer.appendChild(navigation2);  