class AddTreaterIdToCandies < ActiveRecord::Migration[5.2]
  def change
    add_column :candies, :treater_id, :integer
  end
end
