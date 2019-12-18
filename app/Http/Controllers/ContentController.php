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
    
    public function indexBannerGallery(){
        $bannerTitle = Content::find(13);
        return $bannerTitle;
        
    }

    public function indexBannerHome()
    {
        $bannerItems = Content::findMany([8,9]);

        return $bannerItems;
    }

    public function indexAbout(){

        $aboutItems = Content::findMany([10,11,12]);

        return $aboutItems;
    }

    public function indexBannerContact(){

        $bannerItem = Content::find(38);

        return $bannerItem;
    }

    public function indexBannerNews(){

        $bannerTitle = Content::find(14);

        return $bannerTitle;
    }

    public function indexNews(){

        $newsTitle = Content::find(15);

        return $newsTitle;
    }

    public function indexNewsletter(){

        $newsletterItems = Content::findMany([16,17]);

        return $newsletterItems;
    }

    public function indexFooter(){

        $footerItems = Content::findMany([18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]);

        return $footerItems;
    }

    public function indexContact(){

        $contactItems = Content::findMany([39,40,41,42,43,44,45,46,47,48]);

        return $contactItems;
    }

    public function indexBannerTeachers(){

        $teachersTitle = Content::find(49);

        return $teachersTitle;
    }

    public function show(Content $content){

        return $content;

    }

    public function update(Content $content){        

        $content->content = request('content');

        $content->save();
    }

}
