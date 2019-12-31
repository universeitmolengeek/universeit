<?php

use Illuminate\Database\Seeder;
use App\News_item;
class NewsItemsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        News_item::create([
            'title' => 'Sale nouveauté',
            'description' => 'Ceci est une nouveauté de qualité'
        ]);
        News_item::create([
            'title' => 'Sale nouveauté',
            'description' => 'Ceci est une nouveauté de qualité'
        ]);
        News_item::create([
            'title' => 'Sale nouveauté',
            'description' => 'Ceci est une nouveauté de qualité'
        ]);
        News_item::create([
            'title' => 'Sale nouveauté',
            'description' => 'Ceci est une nouveauté de qualité'
        ]);
        News_item::create([
            'title' => 'Sale nouveauté',
            'description' => 'Ceci est une nouveauté de qualité'
        ]);
        News_item::create([
            'title' => 'Sale nouveauté',
            'description' => 'Ceci est une nouveauté de qualité'
        ]);
    }
}
