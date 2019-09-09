class Api::V1::ClientsController < Api::V1::ApiController
  before_action :set_client, only: [:show, :update, :destroy]
  before_action :require_authorization!, only: [:show, :update, :destroy]

  #CRUD
  # GET /api/v1/clients
  def index
    @clients = { :clients => current_user.clients, :size => current_user.clients.size }

    render json: @clients
  end

  # GET /api/v1/clients/1
  def show
    render json: @client
  end

  # POST /api/v1/clients
  def create
    @client = Client.new(client_params.merge(user: current_user))

    if @client.save
      render json: @client, status: :created
    else
      render json: @client.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/v1/clients/1
  def update
    if @client.update(client_params)
      render json: @client
    else
      render json: @client.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/v1/clients/1
  def destroy
    @client.destroy
  end

  private

  # User reference funcs
  # Use callbacks to share common setup or constraints between actions.
  def set_client
    @client = Client.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def client_params
    params.require(:client).permit(:id, :name, :email, :phone_number, :location, :description)
  end

  def require_authorization!
    unless current_user == @client.user
      render json: {}, status: :forbidden
    end
  end
end
