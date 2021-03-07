function authorization() {

    const btnLog = document.querySelector('.autho'),
        modal = document.querySelector('.modal');


    function openWindowModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }
    function closeWindowModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
    btnLog.addEventListener('click', openWindowModal);

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape' && modal.classList.contains('show')){
            closeWindowModal();
        }
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal){
            closeWindowModal();
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