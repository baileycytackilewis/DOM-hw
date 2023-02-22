(function () {

const howManyCoins = document.getElementById('count');
const coinType = document.getElementById('coin');
const button = document.getElementById('make-money');
const coinContainer = document.getElementById('coins');

// console.log(howManyCoins);
// console.log(coinType);
// console.log(button);


function makeMoney(event) {

for (let i = 0; i < +howManyCoins.value; i++){

    const addCoin = document.createElement('div');
    const coinText = document.createElement('p');
    coinText.innerText = coinType.value;
    addCoin.append(coinText);
    addCoin.classList.add('coin');
    addCoin.classList.add(coinType.value);
    coinContainer.append(addCoin);

    addCoin.addEventListener('click', (event) => {
        console.log(event.target);
        if (event.target.classList.contains('coin')) {
            event.target.remove();
        } else {
            event.target.parentNode.remove();
        }
    });


};
};


button.addEventListener('click', makeMoney);





}())