class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user != nil
      log_in(@user)
      render "api/users/show"
    else
      render json: ["Invalid username or password"], status: 401
    end
  end

  def destroy
    @user = current_user

    if @user != nil
      log_out
      render json: [""]
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end
