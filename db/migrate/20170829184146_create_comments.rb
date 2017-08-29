class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.integer :track_id, null: false
      t.integer :commenter_id, null: false
      t.text :body, null: false

      t.timestamps
    end
    add_index :comments, :track_id
    add_index :comments, :commenter_id
  end
end
