class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)

    if @like.save
      render 'api/likes/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find_by(track_id: like_params[:track_id], user_id: like_params[:user_id])
    if @like.destroy
      render 'api/likes/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  private

  def like_params
    params.require(:like).permit(:track_id, :user_id)
  end
end
