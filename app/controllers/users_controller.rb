class UsersController < ApplicationController
  # add some before_filters

  respond_to :json

  def index
    @users = User.all

    render json: @users
  end
  def create
    @user = User.new(params[:user])

    if @user.save
      render json: @user
    else
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end

  def show
    @user = User.find(params[:id])

    render json: @user
  end

  def destroy
    user = User.find(params[:id]).destroy

    render json: {status: 200}
  end
end
