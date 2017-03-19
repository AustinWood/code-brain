class Api::NotesController < ApplicationController
  def index
    render json: Note.all
    # render json: Note.all.where(author_id: current_user.id), include: :tags
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
    @note = Note.find(params[:id])
    if @note.author_id == current_user.id
      @note.destroy
      render json: {}
    else
      render json: ["Error deleting note."], status: 404
    end
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
