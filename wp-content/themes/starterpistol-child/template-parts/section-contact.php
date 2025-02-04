<div class="section section--contact">
	<div class="l-constrain">
		<div class="columns">
			<div class="column-half content">
				<div class="inner">
					<h3>Contact us today to learn more about our trenchless supplies.</h3>
					
					<?php get_template_part('template-parts/locations'); ?>
					
					<ul class="phone-numbers">
						<li><label>Phone:</label> <a href="tel:<?php echo esc_html(get_field('phone', 'options')); ?>"><?php echo esc_html(get_field('phone', 'options')); ?></a></li>
						<li><label>Local:</label> <a href="tel:<?php echo esc_html(get_field('phone', 'options')); ?>"><?php echo esc_html(get_field('phone_local', 'options')); ?></a></li>
						<li><label>Fax:</label> <a href="tel:<?php echo esc_html(get_field('phone', 'options')); ?>"><?php echo esc_html(get_field('phone_fax', 'options')); ?></a></li>
					</ul>
					
					<div class="ctas">
						<a href="#" class="button button--accent-color">Become a Dealer</a>
						<a href="<?php echo esc_html(get_field('phone', 'options')); ?>" class="button button--secondary-color">Call <?php echo esc_html(get_field('phone', 'options')); ?></a>
					</div>
				</div>
			</div>
			<div class="column-half media">
				<h3>Get In Touch</h3>
				
				<?php echo do_shortcode('[gravityform id="1" title="false" description="false" ajax="true"]'); ?>
			</div>
		</div>
	</div>
</div>