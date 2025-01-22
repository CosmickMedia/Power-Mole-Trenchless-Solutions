<?php
# Package: loop-product
# TODO : 

# Get variable(s)
global $product, $wc_petkey_settings;

# Set variable(s)
$product_name = [];
$product_id = $product->get_id();
$product_short_desc = $product->get_short_description();
$product_image = $product->get_image( 'large', [ 'class' => 'object-fit-cover', 'alt' => $product_short_desc ] );
$breed_name = wc_get_product_category_list( $product_id, ', ', '', '' );
$link = $product->get_permalink();
$location = apply_filters( 'woocommerce_product_maybe_location', false, $product );
$coming_soon = apply_filters( 'woocommerce_product_coming_soon', false, $product );
$status = $product->get_meta( 'status' );
$ref_id = $product->get_meta( 'reference_number' );
$birth_date = $product->get_meta( 'birth_date' );
$gender = $product->get_attribute( 'pa_gender' );
$location_name = $product->get_attribute( 'pa_organization' );
// $location_phone = $wc_petkey_settings->location_phone;
// $location_slug = $location['populate_locations']['value'] ?? array_key_first( $location_phone );

// # Validate variable(s)
// if ( $breed_name ) {
// 	$breed_name = str_replace( ' href="', ' class="text-reset" href="', $breed_name );
// }

# Validate variable(s)
if ( $gender ) {
	$product_name[] = $gender;
}

# Validate variable(s)
if ( $ref_id ) {
	$product_name[] = sprintf( 'Ref ID: %s', $ref_id );
}

# Validate variable(s)
if ( empty( $product_name ) ) {
	$product_name[] = $product->get_name();
}
?>
<div class="single-puppy is-<?= implode( ' - ', $product_name ) ?> border border-black rounded-1 overflow-hidden status-<?= strToLower( $status ) ?>">
	<div class="media">
		<a href="<?= $link ?>" class="stretched-link text-reset">
			<?= $product_image ?>

			<div class="d-flex align-items-start justify-content-between p-2">
				<?php if ( $coming_soon ) : ?>
				<span class="badge shadow text-bg-primary text-uppercase">Coming Soon</span>
				<?php endif ?>
				<?php woocommerce_show_product_loop_sale_flash() ?>
			</div>
		</a>
	</div>
	<div class="content">
		<div class="inner columns columns--vertical-center">
			<div class="column-half">
				<h2><?php the_title(); ?></h2>
				<h3><?= $breed_name ?></h3>
			</div>
			<div class="column-half">
				<?php if ( defined( 'YITH_WCWL' ) ) : ?>
				<div class="position-relative" style="z-index: 2;"><?= do_shortcode( '[yith_wcwl_add_to_wishlist]' ) ?></div>
				<?php endif ?>
				
				<span class="single-puppy__gender is-<?= implode( ' - ', $product_name ) ?>"><?= implode( ' - ', $product_name ) ?></span>
			</div>
		</div>
		
		<?php get_template_part('template-parts/finance-banner'); ?>
		
		<div class="single-puppy__phone">
			Call <a href="tel:727-216-6110">(727)216-6110</a> to Reserve Now!
		</div>
		
		<div class="content--secondary columns columns--vertical-center">
			<div class="column-half content">
				<p class="availability"><?php the_field('availability'); ?></p>
			</div>
			<div class="column-half media columns">
				<a href="<?= $link ?>" class="button button--primary-color">Details</a>
			</div>
		</div>
	</div>
</div>
