class CreateAliens < ActiveRecord::Migration[5.2]
  def change
    create_table :aliens do |t|
      t.string :planet
      t.string :name
      t.integer :teeth
      t.string :temperment

      t.timestamps
    end
  end
end
