<?php
	$pmts_logo = get_stylesheet_directory_uri().'/images/PMTS-Mole-Only.svg';
?>

<div class="section section--cta">
	<div class="inner">
		<div class="columns columns--vertical-center">
			<div class="column-half media columns">
				<img src="<?php echo $pmts_logo; ?>">
				<h2>Ready to <span>upgrade</span> your trenchless equipment?</h2>
			</div>
			<div class="column-half content">
				<p>Pow-R Mole Trenchless offers top quality products designed to solve even the most complex trench and pipeline problems.</p>

				<div class="button-group">
					<a href="#" class="button button--accent-color button--small">Become a Dealer</a>
					<a href="tel:<?php echo esc_html(the_field('phone', 'options')); ?>" class="button button--invert button--small">Call <?php echo esc_html(the_field('phone', 'options')); ?></a>
				</div>
			</div>
		</div>
	</div>
</div>