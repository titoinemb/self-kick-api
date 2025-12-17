require 'net/http'
require 'json'
require 'uri'

def emotes(id)
  uri = URI.parse("https://web.kick.com/api/v1/chat/#{id}/history")
  response = Net::HTTP.get_response(uri)

  if response.is_a?(Net::HTTPSuccess)
    data = JSON.parse(response.body)
    puts data
  else
    puts "Erreur : #{response.message}"
  end
end