
//Global variables for the following buttons: Alerts, Favorite, Watch, and share
const notif = document.getElementById('iconalert');
const favsNodes = document.getElementsByClassName('iconstar');
const eyesNodes = document.getElementsByClassName('iconeye');
const sharesNodes = document.getElementsByClassName('iconshare');

let favsArr = Array.from(favsNodes);
let eyesArr = Array.from(eyesNodes);
let sharesArr = Array.from(sharesNodes);

let notifStatus = true;

listen();

function listen() {
    notif.addEventListener('click', toggleNotify);

    favsArr.forEach((fav) => fav.addEventListener('click', toggleFav));
    eyesArr.forEach((eye) => eye.addEventListener('click', toggleWatch));
    sharesArr.forEach((share) => share.addEventListener('click', toggleShare));
}

function toggleNotify() {
    if (notifStatus === true) {
        notif.src = './images/icons/bell-off-outline.svg';
    }
    else {
        notif.src = './images/icons/bell-ring-outline.svg';
    }
    notifStatus = !notifStatus;
}

function toggleFav() {

}

function toggleWatch() {

}

function toggleShare() {

}