
const buttonRu = document.querySelector('.button_ru');
const buttonEn = document.querySelector('.button_en');


    buttonRu.addEventListener('click', () => {
        if (!buttonRu.classList.contains('_active')) {
            buttonRu.classList.add('_active');
            buttonEn.classList.remove('_active');
        }
    })

    buttonEn.addEventListener('click', () => {
        if (!buttonEn.classList.contains('_active')) {
            buttonEn.classList.add('_active');
            buttonRu.classList.remove('_active');
        }
    })