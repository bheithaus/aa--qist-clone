class FavoritesController < ApplicationController
  respond_to :json

  def show
    @favorite = Favorite.where("qist_id = ? AND user_id = ?",
                              params[:qist_id], current_user.id)
    render json: @favorite
  end

  def index
    render json: current_user.favorites
  end

  def create
    @favorite = Favorite.new(user_id: current_user.id, qist_id: params[:qist_id])
    if @favorite.save
      render json: @favorite
    else
      render json: @favorite.errors.full_messages, status: 422
    end
  end

  def destroy
    @favorite = Favorite.find(params[:id]).destroy

    render json: @favorite
  end
end
