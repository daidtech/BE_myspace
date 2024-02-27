# create controller posts in side api v1
module Api
  module V1
    class PostsController < ApplicationController
      def index
        @posts = CamaleonCms::PostType.first.posts.published
      end

      def show
        @post = CamaleonCms::PostType.first.posts.published.where(id: params[:id])
      end
    end
  end
end