
//Global variables for the following buttons: Alerts, Favorite, Watch, and share
const notif = document.getElementById('iconalert');
const favsNodes = document.getElementsByClassName('iconstar');
const eyesNodes = document.getElementsByClassName('iconeye');
const sharesNodes = document.getElementsByClassName('iconshare');

//Convert nodelists to arrays
let favsArr = Array.from(favsNodes);
let eyesArr = Array.from(eyesNodes);
let sharesArr = Array.from(sharesNodes);

//Calls function to add event listeners
listen();

//Set default status of notification button
let notifStatus = true;

//Add event listeners
function listen() {
    notif.addEventListener('click', toggleNotify);

    //Event listeners for favs
    favsArr.forEach((fav) => fav.addEventListener('mouseover', (e) => hoverFavStart(e)));
    favsArr.forEach((fav) => fav.addEventListener('mouseleave', (e) => hoverFavEnd(e)));
    favsArr.forEach((fav) => fav.addEventListener('click', (e) => clickFav(e)));

    //Event listeners for watches
    eyesArr.forEach((eye) => eye.addEventListener('mouseover', (e) => hoverEyeStart(e)));
    eyesArr.forEach((eye) => eye.addEventListener('mouseleave', (e) => hoverEyeEnd(e)));
    eyesArr.forEach((eye) => eye.addEventListener('click', (e) => clickEye(e)));

    //Sets image on hover for share button
    sharesArr.forEach((share) => share.addEventListener('mouseover', (e) => {
        e.target.src = './images/icons/share-variant.svg';}
    ));

    //Sets image on end hover for share button
    sharesArr.forEach((share) => share.addEventListener('mouseleave', (e) => {
        e.target.src = './images/icons/share-variant-outline.svg';}
    ));
}

//Toggles notification status
function toggleNotify() {
    if (notifStatus === true) {
        notif.src = './images/icons/bell-off-outline.svg';
    }
    else {
        notif.src = './images/icons/bell-ring-outline.svg';
    }
    notifStatus = !notifStatus;
}

//Determine image source when hovering over favorite icon 
function hoverFavStart(favEvent) {
    let source = favEvent.target.getAttribute('src');

    switch (source) {
        case './images/icons/star-plus-outline.svg':
            favEvent.target.src = './images/icons/star-plus.svg';
            break;
        case './images/icons/star-plus.svg':
            favEvent.target.src = './images/icons/star-plus-outline.svg';
            break;
        case './images/icons/star-check-outline.svg':
            favEvent.target.src = './images/icons/star-remove.svg';
            break;
    }
    return;
}

//Determine image source when mouse leaves favorite icon
function hoverFavEnd(favEvent) {
    let source = favEvent.target.getAttribute('src');

    switch (source) {
        case './images/icons/star-plus.svg':
            favEvent.target.src = './images/icons/star-plus-outline.svg';
            break;
        case './images/icons/star-remove.svg':
            favEvent.target.src = './images/icons/star-check-outline.svg';
            break;
    }
    return;
}

//Determine image source when clicking favorite icon
function clickFav(favEvent) {
    let source = favEvent.target.getAttribute('src');

    switch (source) {
        case './images/icons/star-plus.svg':
            favEvent.target.src = './images/icons/star-remove.svg';
            break;
        case './images/icons/star-remove.svg':
            favEvent.target.src = './images/icons/star-plus.svg';
    }
    return;
}

//Determine image source when hovering over watch icon 
function hoverEyeStart(favEvent) {
    let source = favEvent.target.getAttribute('src');

    switch (source) {
        case './images/icons/eye-plus-outline.svg':
            favEvent.target.src = './images/icons/eye-plus.svg';
            break;
        case './images/icons/eye-plus.svg':
            favEvent.target.src = './images/icons/eye-plus-outline.svg';
            break;
        case './images/icons/eye-check-outline.svg':
            favEvent.target.src = './images/icons/eye-remove.svg';
            break;
    }
    return;
}

//Determine image source when mouse leaves watch icon
function hoverEyeEnd(favEvent) {
    let source = favEvent.target.getAttribute('src');

    switch (source) {
        case './images/icons/eye-plus.svg':
            favEvent.target.src = './images/icons/eye-plus-outline.svg';
            break;
        case './images/icons/eye-remove.svg':
            favEvent.target.src = './images/icons/eye-check-outline.svg';
            break;
    }
    return;
}

//Determine image source when clicking watch icon
function clickEye(favEvent) {
    let source = favEvent.target.getAttribute('src');

    switch (source) {
        case './images/icons/eye-plus.svg':
            favEvent.target.src = './images/icons/eye-remove.svg';
            break;
        case './images/icons/eye-remove.svg':
            favEvent.target.src = './images/icons/eye-plus.svg';
    }
    return;
}

function toggleShare(e) {
    if (e.target.src === './images/icons/share-variant-outline.svg') {
        e.target.src = './images/icons/share-variant.svg'
    }
}