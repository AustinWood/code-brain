# == Schema Information
#
# Table name: notes
#
#  id         :integer          not null, primary key
#  question   :text             default(""), not null
#  skeleton   :text             default(""), not null
#  answer     :text             default(""), not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Note < ApplicationRecord
  validates :question, :skeleton, :answer, :author_id, presence: true

end
