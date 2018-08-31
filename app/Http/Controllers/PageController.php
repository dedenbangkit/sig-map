<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index(Request $request)
    {
        return view('index');
    }

    public function database(Request $request)
    {
        return view('database');
    }
}
