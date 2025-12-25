require 'net/http'
require 'json'
require 'uri'

def ApiInternalV1ClipsPOST (streamId, bearerToken)
  uri = URI.parse("https://kick.com/api/internal/v1/livestreams/#{streamId}/clips")

  # Create the HTTP connection
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true # Enable SSL/TLS for HTTPS

  # Create the POST request
  request = Net::HTTP::Post.new(uri)
  request['Authorization'] = "Bearer #{bearerToken}" # Add the Bearer token
  request['Content-Type'] = 'application/json' # Set the content type to JSON

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