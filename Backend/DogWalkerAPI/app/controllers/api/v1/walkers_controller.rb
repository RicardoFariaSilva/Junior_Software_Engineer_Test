class Api::V1::WalkersController < Api::V1::ApiController
  before_action :set_walker, only: [:show, :update, :destroy]
  before_action :require_authorization!, only: [:show, :update, :destroy]

  #CRUD
  # GET /api/v1/walkers
  def index
    @walkers = { :walkers => current_user.walkers, :size => current_user.walkers.size }

    render json: @walkers
  end

  # GET /api/v1/walkers/1
  def show
    render json: @walker
  end

  # POST /api/v1/walkers
  def create
    @walker = Walker.new(walker_params.merge(user: current_user))

    if @walker.save
      render json: @walker, status: :created
    else
      render json: @walker.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/v1/walkers/1
  def update
    if @walker.update(walker_params)
      render json: @walker
    else
      render json: @walker.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/v1/walkers/1
  def destroy
    @walker.destroy
  end

  private

  # User reference funcs
  # Use callbacks to share common setup or constraints between actions.
  def set_walker
    @walker = Walker.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def walker_params
    params.require(:walker).permit(:id, :name, :email, :phone_number, :location, :description)
  end

  def require_authorization!
    unless current_user == @walker.user
      render json: {}, status: :forbidden
    end
  end
end
