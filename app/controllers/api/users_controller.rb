class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render json: 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end    
  end

  private

    def user_params
      params.require(:user)
        .permit(:username, :password, :description, :profile_pic_url, :cover_pic_url)
    end
end
