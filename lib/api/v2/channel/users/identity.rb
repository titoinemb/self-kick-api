require 'net/http'
require 'json'
require 'uri'

def ApiV2ChannelUsersIdentityGET(channelId, myid, bearerToken)
  uri = URI.parse("https://kick.com/api/v2/channels/#{channelId}/users/#{myid}/identity")
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true # Enable SSL/TLS for HTTPS

  # Create a new GET request
  request = Net::HTTP::Get.new(uri)
  request['Authorization'] = "Bearer #{bearerToken}" # Add the Bearer token

  # Send the request
  response = http.request(request)

  if response.is_a?(Net::HTTPSuccess)
    data = JSON.parse(response.body)
    puts data
  else
    puts "Erreur : #{response.message} (Code: #{response.code})"
  end
end

def ApiV2ChannelUsersIdentityPUT(channelId, myid, bearerToken, bodyJSON)
  uri = URI.parse("https://kick.com/api/v2/channels/#{channelId}/users/#{myid}/identity")
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true # Enable SSL/TLS for HTTPS

  # Create a new PUT request
  request = Net::HTTP::Put.new(uri)
  request['Authorization'] = "Bearer #{bearerToken}" # Add the Bearer token
  request.content_type = 'application/json' # Set the content type to JSON
  request.body = bodyJSON.to_json # Convert the body to JSON format

  # Send the request
  response = http.request(request)

  if response.is_a?(Net::HTTPSuccess)
    data = JSON.parse(response.body)
    puts data
  else
    puts "Erreur : #{response.message} (Code: #{response.code})"
  end
end