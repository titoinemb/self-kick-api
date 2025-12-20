require 'net/http'
require 'json'
require 'uri'

def ApiV1KicksBalance(bearerToken)
  uri = URI.parse("https://web.kick.com/api/v1/kicks/balance")
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