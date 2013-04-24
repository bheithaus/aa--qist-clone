class CreateQists < ActiveRecord::Migration
  def change
    create_table :qists do |t|
      t.string :title
      t.integer :user_id

      t.timestamps
    end

    add_index :qists, :user_id
  end
end
