class AddExperienceEndDateToUserProfiles < ActiveRecord::Migration[7.0]
  def change
    add_column :user_profiles, :experience_end_date, :string
  end
end
