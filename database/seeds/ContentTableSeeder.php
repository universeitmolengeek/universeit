<?php

use Illuminate\Database\Seeder;
use App\Content;
class ContentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // START HOME HEADER CONTENT
        Content::create([
            "placement"=>"Premier lien première navBar",
            "content"=>"S'inscrire",
        ]);

        Content::create([
            "placement"=>"Deuxième lien première navBar",
            "content"=>"Se Déconnecter",
        ]);

        Content::create([
            "placement"=>"Premier lien deuxième navBar",
            "content"=>"Accueil",
        ]);

        Content::create([
            "placement"=>"Deuxième lien deuxième navBar",
            "content"=>"Présentation",
        ]);

        Content::create([
            "placement"=>"Troisième lien deuxième navBar",
            "content"=>"Galerie",
        ]);

        Content::create([
            "placement"=>"Quatrième lien deuxième navBar",
            "content"=>"Nouveautés",
        ]);

        Content::create([
            "placement"=>"Cinquième lien deuxième navBar",
            "content"=>"Contact",
        ]);

        Content::create([
            "placement"=>"Titre banière principale home",
            "content"=>"UNIVERSEIT",
        ]);

        Content::create([
            "placement"=>"Bouton banière principale home",
            "content"=>"COMMENCER",
        ]);
        //END HOME HEADER CONTENT

        //START ABOUT CONTENT
    }
}
