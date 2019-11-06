class CreateCrystalGems < ActiveRecord::Migration[6.0]
  def change
    create_table :crystal_gems do |t|
      t.string :name

      t.timestamps
    end
  end
end
