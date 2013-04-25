class User < ActiveRecord::Base
  attr_accessible :user_name

  has_many :favorites
  has_many :favorite_qists, through: :favorites, source: :qist

  has_many :qists

end
