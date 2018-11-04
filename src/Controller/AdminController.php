<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\Product;
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
     * @Route("/reviews/show", name="admin_reviews_show")
     */
    public function showReviews()
    {
        //$reviews = $this->getDoctrine()
        //    ->getRepository('App:Review')
        //    ->findAll();

        $reviews = $this->getDoctrine()
            ->getRepository('App:User')
            ->findAll();

        var_dump($reviews);

        return $this->render('admin/reviews/show.html.twig', [
            'reviews' => '$reviews',
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
