<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    // --- Get /api/products
    public function getProducts()
    {
        return ["message" => "Get all products"];
    }

    // --- Post /api/products
    public function createProduct()
    {
        return ["message" => "Create 1 product"];
    }

    // --- Get /api/products/{productId}
    public function getProduct($productId)
    {
        return ["message" => "Get 1 product"];
    }

    // --- Patch /api/products/{productId}
    public function updateProduct($productId)
    {
        return ["message" => "Update 1 product"];
    }

    // --- Delete /api/products/{productId}
    public function deleteProduct($productId)
    {
        return ["message" => "Delete 1 product"];
    }

    // --- Get /api/categories/{categoryId}/products
    public function getCategoryProducts($categoryId)
    {
        return ["message" => "Get all products belong to categoryId"];
    }
}