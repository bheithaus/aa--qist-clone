class QistsController < ApplicationController
  before_filter :signed_in?

  respond_to :json
  # before filter
  def index
    @qists = Qist.where("user_id = ?", params[:user_id])

    render json: @qists
  end

  def create
    @qist = Qist.new(params[:qist])
    @qist.user_id = current_user.id

    if @qist.save
      render json: @qist
    else
      render json: @qist.errors.full_messages
    end
  end
end
