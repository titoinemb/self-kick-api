require 'net/http'
require 'json'
require 'uri'

# example script for get session, time, segment
# https://github.com/titoinemb/kick-dlp/blob/main/src/functions/services/GetM3u8File.ts

def emotes(session, time, segment)
  uri = URI.parse("https://stream.kick.com/3c81249a5ce0/ivs/v1/196233775518/#{session}/#{time}/#{segment}/media/hls/master.m3u8")
  response = Net::HTTP.get_response(uri)

  if response.is_a?(Net::HTTPSuccess)
    data = JSON.parse(response.body)
    puts data
  else
    puts "Erreur : #{response.message}"
  end
end