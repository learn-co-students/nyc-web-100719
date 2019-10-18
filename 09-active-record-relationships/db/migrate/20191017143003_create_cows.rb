class CreateCows < ActiveRecord::Migration[5.2]
  def up
    create_table :cows do |t|
      t.integer :spots
      t.string :name
      t.integer :alien_id

      t.timestamps
    end
  end

  def down
    puts 'DUH!'
    drop_table :cows
  end
end


