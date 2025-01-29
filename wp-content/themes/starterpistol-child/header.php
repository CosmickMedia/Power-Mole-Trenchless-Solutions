<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
	
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'starterpistol' ); ?></a>
	<div id="backtotop"></div>
	
	<?php get_template_part('template-parts/message-bar'); ?>
	
	<header id="masthead" class="site-header columns columns--vertical-center">
		<div class="column-fourth has-logo">
			<?php get_template_part('template-parts/mobile-menu'); ?>
		
			<?php if(is_front_page()) : ?>
			<div class="site-logo">
				<?php 
					$custom_logo = get_custom_logo();
					$image_path_filename = get_stylesheet_directory_uri().'/images/PMTS_Logo_left_white.svg';
				?>

				<?php if ($custom_logo) : ?>
				<a href="<?php echo home_url(); ?>"><?php the_custom_logo(); ?></a>
				<?php elseif($image_path_filename && file_exists( get_stylesheet_directory().'/images/PMTS_Logo_left_white.svg') ) : ?>
				<a href="<?php echo home_url(); ?>"><img src="<?php echo $image_path_filename; ?>"></a>
				<?php else : ?>
				<a href="<?php echo home_url(); ?>"><?php echo get_option('blogname'); ?></a>
				<?php endif; ?>
			</div>
			<?php else : ?>
			<div class="site-logo">
				<?php 
					$custom_logo = get_custom_logo();
					$image_path_filename = get_stylesheet_directory_uri().'/images/PMTS_Logo_left.svg';
				?>

				<?php if ($custom_logo) : ?>
				<a href="<?php echo home_url(); ?>"><?php the_custom_logo(); ?></a>
				<?php elseif($image_path_filename && file_exists( get_stylesheet_directory().'/images/PMTS_Logo_left.svg') ) : ?>
				<a href="<?php echo home_url(); ?>"><img src="<?php echo $image_path_filename; ?>"></a>
				<?php else : ?>
				<a href="<?php echo home_url(); ?>"><?php echo get_option('blogname'); ?></a>
				<?php endif; ?>
			</div>
			<?php endif; ?>
		</div>
		
		<div class="column-half has-navigation">
			<?php get_template_part('template-parts/navigation'); ?>
		</div>
		
		<div class="column-fourth has-contact">
			<div class="site-search">
				<a href="#" class="site-search__icon"><i class="fas fa-search"></i></a>
			</div>
			
			<a href="tel:<?php the_field('phone', 'options'); ?>" class="site-contact">
				<label>Call Now For a Quote!</label>
				<p class="phone"><?php the_field('phone', 'options'); ?></p>
			</a>
		</div>
	</header><!-- #masthead -->
	
	<div class="site-search__box">
		<?php get_search_form(); ?>
	</div>

	<div id="content" class="site-content">

