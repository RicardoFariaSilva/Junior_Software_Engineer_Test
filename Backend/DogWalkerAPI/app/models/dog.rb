class Dog < ApplicationRecord
  belongs_to :user
  validates :id, :name, :race, presence: true
end
