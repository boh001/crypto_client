import io from 'socket.io-client'

const socket = io('http://localhost:3001', { transports : ['websocket'] })

socket.on('data', (test: string) => {
  console.log(test)
})
export default socket