<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory;

    use SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $fillable = [
        'order_date',
        'total_price',
        'customer_id',
    ];

    protected $table = 'orders';

    protected function orderDate(): Attribute {
        return Attribute::make(
            get: fn ($value) => Carbon::parse($value)->format('d/m/Y H:i:s'),
            set: fn ($value) => $value instanceof Carbon
                ? $value->format('Y-m-d H:i:s')
                : Carbon::createFromFormat('d/m/Y H:i:s', $value)->format('Y-m-d H:i:s')
        );
    }

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }

    public function orderProducts()
    {
        return $this->hasMany(OrderProduct::class);
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }
}
