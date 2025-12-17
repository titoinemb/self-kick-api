require 'net/http'
require 'json'
require 'uri'

def kicks(id, category)
  uri = URI.parse("https://web.kick.com/api/v1/kicks/#{id}/#{category}")
  response = Net::HTTP.get_response(uri)

  if response.is_a?(Net::HTTPSuccess)
    data = JSON.parse(response.body)
    puts data
  else
    puts "Erreur : #{response.message}"
  end
end