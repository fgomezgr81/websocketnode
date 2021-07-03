const expres=require('express');
const app=expres();

const http=require('http');

const server=http.createServer(app);

server.listen(3000);

app.use(expres.static('public'));

const io=require('socket.io')(server);

io.on('connect',function(socket){
   // console.log('nueva conexion id:' +socket.id);
   
    socket.on('datos_usuario',function(datos){
        io.emit('send',{nombre:datos.name});
   });
});