class GithubController < ApplicationController
  require "rest-client"

  def authorize
    redirect_to "https://github.com/login/oauth/authorize?client_id=#{ENV['GITHUB_CLIENT_ID']}"
  end

  def callback
    github_code = params[:code]

    options = {}
    options[:client_id] = ENV['GITHUB_CLIENT_ID']
    options[:client_secret] = ENV['GITHUB_CLIENT_SECRET']
    options[:code] = github_code

    github_response = RestClient.post("https://github.com/login/oauth/access_token", options, :accept => :json)

    session[:access_token] = JSON.parse(github_response)['access_token']
    redirect_to root_path
  end
end
