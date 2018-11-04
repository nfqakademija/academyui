<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin")
 * @Security("is_granted('ROLE_ADMIN')")
 */
class AdminController extends AbstractController
{
    /**
     * @Route("/", name="admin_home")
     */
    public function index()
    {
        return $this->render('admin/index.html.twig', [

        ]);
    }

    /**
     * @Route("/test", name="admin_test")
     */
    public function test()
    {
        return $this->render('admin/test.html.twig', [

        ]);
    }
}
