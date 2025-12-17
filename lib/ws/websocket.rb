require 'websocket-client-simple'
require 'json'
require 'uri'

def create_websocket(chatroom_id)
  url_params = URI::HTTP.build(
    host: 'ws-us2.pusher.com',
    path: '/app/32cbd69e4b950bf97679',
    query: URI.encode_www_form({
      protocol: '7',
      client: 'js',
      version: '8.4.0',
      flash: 'false'
    })
  )

  socket = WebSocket::Client::Simple.connect(url_params.to_s)

  socket.on :open do
    connect_message = {
      event: "pusher:subscribe",
      data: { auth: "", channel: "chatrooms.#{chatroom_id}.v2" }
    }
    
    socket.send(connect_message.to_json)
    puts "Connected to chatroom #{chatroom_id}"
  end

  socket.on :message do |event|
    puts "Message received: #{event.data}"
  end

  socket.on :error do |event|
    puts "Error: #{event.message}"
  end

  socket.on :close do |event|
    puts "Connection closed: #{event.code} #{event.reason}"
    Thread.exit
  end

  socket
end