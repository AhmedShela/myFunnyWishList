'use strict';

Wish.all=[];
function Wish(disc,wishdate){
    this.wishDisc = disc;
    this.wishDate = wishdate;
    this.comeTrue = genRandomNum();
    Wish.all.push(this)
}
var container = document.getElementById('divResult');
var btn = document.getElementById('btnSubmit');
var tbl = document.getElementById('ResultTBL');
container.appendChild(tbl)
var headRow = document.createElement('tr');
tbl.appendChild(headRow);

var hd1 = document.createElement('th')
headRow.appendChild(hd1)
var hd2 = document.createElement('th')
headRow.appendChild(hd2)
var hd3 = document.createElement('th')
headRow.appendChild(hd3)
hd1.textContent = 'Wish Title';
hd2.textContent = 'Expected Date';
hd3.textContent = 'your wish will come true after';

btn.addEventListener('click',handleSubmit);
function handleSubmit(event){
    event.preventDefault();
var userWish = document.getElementById('wishText').value
var userWishDate = document.getElementById('wishDate').value
var newWish = new Wish(userWish,userWishDate)
localStorage.setItem('wishs',JSON.stringify(Wish.all))
renderWishs()
}
function renderWishs(){
    var wishArr = [];
    wishArr = JSON.parse(localStorage.getItem('wishs'));
    console.log(wishArr);
    if (wishArr){
        // tbl.remove(tbl.firstChild)
        for (let i = 0; i < wishArr.length; i++) {
            var row = document.createElement('tr');
            tbl.appendChild(row);
            var td1 = document.createElement('td');
            row.appendChild(td1);
            var td2 = document.createElement('td');
            row.appendChild(td2);
            var td3 = document.createElement('td');
            row.appendChild(td3);
            td1.textContent = `${wishArr[i].wishDisc}`
            td2.textContent = `${wishArr[i].wishDate}`
            td3.textContent = `${wishArr[i].comeTrue}`
        }
    }
}
function genRandomNum(){
    return Math.floor(Math.random() * (99 - 1 + 1)) + 1;
}
renderWishs();