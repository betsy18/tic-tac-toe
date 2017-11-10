// se ejecuta cuando el obj, este totalmente cargado la pag. web
window.onload = function() {
    var board = document.querySelector('.board-js');
    //var reset = document.querySelector('.reset-js');

    board.addEventListener('click', addX);
    //reset.removeEventListener('onclick', "td");

};
    var centinel = true;

    function addX(event){
        if(event.target.matches('td') && event.target.textContent === '') {
            if(centinel)
                event.target.textContent = 'X';
            else
                event.target.textContent = 'O';
            centinel = !centinel;
        }
    }

    //var contenedor = document.getElementById('contenedor');
    //var parrafo = document.getElementById('parrafo');
    //contenedor.removeChild(parrafo);
    
    /*
    Con el nodo seleccionado utilizamos parentNode
    para seleccionar el padre. Desde el padre utilizamos
    removeChild para eliminar el nodo seleccionado.
    */
    
    //var reset = document.querySelector('.reset-js');
    //parrafo.parentNode.removeChild(parrafo);

   /* function take(event){
        if(event.target.textContent === 'X' || event.target.textContent === 'O'){
            var cells = event.target.getElementsByTagName('td');
            for( var i=0; i<td.length; i++){
                event.target = removeEventListener(cells[i]);
            }
        }
    }*/



    /* Creando el boton de reset*/

    //reset.removeEventListener('click' , addX); 

    /*function reset(event){
        event.target.clear();
    }*/

    /*function clear(){
        event.target.matches('td');
      }*/

      // utilizar el remove

   /* var reset = document.querySelector('.reset-js');
    reset.addEventListener('click', function(event){
        event.target.style.backgroundColor = 'white';
    });*/


    /*function reset(event){
        var reset = document.getElementsByClassName('.reset-js');

        reset.addEventListener('click');
        
    }*/
