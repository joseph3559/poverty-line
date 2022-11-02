class RemoveExperienceDateFromUserProfiles < ActiveRecord::Migration[7.0]
  def change
    remove_column :user_profiles, :experience_date, :text
  end
end
