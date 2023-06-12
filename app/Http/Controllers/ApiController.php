<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ApiController extends Controller
{

    function getProducts()
    {
        $products = Product::all();

        return response()->json($products, 200);
    }
}
