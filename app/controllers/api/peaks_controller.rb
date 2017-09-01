class Api::PeaksController < ApplicationController
  def create
    Peak.create(peak: params[:peak], track_id: params[:track_id])
  end

  private

  def peak_params
    params.require(:peak).permit(:track_id, :peak)
  end
end
