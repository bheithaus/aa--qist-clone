class QistFilesController < ApplicationController
  respond_to :json

  def index
    @qists = QistFile.where("qist_id = ?", params[:qist_id])

    render json: @qists
  end
end
