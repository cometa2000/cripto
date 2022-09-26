function ejecutar(){
    let bitcoinMx = 0.0000026;
    let etheriumMx = 0.000037;
    let dogecoinMX = 0.80;
    let xrpMx = 0.1027;
    let opciones = $('#opciones').val();        //cacha el valor del id opciones
    let valor1 = Number($('#valor1').val()); 
    let mensaje = '';
    let resultado = 0;

    switch(opciones){
        case 'b':
            mensaje = 'La cantidad en Bitcoin es  ';
            resultado = valor1 * bitcoinMx;
            break;
        case 'e':
            mensaje = 'La cantidad en Etherium es  ';
            resultado = valor1 * etheriumMx;
            break;
        case 'd':
            mensaje = 'La cantidad en   Dogecoin es  ';
            resultado = valor1 * dogecoinMX;
            break;
        case 'x':
            mensaje = 'La cantidad en XRP es  ';
            resultado = valor1 * xrpMx;
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