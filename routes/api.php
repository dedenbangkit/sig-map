<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/params','ApiController@getParams');
Route::get('/locations','ApiController@getLocation');
Route::get('/details/{id}','ApiController@getDetail');
Route::get('/search/{q}','ApiController@searchData');
Route::post('/database','ApiController@getDataTables');
