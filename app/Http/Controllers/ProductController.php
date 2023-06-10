<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::latest()->get();

        return Inertia::render('Product/Index', [
            'products' => $products
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Product/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'price' => 'required|numeric',
            'name' => 'required'
        ]);

        $imageName = time().'.'.$request->image->extension();
        $request->image->move(public_path('images'), $imageName);

        Product::create([
            'name' => $request->name,
            'price' => $request->price,
            'img' => $imageName,
        ]);


        return Redirect::route('products.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        return Inertia::render('Product/Edit', [
            'product' => [
                'id' => $product->id,
                'name' => $product->name,
                'price' => $product->price
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreProductRequest $request, Product $product)
    {
        $product->update($request->validated());

        return Redirect::route('products.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return Redirect::route('products.index');
    }

    public function ingredients(Product $product)
    {
        return Inertia::render('Product/Ingredients', [
            'product' => [
                'id' => $product->id,
                'name' => $product->name,
                'price' => $product->price
            ]
        ]);
    }
}
