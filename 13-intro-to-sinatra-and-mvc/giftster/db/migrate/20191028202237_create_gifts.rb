class CreateGifts < ActiveRecord::Migration
  def change
    create_table :gifts do |t|
      t.string :name
      t.float :price
      t.string :gifter

      t.timestamps
    end
  end
end
