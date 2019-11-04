class CreateRoles < ActiveRecord::Migration[6.0]
  def change
    create_table :roles do |t|
      t.string :name
      t.references :movie, null: false, foreign_key: true
      t.integer :actor_id

      t.timestamps
    end
  end
end
