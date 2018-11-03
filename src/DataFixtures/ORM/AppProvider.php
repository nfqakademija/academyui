<?php

namespace App\DataFixtures\ORM;

use Faker\Provider\Base as BaseProvider;
use Faker\Generator;

class AppProvider extends BaseProvider
{
    public function __construct(Generator $generator)
    {
        parent::__construct($generator);
    }

    public function buffyQuote()
    {
        $key = array_rand($this->quotes);
        return $this->quotes[$key];
    }

    private $quotes = [
        "1 1",
        "2 2",
        "3 3",
    ];
}
