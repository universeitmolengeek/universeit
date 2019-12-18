<?php

namespace App\Http\Controllers;

use App\Content;
use Illuminate\Http\Request;

class ContentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexNav()
    {
        $navLinks = Content::all()->take(7);
        
        return $navLinks;
    }

  
    public function indexBannerHome()
    public function indexBannerGallery(){
        $bannerItem = Content::find(13);
        return $bannerItem;
        
    }
    {
        $bannerItems = Content::findMany([8,9]);

        return $bannerItems;
    }
}
