json.array! @categories_root.each_with_index do |category, index|
  json.id category.id
  json.count category.count
  json.name category.name
  json.children category.children do |child|
    json.partial! 'api/v1/categories/children', category: child
  end
end