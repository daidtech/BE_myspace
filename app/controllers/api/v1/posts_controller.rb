# create controller posts in side api v1
module Api
  module V1
    class PostsController < ApplicationController
      def index
        @posts = CamaleonCms::PostType.first.posts.published
      end
    end
  end
end