<?php

namespace App\DataFixtures\ORM;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Faker\Provider\Base as BaseProvider;
use Faker\Generator;

class AppProvider extends BaseProvider
{

    public function __construct(Generator $generator)
    {
        parent::__construct($generator);
    }

    public function genus()
    {
        $key = array_rand($this->genera);
        return $this->genera[$key];
    }

    private $genera = [
        'Octopus',
        'Balaena',
        'Orcinus',
        'Hippocampus',
        'Asterias',
        'Amphiprion',
        'Carcharodon',
        'Aurelia',
        'Cucumaria',
        'Balistoides',
        'Paralithodes',
        'Chelonia',
        'Trichechus',
        'Eumetopias'
    ];
}
