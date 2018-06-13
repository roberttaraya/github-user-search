class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def require_authenticated_user
    authenticate! if !authenticated?
  end

  def authenticate!
    redirect_to github_authorize_path
  end

  def authenticated?
    session[:access_token]
  end
end
