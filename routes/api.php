<?php

use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});




/* Route::get('/products', [ApiController::class, 'getProducts']); */

//Crear producto

Route::post('/products', [ApiController::class, 'createProduct']);
Route::put('/products', [ApiController::class, 'updateProduct']);

// add delete product route
Route::delete('/products/{id}', [ApiController::class, 'deleteProduct']);

Route::put('/order', [ApiController::class, 'updateOrder']);
Route::post('/order', [ApiController::class, 'createOrder']);

/* Add ingrediente route */
Route::post('/ingredients', [ApiController::class, 'createIngredient']);

/* Delete ingredient */
Route::delete('/ingredients/{id}', [ApiController::class, 'deleteIngredient']);
