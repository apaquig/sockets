var socket = io();
//on es para escuchar sucesos
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});
//Emit son para envia informacion
socket.emit('enviarMensaje', {
    usuario: 'Angel',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server ', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});