class CreateDogs < ActiveRecord::Migration[6.0]
  def change
    create_table :dogs do |t|
      t.string :name
      t.boolean :gender
      t.string :race
      t.float :weight
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
