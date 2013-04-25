class Qist < ActiveRecord::Base
  attr_accessible :title, :user_id, :qist_files_atrributes

  has_many :favorites

  belongs_to :user
  has_many :qist_files

  accepts_nested_attributes_for :qist_files
end
