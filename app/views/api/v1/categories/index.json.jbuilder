json.array! @categories.each_with_index do |category, index|
  json.id category.id
  json.count category.count
  json.name category.name
end