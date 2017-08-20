class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user.save
      login(@user)
      render json: 'api/users/show'
    else
      render json: ['Invalid Login Credentials'], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["Nobody logged in"], status: 404
    end
  end

end
