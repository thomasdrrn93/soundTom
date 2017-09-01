class UpdateTracks1 < ActiveRecord::Migration[5.0]
    def change
      add_column :tracks, :waves, :string
    end
end
