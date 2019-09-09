class Api::V1::DogsController < Api::V1::ApiController
  before_action :set_dog, only: [:show, :update, :destroy]
  before_action :require_authorization!, only: [:show, :update, :destroy]

  #CRUD
  # GET /api/v1/dogs
  def index
    @dogs = { :dogs => current_user.dogs, :size => current_user.dogs.size }

    render json: @dogs
  end

  # GET /api/v1/dogs/1
  def show
    render json: @dog
  end

  # POST /api/v1/dogs
  def create
    @dog = Dog.new(dog_params.merge(user: current_user))

    if @dog.save
      render json: @dog, status: :created
    else
      render json: @dog.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/v1/dogs/1
  def update
    if @dog.update(dog_params)
      render json: @dog
    else
      render json: @dog.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/v1/dogs/1
  def destroy
    @dog.destroy
  end

  private

  # User reference funcs
  # Use callbacks to share common setup or constraints between actions.
  def set_dog
    @dog = Dog.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def dog_params
    params.require(:dog).permit(:id, :name, :race, :gender, :weight, :description)
  end

  def require_authorization!
    unless current_user == @dog.user
      render json: {}, status: :forbidden
    end
  end
end
