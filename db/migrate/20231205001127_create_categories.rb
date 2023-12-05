class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories do |t|
      t.string :title
      t.text :description
      t.integer :posts_count
      t.integer :position

      t.timestamps
    end
  end
end
