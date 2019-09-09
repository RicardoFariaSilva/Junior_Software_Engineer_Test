class Client < ApplicationRecord
  belongs_to :user
  validates :id, :name, presence: true
end
