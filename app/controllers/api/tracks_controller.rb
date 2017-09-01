class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
    render 'api/tracks/index'
  end

  def create
    @track = Track.new(track_params)
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
    debugger
    @track = Track.find(params[:id])
    if @track.update(track_params)
      render 'api/tracks/show'
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy
    render json: @track
  end

  def search
    @tracks = Track.where(
    'lower(name) LIKE ? OR lower(user) LIKE ?',
      "%#{params[:query].downcase}%",
        "%#{params[:query].downcase}%")
    render 'api/tracks/index'
  end

  private

  def track_params
    params.require(:track)
      .permit(:name, :genre, :audio, :uploader_id, :image, :uploader_id, :waves)
  end
end
