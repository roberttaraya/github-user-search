class SessionsController < ApplicationController
  def create
    session[:access_token] ||= params[:access_token]
    redirect_to root_path
  end

  def destroy
    session[:access_token] = nil
    redirect_to root_path
  end
end
