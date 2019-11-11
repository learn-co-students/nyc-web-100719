class CartController < ApplicationController
  def add_to_cart
    session[:cart] ||= []
    session[:cart] << params[:id]

    redirect_to books_path
  end

  def clear_cart
    session[:cart] = []

    redirect_to books_path
  end

  def remove_from_cart
    position = session[:cart].index(params[:id])
    session[:cart].delete_at(position)

    redirect_to books_path
  end
end