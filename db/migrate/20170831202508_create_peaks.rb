class CreatePeaks < ActiveRecord::Migration[5.0]
  def change
    create_table :peaks do |t|
      t.integer :track_id, null: false
      t.float :peak, null: false
    end
    add_index :peaks, :track_id 
  end
end
