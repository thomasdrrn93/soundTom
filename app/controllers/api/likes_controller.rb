class LikesController < ApplicationController
  def create
    like = Like.new(like_params)

    if like.save
      render json: {
        user_id: like_params[:user_id],
        track_id: like_params[:track_id]
      }, status: 200
    else
      render json: like.errors.full_messages, status: 422
    end
  end

  def destroy
    like = Like.find(parans[:id])
    if like.destroy
      render json: {
        user_id: like_params[:user_id],
        track_id: like_params[:track_id]
      }, status: 200
    else
      render json: like.errors.full_messages, status: 422
    end
  end

  private

  def like_params
    params.require(:like).permit(:track_id, :user_id)
  end
end
