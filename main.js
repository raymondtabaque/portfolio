let activateButton = document.getElementById('headerbutton');
activateButton.onclick = changeColor;

function changeColor () {
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
    }