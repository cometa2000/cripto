function ejecutar(){
    let bitcoin = 500000;
    let etherium = 20000;
    let dogecoin = 0.60;
    let xrp = 6;
    let opciones = $('#opciones').val();        //cacha el valor del id opciones
    let valor1 = Number($('#valor1').val()); 
    let mensaje = '';
    let resultado = 0;

    switch(opciones){
        case 'b':
            mensaje = 'La cantidad en Bitcoin es  ';
            resultado = valor1 / bitcoin;
            break;
        case 'e':
            mensaje = 'La cantidad en Etherium es  ';
            resultado = valor1 / etherium;
            break;
        case 'd':
            mensaje = 'La cantidad en   Dogecoin es  ';
            resultado = valor1 / dogecoin;
            break;
        case 'x':
            mensaje = 'La cantidad en XRP es  ';
            resultado = valor1 / xrp;
            break;
        default:
            alert('No existe esta opcion....!!!!');
            break;
    }
    //alert(mensaje + resultado);
    swal(mensaje, resultado.toString(), 'success');
}
$(document).ready(function(){
    $('#btnEjecutar').click(function(){
        ejecutar();
    });
});