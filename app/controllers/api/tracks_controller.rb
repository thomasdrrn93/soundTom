class Api::TracksController < ApplicationController
  def index
    @tracks = Track.where(uploader_id: params[:user_id])
    render 'api/tracks/index'
  end

  def create
    @track = Track.new(track_params)
    @track.uploader_id = params[:user_id]
    if @track.save
      render 'api/tracks/show'
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def show
    @track = Track.find(params[:id])
  end

  def update
    @track = Track.find(params[:id])
    if @track.update(track_params)
      render 'api/tracks/show'
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def update

  end

  private

    def track_params
      params.require(:track).permit(:name, :genre, :uploader_id)
    end
end
