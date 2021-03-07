'use strict';

window.addEventListener('DOMContentLoaded', () => {

    // Class for cards

    class Card {
        constructor(href, src, alt, restName, kitchen, deliveryTime, parentSelector, ...classes){
            this.href = href;
            this.src = src;
            this.alt = alt;
            this.restName = restName;
            this.kitchen = kitchen;
            this.deliveryTime = deliveryTime;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
            // this.min = ' мин';
        }

        render(){
            const element = document.createElement('div');
            const defaultClasses = ["col-lg-4", "col-md-6", "col-xs-12", "card-item"];
            if(this.classes.length < 4){
                for (let i = 0; i < 4; i++){
                    element.classList.add(defaultClasses[i]);
                }
            }else{
                this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML = `
                <a href=${this.href}>
                    <div  class="card">
                        <img src=${this.src} alt=${this.alt}>
                        <div id="n-rest" class="name-rest">${this.restName}</div>
                        <div class="kitchen">${this.kitchen}</div>
                        <div class="time-del"><span>${this.deliveryTime}</span> мин</div>
                    </div>
                </a>
            `;
            
            this.parent.append(element);
        }
    }  

    axios.get('http://localhost:3000/restourants')
        .then(data => {
            data.data.forEach(({href, src, alt, restName, kitchen, deliveryTime}) => {
                new Card(href, src, alt, restName, kitchen, deliveryTime, '#myList').render();
            });
        });    

    // Filter
    const input = document.querySelector('.site-search'),
        inputForm = document.querySelector('.search-box');

    inputForm.addEventListener('submit', e => e.preventDefault());

    function cardsFilter() {
        const request = new XMLHttpRequest();

        request.open('GET', 'db.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();

        request.addEventListener('load', () => {
            if (request.status === 200) {
                const inputValue = input.value.toUpperCase();
                
                axios.get('http://localhost:3000/restourants')
                .then(data => {
                    for (let i = 0; i < data.data.length; i++) {
                        const cards = document.querySelectorAll('.card-item');
                        if (!data.data[i].restName.toUpperCase().includes(inputValue)) {
                            cards[i].classList.add('hide');
                            cards[i].classList.remove('show');
                        }else {
                            cards[i].classList.add('show');
                            cards[i].classList.remove('hide');
                        }
                    }
                     
                });                                 
            }
        });
    }

    input.addEventListener('input', cardsFilter);


    

    

    

});