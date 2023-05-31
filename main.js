let activateButton = document.getElementById('headerbutton');
activateButton.onclick = nightMode;


function nightMode () {
    let bgcolor = document.body.style;
    bgcolor.color = 'white';
    bgcolor.backgroundColor='black';
    document.getElementById('headerbutton').style.backgroundColor ='purple';
    document.getElementsByTagName('p')[0].innerHTML ='Light mode';
    document.getElementsByTagName('header')[0].style.backgroundColor='black';

    for (let i = 0; i < document.getElementsByClassName('projects').length; i++ ) {
        document.getElementsByClassName('projects')[i].style.backgroundColor = 'navy';
    }
}






/*function changeColor () {
    let bgcolor = document.body;
    let randomColor = '';
    let y = Math.floor(Math.random()*5);
    switch (y) {
        case 0:
            randomColor = 'beige';
            break;
        case 1:
            randomColor = 'F0FFFF';
            break;
        case 2:
            randomColor = '#F5F5F5';
            break;
        case 3:
            randomColor = '#DCDCDC';
            break;
        case 4:
            randomColor = 'white';
            break;
      }
      bgcolor.style.backgroundColor = randomColor;
    }*/