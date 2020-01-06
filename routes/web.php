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

Route::get('/content/{content}', 'ContentController@show');


Route::put('/content/{content}', 'ContentController@update');

Auth::routes();

Route::get('/home', function() {
    return view('home');
})->name('home')->middleware('auth');

Route::get('/navBarContent', function() {
    return view('admin.content.navBarContent');
})->name('home')->middleware('auth');

Route::get('/headerHomeContent', function() {
    return view('admin.content.headerHomeContent');
})->name('home')->middleware('auth');

Route::get('/headerContactContent', function() {
    return view('admin.content.headerContactContent');
})->name('home')->middleware('auth');

Route::get('/aboutContent', function() {
    return view('admin.content.aboutContent');
})->name('home')->middleware('auth');

Route::get('/galleryContent', function() {
    return view('admin.content.galleryContent');
})->name('home')->middleware('auth');

Route::get('/newsContent', function() {
    return view('admin.content.newsContent');
})->name('home')->middleware('auth');

Route::get('/newsletterContent', function() {
    return view('admin.content.newsletterContent');
})->name('home')->middleware('auth');

Route::get('/footerContent', function() {
    return view('admin.content.footerContent');
})->name('home')->middleware('auth');

Route::get('/formContactContent', function() {
    return view('admin.content.formContactContent');
})->name('home')->middleware('auth');

Route::get('/teachersContent', function() {
    return view('admin.content.teachersContent');
})->name('home')->middleware('auth');



Route::resource('/news', 'NewsItemController');
Route::get('/api/news', 'NewsItemController@fetch');
Route::get('/api/news/{news}', 'NewsItemController@showFetch');


Route::resource('/events','EventController');

Route::get('/api/events','EventController@fetch');


Route::get('/api/events/{event}','EventController@showEvent');

Route::resource('/api/subscribers', 'SubscriberController');