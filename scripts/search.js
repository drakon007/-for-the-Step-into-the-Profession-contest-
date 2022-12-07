let list = ['JavaScript','Kotlin','Rust','PHP','Ruby','Java','MarkDown','Python','C++','Fortran','Assembler']
const result = document.getElementById('results')
renderList(list,result)

function filter(val,list){
let result=[];
  list.forEach(i=>{
    if(i.indexOf(val)!=-1)
      result.push(i)
  })
return result;
}

function renderList(_list=[],el=document.body){
    el.innerHTML='';
  _list.forEach(i=>{
    let new_el = document.createElement('li')
    new_el.innerHTML=i
    el.appendChild(new_el)
  })
}

document.getElementById('search').addEventListener('input',e=>{
let new_arr = filter(e.target.value,list)
renderList(new_arr,result)
})

//получаем все подобные элементы
const filterData = document.querySelectorAll('.box')
// получаем эллемент новигации и ожидаем клика в него 
document.querySelector('nav').addEventListener('click', event=> {
    // Провека нажатия на элемент li иначе ничего не делать
    if (event.target.tagName !== 'li') return false;
    // ищет по data-filter
    let filterClass = event.target.dateset['filter'];
    filterData.forEach( elem=> {
        if (elem.classList.contains(filterClass)) {
            elem.classList.add('hide') //не забыть сделать
        }
    })


})