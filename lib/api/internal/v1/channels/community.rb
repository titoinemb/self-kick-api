require 'net/http'
require 'json'
require 'uri'

def ApiV2InternalV1ChannelsCommunityDELETE(channelName, username, role, bearerToken)
  uri = URI.parse("https://kick.com/api/internal/v1/channels/#{channelName}/community/#{role}/#{username}")
  
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

def ApiV2InternalV1ChannelsCommunityPOST(channelName, username, role, bearerToken)
  uri = URI.parse("https://kick.com/api/internal/v1/channels/#{channelName}/community/#{role}")
  
  # Create the POST request
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true # Enable SSL/TLS for HTTPS

  request = Net::HTTP::Post.new(uri)
  request['Authorization'] = "Bearer #{bearerToken}" # Add the Bearer token to the header
  request.body = {
    username: username
  }.to_json # Convert the body to JSON format

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