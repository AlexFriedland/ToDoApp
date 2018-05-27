class CreateTdItems < ActiveRecord::Migration[5.2]
  def change
    create_table :td_items do |t|
      t.string :name
      t.belongs_to :list, foreign_key: true

      t.timestamps
    end
  end
end
