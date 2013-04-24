class SessionsController < ApplicationController
  respond_to :json

  def create
    @user = User.find_by_user_name(params[:user_name])
    sign_in @user

    render json: status: 200
  end

  def destroy
    sign_out(current_user)

    render json: status: 200
  end
end
