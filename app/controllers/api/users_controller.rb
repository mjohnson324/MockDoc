class Api::UsersController < ApplicationController
  before_action :require_logged_in, only: :create

  def create
    @user = User.new(user_params)

    if @user.save
      log_in(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = current_user
  end

  def update
    @user = current_user

    if current_user && @user.update(user_params)
      render "api/users/show"
    elsif current_user
      render json: @user.errors.full_messages
    else
      render json: ["Invalid credentials"]
    end
  end

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end
end
