class QistsController < ApplicationController
  before_filter :signed_in?

  respond_to :json
  # before filter
  def index
    @qists = Qist.where("user_id = ?", params[:user_id])

    render json: @qists
  end
end
