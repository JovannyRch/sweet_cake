<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'price',
        'img'
    ];

    use HasFactory;
    protected $appends = ['imagen'];

    protected function getImagenAttribute()
    {
        return new Attribute(
            get: fn () => asset($this->img),
        );
    }
}
