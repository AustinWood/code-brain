class Api::NotesController < ApplicationController
  def index

  end

  def show
    @note = Note.find(params[:id])
  end

  def create
    @note = Note.create!(note_params)
    render :show
  end

  def update

  end

  def destroy

  end

  private
  def note_params
    params.require(:note).permit(
    :question,
    :skeleton,
    :answer,
    :author_id
    )
  end
end
