class AdminSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :middle_name, :lastname, :email, :password_digest
end
