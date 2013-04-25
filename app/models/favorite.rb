class Favorite < ActiveRecord::Base
  attr_accessible :qist_id, :user_id

  belongs_to :qist
  belongs_to :user
end
