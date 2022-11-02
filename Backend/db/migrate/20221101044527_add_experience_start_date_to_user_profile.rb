class AddExperienceStartDateToUserProfile < ActiveRecord::Migration[7.0]
  def change
    add_column :user_profiles, :experience_start_date, :string
  end
end
