class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :description
      t.integer :list_id

      #wire schema / db
      #wire model

      t.timestamps
    end
  end
end
