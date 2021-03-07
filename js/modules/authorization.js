function openWindowModal(modalSelector) {
    const modal =  document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}
function closeWindowModal(modalSelector) {
    const modal =  document.querySelector(modalSelector);

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function authorization(triggerSelector, modalSelector) {

    const btnLog = document.querySelector(triggerSelector),
          modal = document.querySelector(modalSelector);

    btnLog.addEventListener('click', () => openWindowModal(modalSelector));

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape' && modal.classList.contains('show')){
            closeWindowModal(modalSelector);
        }
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal){
            closeWindowModal(modalSelector);
        }
    });

    // function showModalByScroll() {
    //     if (window.pageYOffset + document.documentElement.clientHeight >=
    //         document.documentElement.scrollHeight){
    //             openWindowModal();
    //             window.removeEventListener('scroll', showModalByScroll);
    //         }
    // }
    // window.addEventListener('scroll', showModalByScroll);
}

export default authorization;
export {closeWindowModal, openWindowModal};