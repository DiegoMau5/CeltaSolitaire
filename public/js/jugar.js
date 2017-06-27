window.addEventListener("load", createBoard);

var huecoList = [];
huecoList = document.getElementsByClassName('gap');
var bolaList = [];
bolaList = document.getElementsByClassName('bola');



function createBoard() {



    var board = document.getElementById('board');
    var hueco_central = document.getElementById('hueco_central');
    var hueco_random = document.getElementById('hueco_random');
    var html = "";
    var id = "";


    for (var row = 1; row <= 7; row++) {
        html += "<ul>"
        for (var column = 1; column <= 7; column++) {
            id = "pos:" + row + "-" + column;

            switch (true) { // entra siempre en el switch
                case (row == 1 || row == 2 || row == 6 || row == 7) && (column == 1 || column == 2 || column == 6 || column == 7): // diferenciar tablero y fichas juego
                    html += "<li id=" + id + " class='celda'></li>";
                    break;
                default:
                    html += "<li id=" + id + " class='bola'  ></li>";

                    break;

            }

        }


        html += "</ul>";
    }


    board.innerHTML = html;



    var gap_Random = 34;

    if (hueco_random.checked == true) {

        while(gap_Random > bolaList.length){
           gap_Random = parseInt(Math.random()*32);

        }





       document.getElementById(bolaList[gap_Random].id).className = 'gap';


    } else {
      document.getElementById('pos:4-4').className = 'gap';
    }







    puntuacion = 0;

    document.getElementById('etiqueta_puntuacion').value = puntuacion;
    document.getElementById('etiqueta_puntuacion').style.color = "black";
    document.getElementById('jugar').addEventListener("click", createBoard);
    document.addEventListener("click", jugar);
    document.addEventListener("click", setTime);


    var cuadro_Resultado = document.getElementById('divCuadroResult');

    cuadro_Resultado.parentNode.removeChild(cuadro_Resultado);

    document.getElementById('minutes').value = "";
    document.getElementById('seconds').value = "";
    document.getElementById('countDown').value = "";





}

var timer = -1;


var clicked;
var posiblesMovimientos = [];
var puntuacion = document.getElementById('etiqueta_puntuacion');
var bolaConMovimiento = [];
var t;




function setTime(event){
  var minutes = document.getElementById('minutes').value;
  var seconds = document.getElementById('seconds').value;

if (minutes != "" ||seconds != "") {

  if (event.target.className == 'bola' ) {



    var m = 0;
    var s = 0;

    if (minutes != "") {
      m = parseInt(minutes);
    }
    if (seconds != "") {
      s = parseInt(seconds);
    }

    timer = (m*60) + s;
    updateTimer();
    countDown();
    //window.setTimeout("countDown()", 1000);
    document.removeEventListener("click", setTime);

  }
}





}

function countDown(){

  timer = timer - 1;

  t = setTimeout(function(){ countDown() }, 1000);
  console.log(timer);
  updateTimer();

}

function updateTimer(){
  if (timer == 0) {
    stopTime();
    var divTime = document.createElement("DIV");
    divTime.setAttribute("id", "divCuadroResult");
    var pTime = document.createElement("H2");
    var textTime = document.createTextNode("THE TIME IS OVER");

    pTime.appendChild(textTime);
    divTime.appendChild(pTime);
    document.body.appendChild(divTime);
    document.removeEventListener("click",jugar)


  }

  document.getElementById('countDown').value = timer;
}

function stopTime(){
  clearTimeout(t);
}







function getPosiblesMovimientos(bola) {
    var row = parseInt(bola.id.slice(4, 5));
    var column = parseInt(bola.id.slice(6, 7));




    var gapUp = "pos:" + parseInt(row - 2) + "-" + column;
    var gapDown = "pos:" + parseInt(row + 2) + "-" + column;
    var gapRight = "pos:" + row + "-" + parseInt(column + 2);
    var gapLeft = "pos:" + row + "-" + parseInt(column - 2);


    var bolaUp = "pos:" + parseInt(row - 1) + "-" + column;
    var bolaDown = "pos:" + parseInt(row + 1) + "-" + column;
    var bolaRight = "pos:" + row + "-" + parseInt(column + 1);
    var bolaLeft = "pos:" + row + "-" + parseInt(column - 1);


    for (var i = 0; i < bolaList.length; i++) {
        for (var j = 0; j < huecoList.length; j++) {
            if (gapUp == huecoList[j].id && bolaUp == bolaList[i].id) {
                posiblesMovimientos.push(gapUp);



            } else if (gapDown == huecoList[j].id && bolaDown == bolaList[i].id) {
                posiblesMovimientos.push(gapDown);

            } else if (gapRight == huecoList[j].id && bolaRight == bolaList[i].id) {
                posiblesMovimientos.push(gapRight);

            } else if ((gapLeft == huecoList[j].id) && (bolaLeft == bolaList[i].id)) {
                posiblesMovimientos.push(gapLeft);

            }
        }
    }
}



