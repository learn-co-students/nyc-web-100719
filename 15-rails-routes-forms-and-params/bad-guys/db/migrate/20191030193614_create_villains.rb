class CreateVillains < ActiveRecord::Migration[6.0]
  def change
    create_table :villains do |t|
      t.string :name
      t.string :catch_phrase
      t.string :power

      t.timestamps
    end
  end
end
