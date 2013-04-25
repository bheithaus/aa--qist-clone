class CreateQistFiles < ActiveRecord::Migration
  def change
    create_table :qist_files do |t|
      t.integer :qist_id
      t.string :body

      t.timestamps
    end
  end
end
