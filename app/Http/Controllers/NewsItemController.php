<?php

namespace App\Http\Controllers;

use App\News_item;
use Illuminate\Http\Request;

class NewsItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $newsItems = News_item::all();

        // if(request()->wantsJson()){
        //     return $newsItems;
        // }
            
        return view('admin.news.news');
    }
    public function fetch(){

        // $newsItems = News_item::all();
        // $reverse = $newsItems->reverse();
        // $reverse->all();
        
        // return $reverse;
        $newsItems = News_item::all();
        return $newsItems;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        request()->validate([
            'title'=>'required',
            'description'=>'required'
        ]);
        $newsItem = new News_item;
        $newsItem->title = request('title');
        $newsItem->description = request('description');
        $newsItem->id = request('id');
        $newsItem->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\News_item  $news_item
     * @return \Illuminate\Http\Response
     */
    public function show(News_item $news)
    {
        return view('admin.news.newsItem');
    }

    public function showFetch(News_item $news){

        return $news;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\News_item  $news_item
     * @return \Illuminate\Http\Response
     */
    public function edit(News_item $news_item)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\News_item  $news_item
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, News_item $news_item)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\News_item  $news_item
     * @return \Illuminate\Http\Response
     */
    public function destroy(News_item $news)
    {
        $news->delete();
    }
}
