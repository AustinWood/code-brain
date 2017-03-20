class Api::NotesController < ApplicationController
  def index
    @notes = Note.all
    render :index
    # render json: Note.all.where(author_id: current_user.id), include: :tags
  end

  def show
    @note = Note.find(params[:id])
  end

  def create
    @note = Note.create!(note_params)
    render json: @note
  end

  def update
    # debugger
    @note = Note.find(params[:id])
    if is_author? && @note.update_attributes(note_params)
      render json: @note
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy
    @note = Note.find(params[:id])
    if is_author?
      @note.destroy
      render json: {}
    else
      render json: ["Error deleting note."], status: 404
    end
  end

  private
  def note_params
    params.require(:note).permit(
      :id,
      :question,
      :skeleton,
      :answer,
      :author_id
    )
  end

  def is_author?
    @note.author_id == current_user.id
  end
end
