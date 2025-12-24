require 'net/http'
require 'json'
require 'uri'

def rules(name)
  uri = URI.parse("https://kick.com/api/v2/channels/#{name}/chatroom/rules")
  response = Net::HTTP.get_response(uri)

  if response.is_a?(Net::HTTPSuccess)
    data = JSON.parse(response.body)
    puts data
  else
    puts "Erreur : #{response.message}"
  end
end