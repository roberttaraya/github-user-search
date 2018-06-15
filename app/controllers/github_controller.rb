class GithubController < ApplicationController
  require "rest-client"

  API_BASE_URL = "https://api.github.com"
  GITHUB_BASE_URL = "https://github.com"
  SEARCH_USER_PATH = "/search/users"
  GITHUB_AUTH_PATH = "/login/oauth/authorize"
  GITHUB_CALLBACK_PATH = "/login/oauth/access_token"

  def search
    search_query = "?q=#{params[:username]}"
    github_response = RestClient.get("#{API_BASE_URL}#{SEARCH_USER_PATH}#{search_query}", :accept => :json)

    render json: JSON.parse(github_response.body)["items"]
  end

  def user
    user_path = "/users/#{params[:username]}"
    auth_query = "?access_token=#{session[:access_token]}"
    path = "#{API_BASE_URL}#{user_path}#{auth_query}"

    github_response = RestClient.get(path, :accept => :json)

    render json: JSON.parse(github_response.body)
  end

  def repos
    user_path = "/users/#{params[:username]}"
    auth_query = "?access_token=#{session[:access_token]}"
    path = "#{API_BASE_URL}#{user_path}/repos#{auth_query}"

    github_response = RestClient.get(path, :accept => :json)

    render json: JSON.parse(github_response.body)
  end

  def followers
    user_path = "/users/#{params[:username]}"
    auth_query = "?access_token=#{session[:access_token]}"
    path = "#{API_BASE_URL}#{user_path}/followers#{auth_query}"

    github_response = RestClient.get(path, :accept => :json)

    render json: JSON.parse(github_response.body)
  end

  def authorize
    redirect_to github_auth_callback
  end

  def callback
    github_code = params[:code]

    options = {}
    options[:client_id] = ENV['GITHUB_CLIENT_ID']
    options[:client_secret] = ENV['GITHUB_CLIENT_SECRET']
    options[:code] = github_code

    path = "#{GITHUB_BASE_URL}#{GITHUB_CALLBACK_PATH}"

    github_response = RestClient.post(path, options, :accept => :json)

    redirect_to controller: "sessions", action: "create", access_token: JSON.parse(github_response)['access_token']
  end


    def github_auth_callback
      github_auth_code_query = "?client_id=#{ENV['GITHUB_CLIENT_ID']}"

      "#{GITHUB_BASE_URL}#{GITHUB_AUTH_PATH}#{github_auth_code_query}"
    end

end
