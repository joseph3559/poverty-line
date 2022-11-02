class JobApplication < ApplicationRecord
    validates :cover_letter, presence: true
    validates :attachment, presence: true
end
