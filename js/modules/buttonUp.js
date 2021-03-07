function buttonUp(buttonSelector) {

    const btn = document.querySelector(buttonSelector);

    function scrollFunction() {
        if (document.documentElement.scrollTop > 20) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    }

    window.addEventListener('scroll', scrollFunction);

    btn.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    });
}

export default buttonUp;