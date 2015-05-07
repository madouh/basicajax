class DataController < ApplicationController
  def enter
  end

  def search
  	@clean_params=(params[:search]).gsub(/\s+/, "")
  	puts "============================"
  	puts @clean_params.inspect
  	puts "============================"
  	query="%" + @clean_params + "%"
  	@full=Post.where('name=?',@clean_params).first
  	puts @full.inspect
  	@auto=Post.where('name LIKE ?', query).limit(15).pluck(:name)
  	puts @auto.inspect
  end
end
