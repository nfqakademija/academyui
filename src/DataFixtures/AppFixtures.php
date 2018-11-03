<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{

    /**
     * @var UserPasswordEncoderInterface
     */
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function load(ObjectManager $manager)
    {
        $user = new User();
        $user->setEmail('programeriss@gmail.com');
        $user->setFirstName('Aidas');
        $user->setLastName('Eglinskas');
        $user->setRoles([User::ROLE_ADMIN]);
        $user->setPassword(
            $this->passwordEncoder->encodePassword(
                $user,
                'admin'
            )
        );

        $manager->persist($user);

        $manager->flush();
    }
}