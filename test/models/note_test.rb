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

require 'test_helper'

class NoteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
