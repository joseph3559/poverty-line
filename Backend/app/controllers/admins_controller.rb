class AdminsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        admins = Admin.all
        render json: admins
    end

    def show
        @user = Admin.find(params[:id])
        render json: @user
    end

    def create
        @user = Admin.create!(user_params)
        render json: @user, status: :created
    end 

    def update
        @user = Admin.find(params[:id])
        @user.update!(user_params)
        render json: @user, status: :accepted
    end 

    def destroy
        @user = Admin.find(params[:id])
        @user.destroy
        head :no_content
    end 

    private 

    def admin_params
        params.permit(:first_name, :last_name, :email, :password_digest)
    end

    def render_not_found_response
        render json: { error: "Admin not found" }, status: :not_found
    end
end
