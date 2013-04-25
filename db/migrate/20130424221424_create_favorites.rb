class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.integer :qist_id
      t.integer :user_id

      t.timestamps
    end
    add_index :favorites, [:qist_id, :user_id], unique: true
  end
end
