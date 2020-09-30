const express = require('express');
const app = express();
const port = 3000;

let server = app.listen(8888);
let io = require('socket.io').listen(server);

io.on('connection', (socket) => {
    console.log('a user connected 连接成功');
    // 接受信息
    socket.on('msg', data => {
        console.log(data);
        // 广播给其他用户
        
        socket.broadcast.emit('gbmsg', data);
    })
});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
