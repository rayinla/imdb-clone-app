class CreateMovies < ActiveRecord::Migration[5.0]
  def change
    create_table :movies do |t|
      t.string :title, :type, :release, :plot
      t.boolean :rating


      t.timestamps
    end
  end
end
