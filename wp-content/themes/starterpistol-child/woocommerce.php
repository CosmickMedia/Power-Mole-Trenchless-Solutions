<?php
/**
 * Template Name: Woocommerce
 * Description: The template for standard product pages
 */

global $product;
	
get_header(); ?>

<?php if(is_product()) : ?>
<?php get_template_part('template-parts/hero-internal'); ?>

<?php get_template_part('template-parts/section-product-features'); ?>
<?php endif; ?>

<div class="page__content">
    <div class="l-constrain">
        <?php if(is_product_category()) : ?>
            <div class="page__title">
                <h1><?php single_term_title(); ?></h1>
            </div>
		
            <?php
            // Check if the current category has child categories
            $term_id = get_queried_object_id();
            $child_categories = get_terms( array(
                'taxonomy' => 'product_cat',
                'parent'   => $term_id,
            ) );
            if (!empty($child_categories)) {
                foreach ($child_categories as $cat) {
                    $thumbnail_url = "";
                    // Get the thumbnail URL for each category
                    $thumbnail_id = get_term_meta( $cat->term_id, 'thumbnail_id', true );
                    if(!empty($thumbnail_id)){
                        $category_img  = wp_get_attachment_image_src( $thumbnail_id, 'full' );
                        $thumbnail_url = !empty($category_img[0]) ? $category_img[0] : ""; // Get the URL
                    }
                    // If a featured image is not set, use a default placeholder
                    if ( empty( $thumbnail_url ) ) {
                        $thumbnail_url = '/wp-content/uploads/2024/02/placeholder.jpg';
                    }
                    ?>
                    <a class="product-item" href="<?php echo esc_url( get_term_link( $cat->slug, 'product_cat' ) ); ?>">
                        <div class="columns columns--vertical-center">
                            <div class="column-thirds content">
                                <div class="inner">
                                    <h2 class="category__title"><?php echo esc_html( $cat->name ); ?></h2>
                                    <?php 
                                    $category_description = $cat->description;
                                    if ( ! empty( $category_description ) ) {
                                        echo '<p class="category__description">' . esc_html( $category_description ) . '</p>';
                                    }
                                    ?>
									
									<p class="category__link-text">Explore <?php echo esc_html( $cat->name ); ?></p>
									
                                </div>
                            </div>
                            <div class="column-two-thirds media" style="background-image: url(<?php echo esc_url( $thumbnail_url ); ?>)">

                            </div>
                        </div>
                    </a>
                    <?php
                }
            } else {
                // If there are no sub-categories, display products for the current category
                woocommerce_product_loop_start();
                if ( have_posts() ) {
                    while ( have_posts() ) {
                        the_post();
                        wc_get_template_part( 'content', 'product' );
                    }
                } else {
                    echo '<p>No products are available for this sub-category.</p>';
                }
                woocommerce_product_loop_end();
            }
            ?>
        <?php elseif(is_product()) : ?>
            <div class="inner">
                <div class="l-constrain">
					
					<?php // woocommerce_content(); ?>
					
					<?php get_template_part('template-parts/section-long-description'); ?>
					
                </div>
            </div>
        <?php else : ?>
            <?php
            // This part is for the parent categories
            $args = array(
                'taxonomy'     => 'product_cat',
                'orderby'      => 'name',
                'parent'       => 0, // Only fetch parent categories
                'hide_empty'   => false,
                'exclude'      => array( '20' ),
            );

            $parent_categories = get_categories( $args );

            if (empty($parent_categories)) {
                echo '<p>No products of this category is available at this moment.</p>';
            } else {
                foreach ($parent_categories as $cat) {

                    $thumbnail_url = "";
                    // Get the thumbnail URL for each category
                    $thumbnail_id = get_term_meta( $cat->term_id, 'thumbnail_id', true );
                    if(!empty($thumbnail_id)){
                        $category_img  = wp_get_attachment_image_src( $thumbnail_id, 'full' );
                        $thumbnail_url = !empty($category_img[0]) ? $category_img[0] : ""; // Get the URL
                    }
                    // If a featured image is not set, use a default placeholder
                    if ( empty( $thumbnail_url ) ) {
                        $thumbnail_url = '/wp-content/uploads/2024/02/placeholder.jpg';
                    }
                    ?>
                    <a class="product-item" href="<?php echo esc_url( get_term_link( $cat->slug, 'product_cat' ) ); ?>">
                        <div class="columns columns--vertical-center">
                            <div class="column-thirds content">
                                <div class="inner">
                                    <h2 class="category__title"><?php echo esc_html( $cat->name ); ?></h2>
                                    <?php 
                                    $category_description = $cat->description;
                                    if ( ! empty( $category_description ) ) {
                                        echo '<p class="category__description">' . esc_html( $category_description ) . '</p>';
                                    }
                                    ?>
									
									<p class="category__link-text">Explore <?php echo esc_html( $cat->name ); ?></p>
                                </div>
                            </div>
                            <div class="column-two-thirds media" style="background-image: url(<?php echo esc_url( $thumbnail_url ); ?>)">

                            </div>
                        </div>
                    </a>
                    <?php
                }
            }
            ?>
        <?php endif; ?>
    </div>
</div>

<?php
get_footer();
?>
