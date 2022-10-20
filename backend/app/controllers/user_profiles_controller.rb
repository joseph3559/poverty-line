class UserProfilesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        user_profiles = UserProfile.all
        render json: user_profiles
    end    
    
    def create
        user_profile = UserProfile.create!(user_profile_params)
        render json:user_profile, status: :created
    end

    def show
        user_profile = UserProfile.find(params[:id])
        render json: user_profile, status: :ok
    end 

    def update
        user_profile = UserProfile.find(params[:id])
        user_profile.update!(user_profile_params)
        render json: user_profile, status: :accepted
    end 

    private
    def user_profile_params
        params.permit(:firstname, :lastname, :email, :gender, :dob, :national_id, :address, :county, :estate, :user_id, :career_summary, :experience, :education, :skills_and_hobbies, :languages)
    end

    def render_not_found_response
        render json: { error: "User profile not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end
end
