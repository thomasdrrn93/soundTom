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
    @users = User.where('lower(username) LIKE ?',
      "%#{params[:query].downcase}%").limit(2)
    slots = 5 - @users.length
    @tracks = Track.where('lower(name) LIKE ?',
      "%#{params[:query].downcase}%").limit(slots)
    render 'api/tracks/search'
  end

  private

  def track_params
    params.require(:track)
      .permit(:name, :genre, :audio, :uploader_id, :image, :uploader_id, :waves)
  end
end
