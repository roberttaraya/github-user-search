class GithubController < ApplicationController
  require "rest-client"

  def search
    github_response = RestClient.get("https://api.github.com/search/users?q=#{params[:username]}", :accept => :json)

    render json: JSON.parse(github_response.body)["items"]
  end

  def show
    github_response = RestClient.get("https://api.github.com/users/#{params[:username]}?access_token=#{session[:access_token]}", :accept => :json)

    render json: JSON.parse(github_response.body)
  end

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

    redirect_to controller: "sessions", action: "create", access_token: JSON.parse(github_response)['access_token']
  end

end
