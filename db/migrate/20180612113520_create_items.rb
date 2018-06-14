class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :description
      t.integer :list_id
      t.integer :status, default: 0

      #wire schema / db
      #wire model

      t.timestamps null: false
    end
  end
end
