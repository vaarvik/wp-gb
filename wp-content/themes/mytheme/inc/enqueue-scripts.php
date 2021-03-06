<?php

/**
 * Register and Enqueue Scripts.
 */
function mytheme_register_scripts() {

	wp_enqueue_script( 'mytheme-vendor-js', mytheme_asset_url( 'assets/js/vendors.js' ), array(), THEME_VERSION, true );
	wp_enqueue_script( 'mytheme-js', mytheme_asset_url( 'assets/js/customs.js' ), array( 'mytheme-vendor-js' ), THEME_VERSION, true );

	if( is_single() && get_post_type() === "post" )
		wp_enqueue_script( 'mytheme-single-post-js', mytheme_asset_url( 'assets/js/single-post.js' ), array( 'mytheme-vendor-js' ), THEME_VERSION, true );

}

add_action( 'wp_enqueue_scripts', 'mytheme_register_scripts' );


/**
 * Register and Enqueue Scripts in editor.
 */
function mytheme_editor_scripts() {

	wp_enqueue_script( "mytheme-gutenberg-js", mytheme_asset_url( 'assets/js/gutenberg.js' ), array( 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' ), THEME_VERSION );
	wp_enqueue_script( "mytheme-mt-meta-fields-js", mytheme_asset_url( 'assets/js/mt-meta-fields.js' ), array( ), THEME_VERSION, true );

}

add_action( "enqueue_block_editor_assets", "mytheme_editor_scripts" );

/**
 * Fix skip link focus in IE11.
 *
 * This does not enqueue the script because it is tiny and because it is only for IE11,
 * thus it does not warrant having an entire dedicated blocking script being loaded.
 *
 * @link https://git.io/vWdr2
 */
function mytheme_skip_link_focus_fix() {
	// The following is minified via `terser --compress --mangle -- assets/js/skip-link-focus-fix.js`.
	?>
	<script>
	/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var t,e=location.hash.substring(1);/^[A-z0-9_-]+$/.test(e)&&(t=document.getElementById(e))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())},!1);
	</script>
	<?php
}

add_action( 'wp_print_footer_scripts', 'mytheme_skip_link_focus_fix' );
