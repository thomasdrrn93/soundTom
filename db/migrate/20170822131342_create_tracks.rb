class CreateTracks < ActiveRecord::Migration[5.0]
  def change
    create_table :tracks do |t|
      t.string :name, null: false
      t.string :genre
      t.integer :uploader_id, null: false

      t.timestamps
    end
    add_index :tracks, :uploader_id
  end
end
