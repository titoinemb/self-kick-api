require 'net/http'
require 'json'
require 'uri'

def viewers(id)
  uri = URI.parse("https://kick.com/current-viewers?ids[]=#{id}")
  response = Net::HTTP.get_response(uri)

  if response.is_a?(Net::HTTPSuccess)
    data = JSON.parse(response.body)
    puts data
  else
    puts "Erreur : #{response.message}"
  end
end