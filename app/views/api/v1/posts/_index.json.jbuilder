json.array! @posts.each_with_index do |post, index|
  json.id index
  json.createdAt((post.created_at.to_f * 1000).to_i)
  json.updatedAt((post.updated_at.to_f * 1000).to_i)
  json.content post.content
end