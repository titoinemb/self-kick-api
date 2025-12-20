require 'net/http'
require 'uri'
require 'json'

def login(emailOrName, password, twoFAcode)
  uri = URI.parse("https://kick.com/mobile/login")
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true # Use SSL for HTTPS

  request = Net::HTTP::Post.new(uri.path, {
    'Content-Type' => 'application/json',
  })
  
  request.body = {
    code: twoFAcode,
    email: emailOrName,
    isMobileRequest: true,
    on_time_password: twoFAcode,
    password: password
  }.to_json

  response = http.request(request)

  if response.is_a?(Net::HTTPSuccess)
    data = JSON.parse(response.body)
    puts data
  else
    puts "Erreur : #{response.message}"
  end
end