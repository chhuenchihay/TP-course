<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ProductTest extends TestCase
{
    use RefreshDatabase;

    /**
    * Description: Check if a product can be created
    * Precondition: None
    * Test Steps: 1. Create a category
    *             2. Send POST request with product data
    *             3. Check response status and data
    * Test Data : Sample product data
    * Expected Result: Response status should be 200 and product should exist in database
    * Actual Result: 
    * Status: 
    * Remark: None
    */
    public function test_can_create_product(): void
    {
        $category = Category::create(['name' => 'Shoes']);

        $payload = [
            'name' => 'Running Shoes',
            'description' => 'Lightweight shoes for running',
            'pricing' => 59.99,
            'category_id' => $category->id,
            'images' => ['http://example.com/image1.jpg'],
        ];

        $response = $this->post('/api/products', $payload);

        $response->assertStatus(201)
                ->assertJsonFragment(['name' => 'Running Shoes']);

        $this->assertDatabaseHas('products', ['name' => 'Running Shoes']);
    }

    /**
    * Description: Check if all products can be retrieved
    * Precondition: None
    * Test Steps: 1. Create a category and product
    *             2. Send GET request for all products
    *             3. Check response status and structure
    * Test Data : Sample product data
    * Expected Result: Response status should be 200 with correct product structure
    * Actual Result: 
    * Status: 
    * Remark: None
    */
    public function test_can_get_all_products(): void
    {
        $category = Category::create(['name' => 'Electronics']);

        Product::create([
            'name' => 'Phone',
            'description' => 'Smartphone with 6GB RAM',
            'pricing' => 299.99,
            'category_id' => $category->id,
            'images' => ['http://example.com/image.jpg'],
        ]);

        $response = $this->get('/api/products');

        $response->assertStatus(200)
                ->assertJsonStructure([
                    '*' => ['id', 'name', 'description', 'pricing', 'category_id', 'images', 'created_at', 'updated_at']
                ]);
    }

    /**
    * Description: Check if a single product can be retrieved
    * Precondition: None
    * Test Steps: 1. Create a category and product
    *             2. Send GET request for specific product
    *             3. Check response status and data
    * Test Data : Sample product data
    * Expected Result: Response status should be 200 with correct product data
    * Actual Result: 
    * Status: 
    * Remark: None
    */
    public function test_can_get_single_product(): void
    {
        $category = Category::create(['name' => 'Books']);

        $product = Product::create([
            'name' => 'Laravel Book',
            'description' => 'Learn Laravel from scratch',
            'pricing' => 19.99,
            'category_id' => $category->id,
            'images' => [],
        ]);

        $response = $this->get("/api/products/{$product->id}");

        $response->assertStatus(200)
                ->assertJsonFragment(['name' => 'Laravel Book']);
    }

    /**
    * Description: Check if a product can be updated
    * Precondition: None
    * Test Steps: 1. Create a category and product
    *             2. Send PATCH request with updated data
    *             3. Check response status and updated data
    * Test Data : Sample product data and updates
    * Expected Result: Response status should be 200 and database should reflect updates
    * Actual Result: 
    * Status: 
    * Remark: None
    */
    public function test_can_update_product(): void
    {
        $category = Category::create(['name' => 'Gadgets']);

        $product = Product::create([
            'name' => 'Old Gadget',
            'description' => 'Outdated gadget',
            'pricing' => 10.00,
            'category_id' => $category->id,
            'images' => [],
        ]);

        $response = $this->patch("/api/products/{$product->id}", [
            'name' => 'New Gadget',
            'description' => 'Updated description',
            'pricing' => 15.00,
            'category_id' => $category->id,
            'images' => ['http://example.com/new-image.jpg'],
        ]);

        $response->assertStatus(200)
                ->assertJsonFragment(['name' => 'New Gadget']);

        $this->assertDatabaseHas('products', ['name' => 'New Gadget']);
    }

    /**
    * Description: Check if a product can be deleted
    * Precondition: None
    * Test Steps: 1. Create a category and product
    *             2. Send DELETE request
    *             3. Check response status and database
    * Test Data : Sample product data
    * Expected Result: Response status should be 200 and product should be removed from database
    * Actual Result: 
    * Status: 
    * Remark: None
    */
    public function test_can_delete_product(): void
    {
        $category = Category::create(['name' => 'Accessories']);

        $product = Product::create([
            'name' => 'Watch',
            'description' => 'Digital watch',
            'pricing' => 25.00,
            'category_id' => $category->id,
            'images' => [],
        ]);

        $response = $this->delete("/api/products/{$product->id}");

        $response->assertStatus(200)
                ->assertJsonFragment(['message' => "Delete product id {$product->id}"]);

        $this->assertDatabaseMissing('products', ['id' => $product->id]);
    }

    /**
    * Description: Check if products can be retrieved by category
    * Precondition: None
    * Test Steps: 1. Create a category and product
    *             2. Send GET request for category products
    *             3. Check response status and data
    * Test Data : Sample category and product data
    * Expected Result: Response status should be 200 with correct product data
    * Actual Result: 
    * Status: 
    * Remark: None
    */
    public function test_can_get_products_by_category(): void
    {
        $category = Category::create(['name' => 'Toys']);

        Product::create([
            'name' => 'Toy Car',
            'description' => 'Plastic toy car',
            'pricing' => 5.00,
            'category_id' => $category->id,
            'images' => [],
        ]);

        $response = $this->get("/api/categories/{$category->id}/products");

        $response->assertStatus(200)
                ->assertJsonFragment(['name' => 'Toy Car']);
    }
}
