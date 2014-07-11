class UsersController < ApplicationController

  def index
    @users = User.order(time: :asc)
  end

  def new
    @user = User.new
    @users = User.order(time: :asc)
  end

  def create
    @user = User.new(user_params)

    if @user.save 
      session[:user_id] = @user.id
      redirect_to users_path
    else
      render 'new'
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
  end

  private 

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :time)
  end
end
