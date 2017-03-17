class CreateNotes < ActiveRecord::Migration[5.0]
  def change
    create_table :notes do |t|
      t.text :question, null: false, default: ""
      t.text :skeleton, null: false, default: ""
      t.text :answer, null: false, default: ""
      t.integer :author_id, null: false

      t.timestamps
    end

    add_index :notes, :author_id
  end
end
