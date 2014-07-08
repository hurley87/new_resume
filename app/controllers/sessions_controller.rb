class SessionsController < ApplicationController
  def new
  end

  def create
    	 user = User.find_by_email(params[:email])
      if user && user.authenticate(params[:password])
        session[:user_id] = user.id
        redirect_to  edit_user_path(user), :notice => "Logged in!"
      else
        render "new"
      end
  end
end
