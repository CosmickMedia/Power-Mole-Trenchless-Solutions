<form class="search-form" role="search" action="<?php // echo home_url('/') ?>">
    <div class="input-group">
        <input type="text" name="s" value="<?php //echo get_search_query() ?>" class="form-control bt-search-field" placeholder="Search the entire site" />
        <input type="hidden" name="post_type" value="any" /> 
        <input type="hidden" name="post_status" value="publish" />
        <input type="hidden" name="orderby" value="relevance" />

        <span class="input-group-btn">
            <button class="button button--accent-color" type="submit"><i class="fas fa-search"></i></button>
        </span>
    </div>
</form>

<?php // if ( function_exists( 'aws_get_search_form' ) ) { aws_get_search_form(); } ?>