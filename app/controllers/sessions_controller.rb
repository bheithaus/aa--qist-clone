class SessionsController < ApplicationController
  before_filter :signed_in?, only: :show
  respond_to :json

  def show
    render json: current_user
  end

  def create
    @user = User.find_by_user_name(params[:user_name])
    sign_in @user

    render json: @user, status: 200
  end

  def destroy
    sign_out

    render json: {}, status: 200
  end
end
