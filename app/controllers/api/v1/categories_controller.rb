# create controller posts in side api v1
module Api
  module V1
    class CategoriesController < ApplicationController
      def index
        @categories = CamaleonCms::Category.all
      end

      def show
        @category = CamaleonCms::Category.find(params[:id])
      end
    end
  end
end