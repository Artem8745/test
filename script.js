const $button = document.querySelector('ab')
const $form = document.querySelector('about_me-1')

$button.addEventListener('click', e => {
    // Прокрутим страницу к форме 
    $form.scrollIntoView({ 
      block: 'nearest', // к ближайшей границе экрана
      behavior: 'smooth', // и плавно 
    });
  });