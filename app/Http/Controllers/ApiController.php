<?php

namespace App\Http\Controllers;

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
}
