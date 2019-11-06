class AddCrystalGemIdToFeelings < ActiveRecord::Migration[6.0]
  def change
    add_column :feelings, :crystal_gem_id, :integer
  end
end
