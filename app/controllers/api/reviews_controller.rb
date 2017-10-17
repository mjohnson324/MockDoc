class Api::ReviewsController < ApplicationController
  before_action :require_logged_in

  def create
    @review = Review.new(review_params,
                         params[:review][:appointment_id],
                         params[:review][:doctor_id])
    if @review.save
      render "api/reviews/show"
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find(params[:id])

    if @review.update(review_params)
      render :edit
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def show
    @review = Review.where(appointment_id: params[:id])
    render :show
  end

  def destroy
    @review = Review.find(params[:id])

    @review.destroy
    render json: @review.id
  end

  private

  def review_params
    params.require(:review)
      .permit(:overall_rating, :wait_time, :bedside_manner, :body)
  end
end
