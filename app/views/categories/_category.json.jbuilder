json.extract! category, :id, :title, :description, :posts_count, :position, :created_at, :updated_at
json.url category_url(category, format: :json)
