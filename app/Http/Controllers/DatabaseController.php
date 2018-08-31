<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DatabaseController extends Controller
{
    public function getPostColumnSearch()
    {
        return view('database');
    }

}
