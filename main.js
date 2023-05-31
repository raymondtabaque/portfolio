let activateButton = document.getElementById('headerbutton');
activateButton.onclick = togButton;

function togButton () {
    if (document.getElementsByTagName('p')[0].innerHTML === 'Night mode') {
        nightMode();
    } else {
        lightMode();
    }
}


function nightMode () {
    let bgcolor = document.body.style;
    bgcolor.color = 'white';
    bgcolor.backgroundColor='black';
    document.getElementById('headerbutton').style.backgroundColor ='gray';
    document.getElementsByTagName('p')[0].innerHTML ='Light mode';
    document.getElementsByTagName('header')[0].style.backgroundColor='black';

    for (let i = 0; i < document.getElementsByClassName('projects').length; i++ ) {
        document.getElementsByClassName('projects')[i].style.borderColor = 'white';
    }
}

function lightMode () {
    let bcolor = document.body.style;
    bcolor.color = 'black';
    bcolor.backgroundColor='white';
    document.getElementById('headerbutton').style.backgroundColor ='#f2c300';
    document.getElementsByTagName('p')[0].innerHTML ='Night mode';
    document.getElementsByTagName('header')[0].style.backgroundColor='navy';

    for (let i = 0; i < document.getElementsByClassName('projects').length; i++ ) {
        document.getElementsByClassName('projects')[i].style.borderColor = 'black';
    }
}