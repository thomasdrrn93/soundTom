class RemoveprofilePicUrlfromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :profile_pic_url
    remove_column :users, :cover_pic_url
  end
end
