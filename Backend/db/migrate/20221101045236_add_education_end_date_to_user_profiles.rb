class AddEducationEndDateToUserProfiles < ActiveRecord::Migration[7.0]
  def change
    add_column :user_profiles, :education_end_date, :string
  end
end
