function forms() {

    const forms = document.querySelectorAll('.modal form');

    const message = {
        success: 'Вы авторизовались',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: data
        });
        return await res.json();
    }

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showthinksModal(message.success);
                form.reset();
            }).catch(() =>{
                showthinksModal(message.failure);
            }).finally(() =>{
                form.reset();
            })
        });
    }

    function showthinksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        
        prevModalDialog.classList.add('hide');
        openWindowModal();

        const thinksModal = document.createElement('div');
        thinksModal.classList.add('modal__dialog');
        thinksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thinksModal);
        setTimeout(() => {
            thinksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeWindowModal();
        }, 4000);
    }
}

export default forms;