class AddTimeToUser < ActiveRecord::Migration
  def change
  	add_column :users, :time, :float
  end
end
