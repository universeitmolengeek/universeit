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
        Content::truncate();
        // START HOME HEADER CONTENT
        Content::create([
            "placement"=>"Premier lien première navBar",
            "content"=>"S'inscrire",
        ]);

        Content::create([
            "placement"=>"Deuxième lien première navBar",
            "content"=>"Se Connecter",
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
        Content::create([
            "placement"=>"Titre section Présentation",
            "content"=>"Who we are to Serave the nation",
        ]);

        Content::create([
            "placement"=>"Premier paragraphe section Présentation",
            "content"=>"inappropriate behavior is often laughed off as boys will be boys, women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.",
        ]);

        Content::create([
            "placement"=>"Deuxième paragraphe section Présentation",
            "content"=>"inappropriate behavior is often laughed off as boys will be boys, women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed off as boys will be boys, women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.",
        ]);
        // END ABOUT CONTENT

        // START GALERY CONTENT
        Content::create([
            "placement"=>"Titre section galerie",
            "content"=>"Notre Galerie",
        ]);
        // END GALERY CONTENT

        // START NEWS CONTENT
        Content::create([
            "placement"=>"Titre section nouveautés",
            "content"=>"Les Nouveautés",
        ]);

        Content::create([
            "placement"=>"Sous-titre section nouveautés",
            "content"=>"Quoi de neuf sur le campus",
        ]);
        // END NEWS CONTENT

        // START NEWSLETTER CONTENT
        Content::create([
            "placement"=>"Titre section newsletter",
            "content"=>"Inscrivez-vous à notre newsletter",
        ]);

        Content::create([
            "placement"=>"Placeholder input section newsletter",
            "content"=>"Entrez votre adresse mail",
        ]);
        // END NEWSLETTER CONTENT

        // START FOOTER CONTENT
        // Title
        Content::create([
            "placement"=>"Titre première rangée section footer",
            "content"=>"Top Products",
        ]);

        Content::create([
            "placement"=>"Titre deuxième rangée section footer",
            "content"=>"Quick Links",
        ]);

        Content::create([
            "placement"=>"Titre Troisième rangée section footer",
            "content"=>"Features",
        ]);

        Content::create([
            "placement"=>"Titre quatrième rangée section footer",
            "content"=>"Resources",
        ]);

        // Content
        // --------------------------------------------------------------
        Content::create([
            "placement"=>"Première rangée premier lien  section footer",
            "content"=>"Managed Website",
        ]);

        Content::create([
            "placement"=>"Première rangée deuxième lien section footer",
            "content"=>"Manage Reputation",
        ]);

        Content::create([
            "placement"=>"Première rangée troisième lien section footer",
            "content"=>"Power tools",
        ]);

        Content::create([
            "placement"=>"Première rangée quatrième lien section footer",
            "content"=>"Marketing service",
        ]);

        // --------------------------------------------------------------

        Content::create([
            "placement"=>"Deuxième rangée premier lien section footer",
            "content"=>"Jobs",
        ]);

        Content::create([
            "placement"=>"Deuxième rangée deuxième lien section footer",
            "content"=>"Brand Assets",
        ]);

        Content::create([
            "placement"=>"Deuxième rangée troisième lien section footer",
            "content"=>"Investor Relations",
        ]);

        Content::create([
            "placement"=>"Deuxième rangée quatrième lien section footer",
            "content"=>"Terms of service",
        ]);

        // --------------------------------------------------------------

        Content::create([
            "placement"=>"Troisème rangée premier lien section footer",
            "content"=>"Jobs",
        ]);

        Content::create([
            "placement"=>"Troisème rangée deuxième lien section footer",
            "content"=>"Brand Assets",
        ]);

        Content::create([
            "placement"=>"Troisème rangée troisème lien section footer",
            "content"=>"Investor Relations",
        ]);

        Content::create([
            "placement"=>"Troisème rangée quatrième lien section footer",
            "content"=>"Terms of Service",
        ]);

        // --------------------------------------------------------------

        Content::create([
            "placement"=>"Quatrième rangée premier lien section footer",
            "content"=>"Guides",
        ]);

        Content::create([
            "placement"=>"Quatrième rangée deuxième lien section footer",
            "content"=>"Research",
        ]);

        Content::create([
            "placement"=>"Quatrième rangée troisième lien section footer",
            "content"=>"Experts",
        ]);

        Content::create([
            "placement"=>"Quatrième rangée quatrième lien section footer",
            "content"=>"Agencies",
        ]);
        // END FOOTER CONTENT

        // START CONTACT HEADER CONTENT
        Content::create([
            "placement"=>"Titre banière principale contact",
            "content"=>"Contactez-Nous",
        ]);
        // END CONTACT HEADER CONTENT



    }   
}
