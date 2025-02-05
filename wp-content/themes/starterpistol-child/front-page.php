<?php
/**
 * The template for displaying Home Page
 * Template Name: Home Page
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package StarterPistol
 */

get_header(); ?>

<?php get_template_part('template-parts/hero'); ?>

<?php get_template_part('template-parts/section-about'); ?>

<?php get_template_part('template-parts/section-products'); ?>

<?php get_template_part('template-parts/section-testimonials'); ?>

<?php get_template_part('template-parts/section-blogs-home'); ?>

<?php get_template_part('template-parts/section-contact'); ?>

<?php get_template_part('template-parts/pre-footer'); ?>

<?php

get_footer();
