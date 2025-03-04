class CartController < ApplicationController
  @@cart = []

  def add
    products = [
      { id: 1, name: 'Producto 1', price: 100 },
      { id: 2, name: 'Producto 2', price: 200 }
    ]
    product = products.find { |p| p[:id] == params[:id].to_i }
    @@cart << product if product
    render json: { message: 'Producto agregado', cart: @@cart }
  end

  def index
    render json: @@cart
  end
end
