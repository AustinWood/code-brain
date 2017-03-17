class Api::NotesController < ApplicationController
  def index
    @notes = Note.all
  end

  def show
    @note = Note.find(params[:id])
  end

  def create
    @note = Note.create!(note_params)
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
