<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Kategoriak;

class Ingatlanok extends Model
{
    public function kategoriak()
    {
        return $this->hasOne(Kategoriak::class, 'id', 'kategoria');
    }
}
