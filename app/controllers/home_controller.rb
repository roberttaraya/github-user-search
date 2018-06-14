class HomeController < ApplicationController
  before_action :require_authenticated_user

  def index
  end
end
