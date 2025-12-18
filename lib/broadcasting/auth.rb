require 'net/http'
require 'json'
require 'uri'

def broadcastingAuth(bearerToken, tokenType, socketId)
  bodyJSON = {
    channel_name: tokenType,
    socket_id: socketId
  }
  uri = URI.parse("https://kick.com/broadcasting/auth")

  # Create the HTTP connection
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true # Enable SSL/TLS for HTTPS

  # Create the POST request
  request = Net::HTTP::Post.new(uri)
  request['Authorization'] = "Bearer #{bearerToken}" # Add the Bearer token
  request['Content-Type'] = 'application/json' # Set the content type to JSON
  request.body = bodyJSON.to_json # Convert the body to JSON format

  # Execute the request
  response = http.request(request)

  # Handle the response
  if response.is_a?(Net::HTTPSuccess)
    data = JSON.parse(response.body)
    puts data
  else
    puts "Erreur : #{response.message} (code: #{response.code})"
  end
end