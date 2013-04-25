class Qist < ActiveRecord::Base
  attr_accessible :title, :user_id

  has_many :favorites

  belongs_to :user
end
