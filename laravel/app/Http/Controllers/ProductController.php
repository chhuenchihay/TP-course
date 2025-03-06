<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;


class ProductController extends Controller
{
    // --- Get /api/products
    public function getProducts()
    {
        $products = Product::all();
        return response()->json($products);
    }

    // --- Post /api/products
    public function createProduct(Request $request)
    {
        $imagePaths = [];

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('uploads/products', 'public'); // Store in storage/app/public/uploads/products
                $imagePaths[] = asset("storage/$path"); // Generate accessible URL
            }
        }

        $product = Product::create([
            'name' => $request->name,
            'description' => $request->description,
            'category_id' => $request->category_id,
            'pricing' => $request->pricing,
            'images' => $imagePaths,
        ]);
        return response()->json($product);
    }

    // --- Get /api/products/{productId}
    public function getProduct($productId)
    {
        $product = Product::find($productId);
        return response()->json($product);
    }

    // --- Patch /api/products/{productId}
    public function updateProduct($productId, Request $request)
    {
        $product = Product::find($productId);
        $product->update([
            'name' => $request->name,
            'description' => $request->description,
            'category_id' => $request->category_id,
            'pricing' => $request->pricing,
            'images' => $request->images,
        ]);
        return response()->json($product);
    }

    // --- Delete /api/products/{productId}
    public function deleteProduct($productId)
    {   
        $product = Product::find($productId);
        $product->delete();
        return ["message" => "Delete product id $productId"];
    }

    // --- Get /api/categories/{categoryId}/products
    public function getCategoryProducts($categoryId)
    {
        $category = Category::find($categoryId);
        $products = $category->products;
        return response()->json($products);
    }
}