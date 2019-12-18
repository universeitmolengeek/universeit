<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/contact', function () {
    return view('contact');
});

Route::get('/nav', 'ContentController@indexNav');


Route::get('/bannerHome', 'ContentController@indexBannerHome');


Route::get('/bannerContact', 'ContentController@indexBannerContact');


Route::get('/gallery', 'ContentController@indexBannerGallery');


Route::get('/newsTitle', 'ContentController@indexBannerNews');


Route::get('/subtitleNews', 'ContentController@indexBannerNews');


Route::get('/newsletter', 'ContentController@indexNewsletter');


Route::get('/footer', 'ContentController@indexFooter');


Route::get('/contactItems', 'ContentController@indexContact');


Route::get('/teachersTitle', 'ContentController@indexBannerTeachers');


Route::get('/about', 'ContentController@indexAbout');

Auth::routes();

Route::get('/home', function() {
    return view('home');
})->name('home')->middleware('auth');

