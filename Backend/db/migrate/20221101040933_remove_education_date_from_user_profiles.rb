class RemoveEducationDateFromUserProfiles < ActiveRecord::Migration[7.0]
  def change
    remove_column :user_profiles, :education_date, :text
  end
end
