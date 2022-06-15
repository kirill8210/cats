//const API_KEY = 'fd128341-c8cf-490e-9e4d-70e9efb2479f';
const list  = document.querySelector('.list');

const getData = () => {
    fetch(`https://api.thecatapi.com/v1/breeds`)
        .then(response => response.json())
        .then(data => {
            const arrayImg = data.reduce((acc, el) => {
                if (el !== undefined){
                    acc.push(el.image);
                }
                return acc;
            }, []);

            const urlImg = arrayImg.filter(el => el).map(el => el.url).filter(el => el);

            const cards = urlImg.map(oneExchange);
            list.append(...cards);

        });

};

getData();

const oneExchange = (data) => {
    const card = document.createElement('div');
    card.classList.add("list_item");

    card.insertAdjacentHTML('afterbegin', `
        <div class="cats">
            <img src=${data} alt="cats">
        </div>        
        <div class="likes">
            <img src="img/like.svg" alt="">
        </div>     
    `);

    return card;
};
