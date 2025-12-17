require 'net/http'
require 'json'
require 'uri'

def ApiV1Livestreams(categorie, lang)
  uri = URI.parse("https://web.kick.com/api/v1/livestreams/#{categorie}?language=#{lang}")
  response = Net::HTTP.get_response(uri)

  if response.is_a?(Net::HTTPSuccess)
    data = JSON.parse(response.body)
    puts data
  else
    puts "Erreur : #{response.message}"
  end
end