require 'net/http'
require 'json'
require 'uri'

def ApiV2ChannelsFollowPOST(channelName, bearerToken)
  uri = URI.parse("https://kick.com/api/v2/channels/#{channelName}/follow")
  
  # Create the Post request
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true # Enable SSL/TLS for HTTPS

  request = Net::HTTP::Post.new(uri)
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

def ApiV2ChannelsFollowDELETE(channelName, bearerToken)
  uri = URI.parse("https://kick.com/api/v2/channels/#{channelName}/follow")
  
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