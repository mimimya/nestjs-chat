const WebSocket = require("ws")

const server = new WebSocket.Server({ port: 3030 });

/*
WebSocket.Server().on()
이벤트를 받는 함수
on('이벤트 유형', (WebSocket클래스 인스턴스)=>{이벤트 발생 시 실행할 콜백함수)}

-- WebSocketServer 이벤트 유형
close : 서버가 닫힐 때 발생
connection : 핸드세이크가 완료되면 발생
error :  서버에서 에러가 나타날 때 발생
headers : 응답의 헤더가 핸드쉐이크 소켓에 기록되기 전에 발생하는 이벤트, 헤더를 보내기 전에 검사, 수정 가능
listening : 서버가 바인딩되었을 때 발생
wsClientError : WebSocket 연결이 되기 전에 에러가 나면 발생
*/
server.on('connection', ws => {
    ws.send('[서버 접속 완료!]');


    /*
    ws.on('EventType', ()=>{})
    클라이언트에서 이벤트가 발생할 때 실행하는 함수

    -- WebSocket 이벤트 유형
    close : 연결을 닫을 때
    error : 에러가 났을 때
    message : 클라이언트 -> 서버 메시지를 수신할 때
    open : 서버와 연길이 되면
    ping : 서버에서 ping 수신
    pong : 서버에서 pong 수신
    redirect : 리다이렉션 전에
    unexpected-response : 서버 응답이 예상한 응답이 아닐 때
    upgrade : 핸드셰이크 서버에서 응답헤더룰 수신 할 때
     */
    ws.on('message', message => {
        ws.send(`서버로부터 응답: ${message}`);
    });

    ws.on('close', ()=> {
        console.log('클라이언트 접속 해제');
    });
});