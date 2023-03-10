const rus = document.querySelectorAll('.rus')
const ru = document.querySelectorAll('.ru')
const eng = document.querySelectorAll('.eng')
const en = document.querySelectorAll('.en')
const ab = document.querySelector('.ab')
const body = document.body

defolt = () => {
    for(var i=0; i<en.length; i++)en[i].style.display='flex'
    for(let i = 0; i < ru.length; i++)ru[i].style.display='none'
}

defolt()

const ruse = [].forEach.call(rus, function(el){
    el.addEventListener('click', () => {
        for(var i=0; i<en.length; i++)en[i].style.display='none'
        for(var i=0; i<ru.length; i++)ru[i].style.display='flex'
        for(let i=0; i<rus.length; i++)rus[i].style.color = 'black'
        for(let i=0; i<eng.length; i++)eng[i].style.color = '#828282'
    })
});

const enge = [].forEach.call(eng, function(el){
    el.addEventListener('click', () => {
        for(var i=0; i<en.length; i++)en[i].style.display='flex'
        for(let i = 0; i < ru.length; i++)ru[i].style.display='none'
        for(let i=0; i<rus.length; i++)rus[i].style.color = '#828282'
        for(let i=0; i<eng.length; i++)eng[i].style.color = 'black'
    })
})



// Прокрутка при клике 

const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick)
    });

    function onMenuLinkClick(e){
        const menuLink = e.target
        // Проверка ошибок
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto)
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight // Учитывает расстояние шапки

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            })
            e.preventDefault()
        }
    }
}

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
  
    if (window.innerWidth > 768) {
      document.querySelectorAll('.section').forEach((el, i) => {
        if (el.offsetTop - document.querySelector('.navbar').clientHeight <= scrollDistance) {
          document.querySelectorAll('.navbar a').forEach((el) => {
            if (el.classList.contains('active')) {
              el.classList.remove('active');
            }
          });
  
          document.querySelectorAll('.navbar li')[i].querySelector('a').classList.add('active');
        }
      });
    }
  });