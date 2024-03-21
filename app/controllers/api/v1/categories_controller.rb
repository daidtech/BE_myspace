# create controller posts in side api v1
module Api
  module V1
    class CategoriesController < ApplicationController
      def index
        @categories_root = CamaleonCms::Category.where(parent_id: MY_CONSTANT[:CATEGORY][:CategoryIDNone])
      end

      def show
        @category = CamaleonCms::Category.find(params[:id])
      end
    end
  end
end