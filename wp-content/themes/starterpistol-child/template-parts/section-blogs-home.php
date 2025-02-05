<?php
$args = array(
    'post_type'      => 'post', 
    'posts_per_page' => 2,             
    'post_status'    => 'publish',      
    'orderby'        => 'date',      
    'order'          => 'DESC'        
);

$blogs_query = new WP_Query($args);


$coming_soon_image = get_stylesheet_directory_uri().'/images/image-coming-soon.jpg';
?>

<div class="section section--blogs">
    <div class="l-constrain">
        <div class="section-head columns columns--vertical-center">
            <div class="column-half media">
                <p class="pre-heading">From the Blog</p>
                <h2>Latest <span>Industry Insights</span></h2>
                <a href="#" class="button button--secondary-color button--small">View All Blogs</a>
            </div>
            <div class="column-half content">
                <p>Power Mole Trenchless Solutions aims to be your number one source for the latest news and breakthroughs in the trenchless equipment industry.</p>
            </div>
        </div>

        <div class="columns">
            <?php if ($blogs_query->have_posts()) : ?>
                <?php while ($blogs_query->have_posts()) : $blogs_query->the_post(); ?>
                    <div class="column-half blog-item blog-item--related">
                        <div class="media">
                            <?php if (has_post_thumbnail()) : ?>
                                <a class="image" href="<?php the_permalink(); ?>">
                                    <img src="<?php echo get_the_post_thumbnail_url($post->ID, 'full'); ?>" alt="<?php the_title_attribute(); ?>">
                                </a>
                            <?php else : ?>
                                <a class="image" href="<?php the_permalink(); ?>">
                                    <img src="<?php echo $coming_soon_image; ?>" alt="Image coming soon">
                                </a>
                            <?php endif; ?>
                        </div>
                        <div class="content">
                            <div class="blog__meta">
                                <span class="date"><?php the_time('F j, Y'); ?></span> | 
                                <span class="categories">Categories: <?php the_category(', '); ?></span>
                            </div>  
                            <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                            <a href="<?php the_permalink(); ?>" class="learn-more">Read More</a>
                        </div>
                    </div>
                <?php endwhile; ?>
                <?php wp_reset_postdata(); // Reset the query ?>
            <?php else : ?>
                <p>No blog posts found.</p>
            <?php endif; ?>
        </div>
    </div>
</div>
