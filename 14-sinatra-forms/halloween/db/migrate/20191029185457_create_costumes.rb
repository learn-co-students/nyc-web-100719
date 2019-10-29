class CreateCostumes < ActiveRecord::Migration
  def change
    create_table :costumes do |t|
      t.string :name
      t.string :size
      t.float :price

      t.timestamps
    end
  end
end
