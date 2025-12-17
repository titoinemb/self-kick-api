require 'net/http'
require 'json'
require 'uri'

def ApiV2ChannelsPinedMessagePOST(name, bearerToken, bodyJSON)
  uri = URI.parse("https://kick.com/api/v2/channels/#{name}/pinned-message")

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

def ApiV2ChannelsPinedMessageDELETE(name, bearerToken)
  uri = URI.parse("https://kick.com/api/v2/channels/#{name}/pinned-message")
  
  # Create the DELETE request
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true # Enable SSL/TLS for HTTPS

  request = Net::HTTP::Delete.new(uri)
  request['Authorization'] = "Bearer #{bearerToken}" # Add the Bearer token to the header

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