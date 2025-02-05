<div class="pre-footer">
  <div class="l-constrain">
    <div class="columns">
	    <div class="column-fourths has-logo">
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
			
			<p><small>For more than six decades, Power Mole Trenchless Solutions has been manufacturing Power Mole Trenchless Equipment.</small></p>
			
			<p><small><strong>All Power Mole manufactured products are built in the USA.</strong></small></p>
	    </div>
	    <div class="column-fourths">
			<h3>Quick Links</h3>
	    	<?php get_template_part('template-parts/footer-links-menu'); ?>
	    </div>
		<div class="column-fourths">
			<h3>Products</h3>
	    	<?php get_template_part('template-parts/product-menu'); ?>
	    </div>
		<div class="column-fourths">
			<h3>Get In Touch</h3>
			<?php get_template_part('template-parts/locations'); ?>

			<a href="tel:<?php echo esc_html(get_field('phone', 'options')); ?>"><?php echo esc_html(get_field('phone', 'options')); ?></a>
			
	    	<?php get_template_part('template-parts/social-media-footer'); ?>
	    </div>
    </div>
  </div>
</div>