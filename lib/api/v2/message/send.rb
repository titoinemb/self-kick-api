require 'net/http'
require 'uri'
require 'json'

def ApiV2SendMessage(id, bearerToken, content, type)
  uri = URI.parse("https://kick.com/api/v2/messages/send/#{id}")
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true # Use SSL for HTTPS

  request = Net::HTTP::Post.new(uri.path, {
    'Content-Type' => 'application/json',
    'Authorization' => "Bearer #{bearerToken}"
  })
  
  request.body = {
    content: content,
    type: type
  }.to_json

  response = http.request(request)

  if response.is_a?(Net::HTTPSuccess)
    data = JSON.parse(response.body)
    puts data
  else
    puts "Erreur : #{response.message}"
  end
end