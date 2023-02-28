const rus = document.querySelectorAll('.rus')
const ru = document.querySelectorAll('.ru')
const eng = document.querySelectorAll('.eng')
const en = document.querySelectorAll('.en')

defolt = () => {
    for(var i=0; i<en.length; i++)en[i].style.display='flex'
    for(let i = 0; i < ru.length; i++)ru[i].style.display='none'
}

defolt()

const ruse = [].forEach.call(rus, function(el){
    el.addEventListener('click', () => {
        for(var i=0; i<en.length; i++)en[i].style.display='none'
    for(var i=0; i<ru.length; i++)ru[i].style.display='flex'
    })
});

const enge = [].forEach.call(eng, function(el){
    el.addEventListener('click', () => {
        for(var i=0; i<en.length; i++)en[i].style.display='flex'
    for(let i = 0; i < ru.length; i++)ru[i].style.display='none'
    })
})