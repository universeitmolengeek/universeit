<?php

use Illuminate\Database\Seeder;

use App\Event;

class EventsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Event::truncate();
        Event::create([
            'start' => '2019-12-21 13:45:00',
            'end' => '2019-12-19 13:45:46',
            'place' => 'ryan',
            'title' => 'ryan',
            'theme' => 'ryan',
            'description' => 'ryan lenj eie fobrizqb fo rfj prfpir firif ri fipri rif ri fiof firbfpo',
        ]);
        Event::create([
            'start' => '2019-12-21 13:45:00',
            'end' => '2019-12-19 13:45:46',
            'place' => 'ryan',
            'title' => 'ryan',
            'theme' => 'ryan',
            'description' => 'ryan lenj eie fobrizqb fo rfj prfpir firif ri fipri rif ri fiof firbfpo',
        ]);
        Event::create([
            'start' => '2019-12-24 13:45:00',
            'end' => '2019-12-19 13:45:46',
            'place' => 'ryan',
            'title' => 'ryan',
            'theme' => 'ryan',
            'description' => 'ryan lenj eie fobrizqb fo rfj prfpir firif ri fipri rif ri fiof firbfpo',
        ]);
        Event::create([
            'start' => '2019-12-31 13:45:00',
            'end' => '2019-12-19 13:45:46',
            'place' => 'ryan',
            'title' => 'ryan',
            'theme' => 'ryan',
            'description' => 'ryan lenj eie fobrizqb fo rfj prfpir firif ri fipri rif ri fiof firbfpo',
        ]);
        Event::create([
            'start' => '2020-01-2 13:45:00',
            'end' => '2019-12-19 13:45:46',
            'place' => 'ryan',
            'title' => 'ryan',
            'theme' => 'ryan',
            'description' => 'ryan lenj eie fobrizqb fo rfj prfpir firif ri fipri rif ri fiof firbfpo',
        ]);
        Event::create([
            'start' => '2020-01-19 13:45:00',
            'end' => '2019-12-19 13:45:46',
            'place' => 'ryan',
            'title' => 'ryan',
            'theme' => 'ryan',
            'description' => 'ryan lenj eie fobrizqb fo rfj prfpir firif ri fipri rif ri fiof firbfpo',
        ]);
    }
}
