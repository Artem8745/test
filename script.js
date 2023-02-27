const rus = document.querySelector('.rus')
const ru = document.querySelectorAll('.ru')
const eng = document.querySelector('.eng')
const en = document.querySelectorAll('.en')

rus.addEventListener('click', () => {
    for(var i=0; i<en.length; i++)en[i].style.display='none'
    for(var i=0; i<ru.length; i++)ru[i].style.display='flex'
})

eng.addEventListener('click', () => {
    for(var i=0; i<en.length; i++)en[i].style.display='flex'
    for(let i = 0; i < ru.length; i++)ru[i].style.display='none'
})

defolt = () => {
    for(var i=0; i<en.length; i++)en[i].style.display='flex'
    for(let i = 0; i < ru.length; i++)ru[i].style.display='none'
}

defolt()