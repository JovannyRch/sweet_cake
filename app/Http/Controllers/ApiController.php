<?php

namespace App\Http\Controllers;

use App\Models\Ingredient;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;

class ApiController extends Controller
{

    function getProducts()
    {
        $products = Product::all();

        return response()->json($products, 200);
    }

    function updateProduct(Request $request)
    {
        $request->validate([
            'id' => 'required|numeric',
            'price' => 'required|numeric',
            'name' => 'required',
            'description' => 'required'
        ]);

        $product = Product::find($request->id);

        $product->update([
            'name' => $request->name,
            'price' => $request->price,
            'description' => $request->description
        ]);
        return response()->json($product, 200);
    }

    function deleteProduct(Request $request, $id)
    {
        $product = Product::find($id);
        $product->delete();

        return response()->json($product, 200);
    }

    function createProduct(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'price' => 'required|numeric',
            'name' => 'required',
            'description' => 'required'
        ]);

        $imageName = time() . '.' . $request->image->extension();
        $request->image->move(public_path('images'), $imageName);

        $producto = Product::create([
            'name' => $request->name,
            'price' => $request->price,
            'description' => $request->description,
            'img' => $imageName,
        ]);

        return response()->json($producto, 200);
    }

    function updateOrder(Request $request)
    {
        $order = Order::find($request->id);
        $order->update([
            'status' => 'Entregado',
        ]);

        return response()->json($order, 200);
    }

    function createOrder(Request $request)
    {
        $order = Order::create([
            'user_id' => $request->user_id,
            'products' => $request->products,
            'payment_method_type' => $request->payment_method_type,
            'payment_method_data' => $request->payment_method_data,
            'total' => $request->total,
            'delivery_data' => $request->delivery_data,
            'delivery_type' => $request->delivery_type,
        ]);

        return response()->json($order, 200);
    }

    function createIngredient(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'product_id' => 'required|numeric',
        ]);

        $ingredient = Ingredient::create([
            'name' => $request->name,
            'price' => $request->price,
            'product_id' => $request->product_id,
        ]);

        return response()->json($ingredient, 200);
    }

    function deleteIngredient(Request $request, $id)
    {
        $ingredient = Ingredient::find($id);
        $ingredient->delete();

        return response()->json($ingredient, 200);
    }
}
