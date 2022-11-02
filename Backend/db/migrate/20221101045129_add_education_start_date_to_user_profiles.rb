class AddEducationStartDateToUserProfiles < ActiveRecord::Migration[7.0]
  def change
    add_column :user_profiles, :education_start_date, :string
  end
end