function eatBall(bola, hueco) {

    var row = parseInt(bola.slice(4, 5));
    var column = parseInt(bola.slice(6, 7));






    var gapUp = "pos:" + parseInt(row - 2) + "-" + column;
    var gapDown = "pos:" + parseInt(row + 2) + "-" + column;
    var gapRight = "pos:" + row + "-" + parseInt(column + 2);
    var gapLeft = "pos:" + row + "-" + parseInt(column - 2);


    var bolaUp = "pos:" + parseInt(row - 1) + "-" + column;
    var bolaDown = "pos:" + parseInt(row + 1) + "-" + column;
    var bolaRight = "pos:" + row + "-" + parseInt(column + 1);
    var bolaLeft = "pos:" + row + "-" + parseInt(column - 1);

    switch (true) {
        case (gapUp == hueco):
            document.getElementById(bolaUp).className = 'gap';
            break;
        case (gapDown == hueco):
            document.getElementById(bolaDown).className = 'gap';
            break;
        case (gapRight == hueco):
            document.getElementById(bolaRight).className = 'gap';
            break;
        case (gapLeft == hueco):
            document.getElementById(bolaLeft).className = 'gap';
            break;


        default:
            break;

    }



}

function getMovimientos(bola) {
    var row = parseInt(bola.id.slice(4, 5));
    var column = parseInt(bola.id.slice(6, 7));




    var gapUp = "pos:" + parseInt(row - 2) + "-" + column;
    var gapDown = "pos:" + parseInt(row + 2) + "-" + column;
    var gapRight = "pos:" + row + "-" + parseInt(column + 2);
    var gapLeft = "pos:" + row + "-" + parseInt(column - 2);


    var bolaUp = "pos:" + parseInt(row - 1) + "-" + column;
    var bolaDown = "pos:" + parseInt(row + 1) + "-" + column;
    var bolaRight = "pos:" + row + "-" + parseInt(column + 1);
    var bolaLeft = "pos:" + row + "-" + parseInt(column - 1);


    for (var i = 0; i < bolaList.length; i++) {
        for (var j = 0; j < huecoList.length; j++) {
            if (gapUp == huecoList[j].id && bolaUp == bolaList[i].id) {
                bolaConMovimiento.push(bola.id);



            } else if (gapDown == huecoList[j].id && bolaDown == bolaList[i].id) {
                bolaConMovimiento.push(bola.id);

            } else if (gapRight == huecoList[j].id && bolaRight == bolaList[i].id) {
                bolaConMovimiento.push(bola.id);

            } else if ((gapLeft == huecoList[j].id) && (bolaLeft == bolaList[i].id)) {
                bolaConMovimiento.push(bola.id);

            }
        }
    }
}

function comprobacionMovimientos() {
    for (var i = 0; i < bolaList.length; i++) {
        getMovimientos(bolaList[i]);

    }

    if (bolaConMovimiento.length < 1) {

        if (bolaList.length == 1) {
            var divWin = document.createElement("DIV");
            divWin.setAttribute("id", "divCuadroResult");
            var pWin = document.createElement("H2");
            var texto = document.createTextNode("CONGRATS! YOU WIN");

            pWin.appendChild(texto);
            divWin.appendChild(pWin);
            document.body.appendChild(divWin);
            stopTime();


        } else {
            var divLoser = document.createElement("DIV");
            divLoser.setAttribute("id", "divCuadroResult");
            var pLoser = document.createElement("H2");
            var textLoser = document.createTextNode("OHHH!! GAME OVER, TRY AGAIN");

            pLoser.appendChild(textLoser);
            divLoser.appendChild(pLoser);
            document.body.appendChild(divLoser);
            for (var i = 0; i < bolaList.length; i++) {

                puntuacion = puntuacion - 50;


            }
            stopTime();
        }

        document.getElementById('etiqueta_puntuacion').value = puntuacion;
        document.removeEventListener("click", jugar);
        if (puntuacion > 0) {

            document.getElementById('etiqueta_puntuacion').style.color = "green";

        } else {
            document.getElementById('etiqueta_puntuacion').style.color = "red";
        }
    }


    bolaConMovimiento = [];



}




function jugar(event) {

  if (event.target.id == 'hueco_random' || event.target.id == 'hueco_central' || event.target.id == 'jugar') {
      createBoard();
  }



    if (event.target.className == 'bola') {
        var selected = event.target;

        if (posiblesMovimientos != undefined && clicked != undefined) {
            for (var i = 0; i < posiblesMovimientos.length; i++) {
                document.getElementById(posiblesMovimientos[i]).style.border = 0;
            }
            var popped = clicked.pop();
            popped.style.border = 0;

        }

        posiblesMovimientos = [];
        clicked = [];
        clicked.push(selected);

        getPosiblesMovimientos(selected);


        for (var i = 0; i < posiblesMovimientos.length; i++) {
            if (document.getElementById(posiblesMovimientos[i]).className == 'gap') {
                document.getElementById(posiblesMovimientos[i]).style.border = '1px solid #64FE2E';

            }
        }

        if (selected.className != 'gap') {
            selected.style.border = ' 1px solid blue';
        }



    } else {





        for (var i = 0; i < posiblesMovimientos.length; i++) {
            if (event.target.id == posiblesMovimientos[i]) {

                var posible = event.target.id;

                document.getElementById(posible).className = 'bola';
                document.getElementById(clicked[0].id).className = 'gap';
                eatBall(clicked[0].id, posible);
                if( document.getElementById('etiqueta_puntuacion').value != "0") {
                    puntuacion = parseInt(document.getElementById('etiqueta_puntuacion').value);
                }
                puntuacion = puntuacion + 15;

                document.getElementById('etiqueta_puntuacion').value = puntuacion;

            }

        }



        if (posiblesMovimientos != undefined && clicked != undefined) {
            for (var i = 0; i < posiblesMovimientos.length; i++) {
                document.getElementById(posiblesMovimientos[i]).style.border = 0;
            }
            var popped = clicked.pop();
            popped.style.border = 0;

        }




        posiblesMovimientos = undefined;
        clicked = undefined;
        comprobacionMovimientos();



    }









}
