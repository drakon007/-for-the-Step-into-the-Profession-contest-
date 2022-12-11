// Создание комментариев - - - - - - - - - - - - - - - - - - - - - - - - -

let comments = document.querySelector('.feetbacks-item')

for (let i = 0; i <= 4; i++) {

    // Див одного комментария 
    let oneСomment = document.createElement('div')
    oneСomment.classList.add('comments__feetback')

    // картинка пользователя
    let avatarСomment = document.createElement('div')
    avatarСomment.classList.add('avatar__comments')

    let avatar = document.createElement('img')
    avatar.src="./assets/image/avatar.jpg"
    avatar.alt="Аватар пользователя"

    avatarСomment.appendChild(avatar)

    //див комментария пользователя
    let textСomment = document.createElement('div')
    textСomment.classList.add('feetvack__comments')

    let comment = document.createElement('p')
    comment.innerHTML = "Невероятные туры, рекомендую. Лучше отдыза у меня не было никогда"

    textСomment.appendChild(comment)

    oneСomment.appendChild(avatarСomment)
    oneСomment.appendChild(textСomment)

    comments.appendChild(oneСomment)
    
}

// Создание комментариев - - - - - - - - - - - - - - - - - - - - - - - - -



// Создание акций - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

let actions = document.querySelector('.stock__content')

for (let i = 0; i <= 9; i++) {

    //див одной акции
    let oneAction = document.createElement('div')
    oneAction.classList.add('sentence__stock')

    //див для картинки акции
    let imgDiv = document.createElement('div')
    imgDiv.classList.add('img__sentence')

    let img = document.createElement('img')
    img.src = "./assets/image/Miami-Beach.jpg"
    img.alt = "картинка Маями"

    imgDiv.appendChild(img)

    //див для описания акции
    let textDiv = document.createElement('div')
    textDiv.classList.add('oisanie__sentence')

    let h3 = document.createElement('h3')
    h3.innerHTML = "Name Actions"

    let p = document.createElement('p')
    p.innerHTML = "opisanie Actions"

    let a = document.createElement('a')
    a.href = "#"

    let but = document.createElement('button')
    but.innerHTML = "Посмотреть"

    a.appendChild(but)

    textDiv.appendChild(h3)
    textDiv.appendChild(p)
    textDiv.appendChild(a)

    oneAction.appendChild(imgDiv)
    oneAction.appendChild(textDiv)

    actions.appendChild(oneAction)
}

// Создание акций - - - - - - - - - - - - - - - - - - - - - - - - - - - - -