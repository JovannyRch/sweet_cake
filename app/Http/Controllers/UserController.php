<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{

    public function index(Request $request)
    {

        $products = Product::all();
        return Inertia::render('User/Home', [
            'products' => $products,
        ]);
    }
}
