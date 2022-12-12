/*
    для переноса данных
// Сохранить значение в sessionStorage
sessionStorage.setItem('key', 'value');
// Получить значение из sessionStorage
var data = sessionStorage.getItem('key');
// Удалить значение из sessionStorage
sessionStorage.removeItem('key');
// Очистить
sessionStorage.clear();
*/

let form = document.querySelector("#form");

        // слушаем нажатие
        form.addEventListener("submit", function (event) {

          // сохраняем старую страницу
            let data = new FormData(form);

            for (const entry of data) {

              // нулевой - имя данноого инпута
              // первый - id элемента на который нажали

                if (entry[0] === "region") {
                  sessionStorage.setItem('region', entry[1]);
                }
                if (entry[0] === "date") {
                  sessionStorage.setItem('date', entry[1]);
                }
                if (entry[0] === "colov") {
                  sessionStorage.setItem('colov', entry[1]);
                }
                if (entry[0] === "level") {
                  sessionStorage.setItem('level', entry[1]);
                }

            };
            event.preventDefault();
            // переход на другую страницу
            window.location = "./search.html";
        }, false);

        