class QistFile < ActiveRecord::Base
  attr_accessible :body, :qist_id

  belongs_to :qist
end
