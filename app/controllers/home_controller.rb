class HomeController < ApplicationController
  before_action :require_authenticated_user

  def index
    # session[:access_token] = nil
    puts "*****HomeController:index"
    puts "*****session[:access_token] = #{session[:access_token]}"
    if authenticated?
      puts "*****HomeController: i'm authenticated now"
      puts "*****session[:access_token] = #{session[:access_token]}"
      @message = "*****HomeController: i'm authenticated now"
    else
      puts "*****HomeController: i'm not authenticated now"
      puts "*****session[:access_token] = #{session[:access_token]}"
      @message = "*****HomeController: i'm NOT authenticated now"
    end
  end
end
