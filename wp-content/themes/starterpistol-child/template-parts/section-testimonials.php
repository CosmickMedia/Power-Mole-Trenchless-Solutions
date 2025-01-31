<?php
$args = array(
    'post_type'      => 'testimonials', 
    'posts_per_page' => -1,             
    'post_status'    => 'publish',      
    'orderby'        => 'date',      
    'order'          => 'DESC'        
);

$testimonials_query = new WP_Query($args);
?>

<div class="section section--testimonials">
	<div class="l-constrain">
		<h2>What Our Clients Are Saying</h2>
		<a href="#" class="button button--secondary-color button--small">View All Reviews</a>
		
		<?php if ($testimonials_query->have_posts()) : ?>
		<div class="glide" id="carousel-testimonial">
			<div class="glide__track" data-glide-el="track">
				<ul class="glide__slides">
					<?php while ($testimonials_query->have_posts()) : $testimonials_query->the_post(); ?>
						<li class="glide__slide">
							<div class="content"><?php the_content(); ?></div>
							<p class="rating"><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span></p>
							<h3><?php the_title(); ?></h3>
							<?php if(get_field('testimonial_position') || get_field('testimonial_company_name')) : ?>
								<?php if(get_field('testimonial_position')) : ?>
								<p class="testimonial-info"><?php echo esc_html(get_field('testimonial_position')); ?></p>
								<?php endif; ?>
								<?php if(get_field('testimonial_company_name')) : ?>
								<p class="testimonial-info"><?php echo esc_html(get_field('testimonial_company_name')); ?></p>
								<?php endif; ?>
							<?php endif; ?>
						</li>
					<?php endwhile; wp_reset_postdata(); ?>
				</ul>
			</div>
			<div class="glide__arrows" data-glide-el="controls">
				<button class="glide__arrow glide__arrow--left" data-glide-dir="<"></button>
				<button class="glide__arrow glide__arrow--right" data-glide-dir=">"></button>
			</div>
		</div>
		<?php else : ?>
		<p>No testimonials found.</p>
		<?php endif; ?>
	</div>
</div>