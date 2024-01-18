window.onload = () => {
    const page = document.querySelector('.page');
    const buttonPopup = document.querySelector('.button--popup');
    const reservationClose = document.querySelector('.reservation__close');
    const reservationPopup = document.querySelector('.reservation');
    document.querySelector('.page__bg').classList.add('page__bg--active');
    document.querySelector('.point__description').classList.add('point__description--active');
    document.querySelector('.point__title').classList.add('point__title--active');
    document.querySelector('.line').classList.add('line--active');
    document.querySelector('.point__circle--second').classList.add('point__circle--second--active');
    const removeActivePopup = (evt) => {
        page.style.overflow = 'auto';
        reservationPopup.classList.remove('reservation--active');
        buttonPopup.addEventListener('click', setActivePopup);
        reservationClose.removeEventListener('click', removeActivePopup);
    }
    const setActivePopup = (evt) => {
        evt.preventDefault();
        page.style.overflow = 'hidden';
        reservationPopup.classList.add('reservation--active');
        buttonPopup.removeEventListener('click', setActivePopup);
        reservationClose.addEventListener('click', removeActivePopup);
    }
    buttonPopup.addEventListener('click', setActivePopup);
    const setActiveTuman = () => {
        document.querySelector('.page__tuman').classList.add('page__tuman--active');
    };
    setTimeout(() => {
        setActiveTuman();
    }, 2500);
}