<?php
use Carbon_Fields\Field;
use Carbon_Fields\Container;

require('inc/func.inc.php');
require('inc/endpoints.inc.php');
require('inc/callbacks.inc.php');
// require('inc/filterproducts.inc.php');
// require('inc/filter-job-offers.inc.php');

$editorCanAddAndRemovePages = false; // !!! may take 2 reloads for changes to take effect !!!
$editorCanAddAndRemovePosts = true; // !!! may take 2 reloads for changes to take effect !!!

$carbonFieldsArgs = array();
$websiteOptions = array();
// $websiteOptions[] = array('text', 'header_big', 'Website kop tekst GROOT');
$websiteOptions[] = array('separator', 'separator1', 'One-pager titel/omschrijving');
$websiteOptions[] = array('text', 'meta_title', 'Homepage pagina titel (<title>)');
$websiteOptions[] = array('text', 'meta_description', 'Homepage pagina omschrijving (<meta name="description">)');
// $websiteOptions[] = array('separator', 'separator2', 'Social Media Pakketten');
// $websiteOptions[] = array('separator', 'separator2_1', 'Pakket 1');
// $websiteOptions[] = array('text', 'package1_title', 'Pakket 1 titel');
// $websiteOptions[] = array('rich_text', 'package1_text', 'Pakket 1 tekst');
// $websiteOptions[] = array('text', 'package1_price', 'Pakket 1 prijs');
// $websiteOptions[] = array('text', 'package1_link', 'Pakket 1 link');
$websiteOptions[] = array('separator', 'separator3', 'Global texts');
$websiteOptions[] = array('text', 'subscribe_text', 'Aanmelden tekst');
$websiteOptions[] = array('separator', 'separator7', 'Social Media Links');
$websiteOptions[] = array('text', 'facebook', 'Facebook link');
$websiteOptions[] = array('text', 'linkedin', 'LinkedIn link');
$websiteOptions[] = array('text', 'instagram', 'Instagram link');
// $websiteOptions[] = array('text', 'twitter', 'Twitter link');
$websiteOptions[] = array('separator', 'separator4', 'Form messages');
$websiteOptions[] = array('text', 'form_subscription_success', 'Nieuwsbrief aanmeld formulier succes melding');
$websiteOptions[] = array('text', 'form_schedulecall_success', 'Maak een afspraak formulier succes melding');
// $websiteOptions[] = array('text', 'form_error', 'Formulier error melding');
$websiteOptions[] = array('separator', 'separator5', 'Training detailpagina formulier settings');
$websiteOptions[] = array('text', 'training_form_title', 'Formulier titel');
$websiteOptions[] = array('rich_text', 'training_form_text', 'Formulier text');
$websiteOptions[] = array('text', 'training_form_email', 'Formulier E-mail adres');
$websiteOptions[] = array('text', 'training_form_success', 'Formulier succes melding');
// $websiteOptions[] = array('textarea', 'wt_website_textarea1', 'Website textarea 1');
// $websiteOptions[] = array('office_assoc', 'footer_office_1', 'Footer office 1');
// $websiteOptions[] = array('office_assoc', 'footer_office_2', 'Footer office 2');
// $websiteOptions[] = array('rich_text', 'footer_tekst_3', 'Footer blok 3 tekst');
// $websiteOptions[] = array('rich_text', 'footer_tekst_2', 'Footer tekst rechts');
// $websiteOptions[] = array('file', 'wt_algemene_voorwaarden', 'Algemene voorwaarden');
// $websiteOptions[] = array('image', 'header_image', 'Header afbeelding');
// $websiteOptions[] = array('separator', 'separator6', 'Logo\'s en afbeeldingen');
// $websiteOptions[] = array('media_gallery', 'working_with', 'Partner logo\'s');
// $websiteOptions[] = array('separator', 'separator6', 'Statistieken');
// $websiteOptions[] = array('text', 'happy_clients', 'Tevreden klanten (web development dienstenpagina)');
// $websiteOptions[] = array('text', 'total_projects', 'Aantal projecten (web development dienstenpagina)');
// $websiteOptions[] = array('media_gallery', 'events', 'Events');
$carbonFieldsArgs['websiteOptions'] = $websiteOptions;

add_action('init', 'remove_editor_init'); // put this in comment when using a plugin, so the embed-code can be placed in the default editor (Default template)

add_action( 'init', 'create_posttype_blog' );
add_action( 'init', 'create_posttype_case' );
add_action( 'init', 'create_posttype_training' );
// add_action( 'init', 'create_posttype_review' );
add_action( 'init', 'create_posttype_teammember' );
add_action( 'init', 'create_posttype_faq' );
add_action( 'init', 'create_posttype_partner' );
// add_action( 'init', 'create_posttype_professionals' );
add_action( 'init', 'register_taxonomy_training_category' );

// add_filter( 'manage_case_posts_columns', 'set_custom_case_columns' );
// add_action( 'manage_case_posts_custom_column' , 'custom_case_column', 10, 2 );



// function set_custom_case_columns($columns) {
//     // unset( $columns['author'] );
//     $columns['highlighted_on_homepage'] = __( 'Highlighted', 'highlighted' );
//     // $columns['publisher'] = __( 'Publisher', 'your_text_domain' );
//     return $columns;
// }
// function custom_case_column( $column, $post_id ) {
//     switch ( $column ) {
//         case 'highlighted_on_homepage' :
//             // $terms = get_the_term_list( $post_id , 'book_author' , '' , ',' , '' );
//             $highlighted = carbon_get_post_meta( $post_id, 'highlighted' );
//             // if ( is_string( $terms ) )
//                 echo ($highlighted?'Yes':'');
//             // else
//                 // _e( 'Unable to get author(s)', 'your_text_domain' );
//             break;

//     }
// }

// Our custom post type function
function create_posttype_blog() {
    register_post_type( 'blog',
        array(
            'labels' => array(
                'name' => __( 'Blog' ),
                'singular_name' => __( 'Blog' ),
                'add_new_item' => __( 'Add New Blog-item' ),
                'add_new' => __( 'Add New Blog-item' ),
                'edit_item' => __( 'Edit Blog-item' ),
                'update_item' => __( 'Update Blog-item' ),
            ),
            'public' => true,
            // 'has_archive' => true,
            // 'rewrite' => array('slug' => 'movies'),
            'show_in_rest' => true,
            // 'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
            'supports'            => array( 'title'),
            )
    );
}
function create_posttype_case() {
    register_post_type( 'case',
        array(
            'labels' => array(
                'name' => __( 'Cases' ),
                'singular_name' => __( 'Case' ),
                'add_new_item' => __( 'Add New Case' ),
                'add_new' => __( 'Add New Case' ),
                'edit_item' => __( 'Edit Case' ),
                'update_item' => __( 'Update Case' ),
            ),
            'public' => true,
            // 'has_archive' => true,
            // 'rewrite' => array('slug' => 'movies'),
            'show_in_rest' => true,
            // 'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
            'supports'            => array( 'title'),
            )
    );
}
function create_posttype_training() {
    register_post_type( 'training',
        array(
            'labels' => array(
                'name' => __( 'Trainings' ),
                'singular_name' => __( 'Training' ),
                'add_new_item' => __( 'Add New Training' ),
                'add_new' => __( 'Add New Training' ),
                'edit_item' => __( 'Edit Training' ),
                'update_item' => __( 'Update Training' ),
            ),
            'public' => true,
            // 'has_archive' => true,
            // 'rewrite' => array('slug' => 'movies'),
            'show_in_rest' => true,
            // 'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
            'supports'            => array( 'title'),
            )
    );
}
function create_posttype_review() {
    register_post_type( 'review',
        array(
            'labels' => array(
                'name' => __( 'Reviews' ),
                'singular_name' => __( 'Review' ),
                'add_new_item' => __( 'Add New Review' ),
                'add_new' => __( 'Add New Review' ),
                'edit_item' => __( 'Edit Review' ),
                'update_item' => __( 'Update Review' ),
            ),
            'public' => true,
            // 'has_archive' => true,
            // 'rewrite' => array('slug' => 'movies'),
            'show_in_rest' => true,
            // 'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
            'supports'            => array( 'title'),
            )
    );
}
function create_posttype_teammember() {
    register_post_type( 'teammember',
        array(
            'labels' => array(
                'name' => __( 'Team members' ),
                'singular_name' => __( 'Team member' ),
                'add_new_item' => __( 'Add New Team member' ),
                'add_new' => __( 'Add New Team member' ),
                'edit_item' => __( 'Edit Team member' ),
                'update_item' => __( 'Update Team member' ),
            ),
            'public' => true,
            // 'has_archive' => true,
            // 'rewrite' => array('slug' => 'movies'),
            'show_in_rest' => true,
            // 'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
            'supports'            => array( 'title'),
            )
    );
}
function create_posttype_partner() {
    register_post_type( 'partner',
        array(
            'labels' => array(
                'name' => __( 'Partners' ),
                'singular_name' => __( 'Partner' ),
                'add_new_item' => __( 'Add New Partner' ),
                'add_new' => __( 'Add New Partner' ),
                'edit_item' => __( 'Edit Partner' ),
                'update_item' => __( 'Update Partner' ),
            ),
            'public' => true,
            // 'has_archive' => true,
            // 'rewrite' => array('slug' => 'movies'),
            'show_in_rest' => true,
            // 'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
            'supports'            => array( 'title'),
            )
    );
}
function create_posttype_faq() {
    register_post_type( 'faq',
        array(
            'labels' => array(
                'name' => __( 'FAQs' ),
                'singular_name' => __( 'FAQ' ),
                'add_new_item' => __( 'Add New FAQ' ),
                'add_new' => __( 'Add New FAQ' ),
                'edit_item' => __( 'Edit FAQ' ),
                'update_item' => __( 'Update FAQ' ),
            ),
            'public' => true,
            // 'has_archive' => true,
            // 'rewrite' => array('slug' => 'movies'),
            'show_in_rest' => true,
            // 'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
            'supports'            => array( 'title'),
            )
    );
}
// function create_posttype_offices() {
//     register_post_type( 'office',
//         array(
//             'labels' => array(
//                 'name' => __( 'Offices' ),
//                 'singular_name' => __( 'Office' ),
//                 'add_new_item' => __( 'Add New Office' ),
//                 'add_new' => __( 'Add New Office' ),
//                 'edit_item' => __( 'Edit Office' ),
//                 'update_item' => __( 'Update Office' ),
//             ),
//             'public' => true,
//             // 'has_archive' => true,
//             // 'rewrite' => array('slug' => 'movies'),
//             'show_in_rest' => true,
//             // 'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
//             'supports'            => array( 'title'),
//             )
//     );
// }
// function create_posttype_professionals() {
//     register_post_type( 'professional',
//         array(
//             'labels' => array(
//                 'name' => __( 'Professionals' ),
//                 'singular_name' => __( 'Professional' ),
//                 'add_new_item' => __( 'Add New Professional' ),
//                 'add_new' => __( 'Add New Professional' ),
//                 'edit_item' => __( 'Edit Professional' ),
//                 'update_item' => __( 'Update Professional' ),
//             ),
//             'public' => true,
//             // 'has_archive' => true,
//             // 'rewrite' => array('slug' => 'movies'),
//             'show_in_rest' => true,
//             // 'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
//             'supports'            => array( 'title'),
//             )
//     );
// }
function register_taxonomy_training_category() {
    $labels = array(
        'name'              => _x( 'Categories', 'taxonomy general name' ),
        'singular_name'     => _x( 'Category', 'taxonomy singular name' ),
        'search_items'      => __( 'Search Categories' ),
        'all_items'         => __( 'All Categories' ),
        'parent_item'       => __( 'Parent Category' ),
        'parent_item_colon' => __( 'Parent Category:' ),
        'edit_item'         => __( 'Edit Category' ),
        'update_item'       => __( 'Update Category' ),
        'add_new_item'      => __( 'Add New Category' ),
        'new_item_name'     => __( 'New Category Name' ),
        'menu_name'         => __( 'Categories' ),
    );
    $args   = array(
        'hierarchical'      => true, // make it hierarchical (like categories)
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'show_in_rest'      => true,
        'query_var'         => true,
        // 'rewrite'           => [ 'slug' => 'case_category' ],
    );
    register_taxonomy( 'training_category', [ 'training' ], $args );
}

$editor = get_role('editor');
$capabilities_pages = array(
    'delete_others_pages',
    'delete_pages',
    'delete_private_pages',
    'delete_published_pages',
    'publish_pages',
);
$capabilities_posts = array(
    'delete_others_posts',
    'delete_posts',
    'delete_private_posts',
    'delete_published_posts',
    'publish_posts',
);
if($editorCanAddAndRemovePages && !$editor->has_cap('delete_pages')) {
    function change_editor_capabilities1($role, $caps) {
        foreach($caps as $cap) $role->add_cap($cap);
    }
    add_action( 'wt_cap_action', 'change_editor_capabilities1', 10, 2);
    do_action( 'wt_cap_action', $editor, $capabilities_pages );
}
if(!$editorCanAddAndRemovePages && $editor->has_cap('delete_pages')) {
    function change_editor_capabilities2($role, $caps) {
        foreach($caps as $cap) $role->remove_cap($cap);
    }
    add_action( 'wt_cap_action', 'change_editor_capabilities2', 10, 2);
    do_action( 'wt_cap_action', $editor, $capabilities_pages );
}


if($editorCanAddAndRemovePosts && !$editor->has_cap('delete_posts')) {
    function change_editor_capabilities3($role, $caps) {
        foreach($caps as $cap) $role->add_cap($cap);
    }
    add_action( 'wt_cap_action', 'change_editor_capabilities3', 10, 2);
    do_action( 'wt_cap_action', $editor, $capabilities_posts );
}
if(!$editorCanAddAndRemovePosts && $editor->has_cap('delete_posts')) {
    function change_editor_capabilities4($role, $caps) {
        foreach($caps as $cap) $role->remove_cap($cap);
    }
    add_action( 'wt_cap_action', 'change_editor_capabilities4', 10, 2);
    do_action( 'wt_cap_action', $editor, $capabilities_posts );
}

if (!current_user_can('administrator')) {

    if(!$editor->has_cap('delete_pages')) add_action('admin_footer', 'removePageActionsEditorRole');
    if(!$editor->has_cap('delete_posts')) add_action('admin_footer', 'removePostActionsEditorRole');

    

    add_filter('bulk_actions-edit-page', 'remove_from_bulk_actions');
    // add_filter('page_row_actions', 'remove_page_row_actions', 10, 2);
    
    // add_action('admin_head', 'customBackendStyles');
    

    add_action('admin_footer', 'customBackendScriptsEditorRol');
    add_filter('carbon_fields_theme_options_container_admin_only_access', '__return_false');
    add_filter('wp_rest_cache/settings_capability', 'wprc_change_settings_capability', 10, 1);

    add_action('admin_menu', 'remove_admin_menus' );
    add_action('init', 'remove_comment_support', 100);
    add_action('wp_before_admin_bar_render', 'remove_admin_bar_menus' );

    add_filter('contextual_help_list','contextual_help_list_remove');
    add_filter('screen_options_show_screen', 'remove_screen_options');
}

add_action('wp_before_admin_bar_render', 'add_admin_bar_menus' );

add_action('admin_enqueue_scripts', 'wt_admin_style');
function wt_admin_style() {
    wp_enqueue_style( 'admin-style', get_stylesheet_directory_uri() . '/css/wt.css' );
}

add_action('admin_footer', 'customBackendScripts');

add_action('add_meta_boxes', 'set_default_page_template', 1);
add_action('carbon_fields_register_fields', function() use ( $carbonFieldsArgs ) { crbRegisterFields( $carbonFieldsArgs ); });

// 28-8-2023. Leon Kuijf. Removed api-endpoint caching. Using Laravel Response Cache instead.
/*
add_action('carbon_fields_theme_options_container_saved', 'deleteWebsiteOptionsRestCache');
*/
// add_action('add_attachment', 'clearLaravelResponseCache');
// add_action('delete_attachment', 'clearLaravelResponseCache');
add_action('attachment_updated', 'clearLaravelResponseCache');
/*
add_action('create_term', 'deleteSimpleTaxonomiesRestCache');
add_action('edit_term', 'deleteSimpleTaxonomiesRestCache');
add_action('delete_term', 'deleteSimpleTaxonomiesRestCache');

add_action('save_post_page', 'deleteSimplePagesRestCache');
add_action('save_post_blog', 'deleteSimpleCustomPostsRestCacheBlog');
add_action('save_post_case', 'deleteSimpleCustomPostsRestCacheCase');
add_action('save_post_review', 'deleteSimpleCustomPostsRestCacheReview');
add_action('save_post_teammember', 'deleteSimpleCustomPostsRestCacheTeammember');
*/

// add_action('save_post_page', 'deleteAllPostRestCache');
// add_action('save_post_blog', 'deleteAllPostRestCache');
// add_action('save_post', 'deleteAllPostRestCache');

// add_action( 'pre_post_update', 'deleteAllPostRestCache', 10, 3 );
add_action('save_post', 'clearLaravelResponseCache');
add_action('carbon_fields_theme_options_container_saved', 'clearLaravelResponseCache');


// add_action('admin_head', 'loadAxios');
// function loadAxios() {
//     echo '<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.24.0/axios.min.js" integrity="sha512-u9akINsQsAkG9xjc1cnGF4zw5TFDwkxuc9vUp5dltDWYCSmyd0meygbvgXrlc/z7/o4a19Fb5V0OUE58J7dcyw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>';
// }
add_action('admin_head', 'customAdminCss');
function customAdminCss() {
    echo '
    <style>
        body {
            font-family: Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
        }
        /*
        #wpwrap {
            border-left: 5px solid #E7AC00;
        }
        #wp-toolbar {
            border-left: 5px solid #E7AC00;
            height: 32px;
        }
        */
    </style>';
}
function crbRegisterFields($args) {

    Container::make( 'post_meta', __( 'Page information' ) )
        ->where( 'post_type', '=', 'page' )
        ->where( 'post_template', '=', 'template-section-based.php' )
        ->add_tab( __('Page content'), array(
            Field::make( 'complex', 'crb_sections', 'Sections' )->set_visible_in_rest_api($visible = true)
                ->set_layout( 'tabbed-vertical' )
                ->add_fields( 'hero', 'Hero (big page header)', array(
                    Field::make( 'separator', 'separator1', __( 'Hero (big header)' ) ),
                    Field::make( 'media_gallery', 'crb_media_gallery', __( 'Media Gallery' ) )
                        ->set_type( array( 'image' ) )->set_duplicates_allowed( false ),
                    Field::make( 'checkbox', 'center_text', __( 'Center text' ) ),
                    Field::make( 'text', 'hero_title', __( 'Hero title (can use html-tags)' ) ),
                    // Field::make( 'text', 'small_header', __( 'Small header text (can use html-tags)' ) ),
                    Field::make( 'textarea', 'text', __( 'Text (can use html-tags)' ) ),
                    Field::make( 'text', 'btn_email', __( 'E-mail address (leave blank to remove the button)' ) ),
                    Field::make( 'text', 'btn_email_text', __( 'Text of the e-mail button' ) ),
                    Field::make( 'text', 'btn_phone', __( 'Phone number (leave blank to remove the button)' ) ),
                    // Field::make( 'checkbox', 'show_logo', __('Show Glomar Offshore logo') ),

                    // Field::make( 'image', 'image', 'Afbeelding' )->set_value_type( 'url' ),
                    // Field::make( 'select', 'color', __( 'Choose block letters color' ) )
                    // ->set_options( array(
                        // 'white' => __( 'White' ),
                        // 'black' => __( 'Black' ),
                    // ) ),
                    // Field::make( 'checkbox', 'show_reserve_button', __( 'Show reserve button' ) ),
                    // Field::make( 'image', 'image', 'Afbeelding' ),
                    // Field::make( 'rich_text', 'text', 'Tekst' ),
                ) )
                ->add_fields( '1column', 'Content', array(
                    Field::make( 'complex', 'fullwidth', 'Content' )
                        ->add_fields('tekst', array(
                            // Field::make( 'separator', 'separator1', __( 'Text' ) ),
                            Field::make( 'rich_text', 'text', 'Tekst' ),
                        ) )
                        ->add_fields('afbeelding', array(
                            // Field::make( 'separator', 'separator1', __( 'Image' ) ),
                            Field::make( 'image', 'image', 'Afbeelding' ),
                        ) )
                        ->add_fields('button', array(
                            Field::make( 'text', 'title', 'Titel' ),
                            Field::make( 'text', 'url', 'Link' ),
                        ) ),
                        // ->add_fields( 'services_buttons', 'Services buttons', array(
                        //     // Field::make( 'separator', 'separator1', __( 'Services' ) ),
                        //     Field::make( 'checkbox', 'show_services_buttons', __( 'Show services buttons' ) ),
                        // ) ),

                        // ->add_fields('bestand', array(
                        //     Field::make( 'file', 'file', 'Bestand' ),
                        //     Field::make( 'text', 'title', 'Titel' ),
                        // ) )
                        // ->add_fields('nieuws-items', array(
                        //     Field::make( 'association', 'news_associations', __( 'Select news items' ))
                        //     ->set_types( array(
                        //         array(
                        //             'type' => 'post',
                        //             'post_type' => 'news',
                        //         ),
                        //     ) )
                        // ) ),
                ) )
                ->add_fields( '2column', 'Content (2 kolommen)', array(
                    Field::make( 'select', 'column_direction', __( 'Column direction on mobile device' ) )
                    ->set_options( array(
                        'default' => __( 'Standaard' ),
                        'reverse' => __( 'Omgekeerd' ),
                    ) ),
                    Field::make( 'complex', 'left', 'Linker kolom' )
                        ->add_fields('tekst', array(
                            Field::make( 'rich_text', 'text', 'Tekst' ),
                        ) )
                        ->add_fields('afbeelding', array(
                            Field::make( 'image', 'image', 'Afbeelding' ),
                        ) )
                        ->add_fields('button', array(
                            Field::make( 'text', 'title', 'Titel' ),
                            Field::make( 'text', 'url', 'Link' ),
                        ) ),
                        // ->add_fields( 'services_buttons', 'Services buttons', array(
                        //     // Field::make( 'separator', 'separator1', __( 'Services' ) ),
                        //     Field::make( 'checkbox', 'show_services_buttons', __( 'Show services buttons' ) ),
                        // ) ),
                        // ->add_fields('bestand', array(
                        //     Field::make( 'file', 'file', 'Bestand' ),
                        //     Field::make( 'text', 'title', 'Titel' ),
                        // ) )
                        // ->add_fields('nieuws-items', array(
                        //     Field::make( 'association', 'news_associations', __( 'Select news items' ))
                        //     ->set_types( array(
                        //         array(
                        //             'type' => 'post',
                        //             'post_type' => 'news',
                        //         ),
                        //     ) )
                        // ) ),
                    Field::make( 'complex', 'right', 'Rechter kolom' )
                        ->add_fields('tekst', array(
                            Field::make( 'rich_text', 'text', 'Tekst' ),
                        ) )
                        ->add_fields('afbeelding', array(
                            Field::make( 'image', 'image', 'Afbeelding' ),
                        ) )
                        ->add_fields('button', array(
                            Field::make( 'text', 'title', 'Titel' ),
                            Field::make( 'text', 'url', 'Link' ),
                        ) ),
                        // ->add_fields( 'services_buttons', 'Services buttons', array(
                        //     // Field::make( 'separator', 'separator1', __( 'Services' ) ),
                        //     Field::make( 'checkbox', 'show_services_buttons', __( 'Show services buttons' ) ),
                        // ) ),
                        // ->add_fields('bestand', array(
                        //     Field::make( 'file', 'file', 'Bestand' ),
                        //     Field::make( 'text', 'title', 'Titel' ),
                        // ) )
                        // ->add_fields('nieuws-items', array(
                        //     Field::make( 'association', 'news_associations', __( 'Select news items' ))
                        //     ->set_types( array(
                        //         array(
                        //             'type' => 'post',
                        //             'post_type' => 'news',
                        //         ),
                        //     ) )
                        // ) )
                ) )
                ->add_fields( 'service_page_text_header', 'Text header h1/h2', array(
                    Field::make( 'separator', 'separator1', __( 'Text header (H1 / H2)' ) ),
                    // Field::make( 'checkbox', 'show_teammembers', __( 'Show Team members carousel' ) ),
                    Field::make( 'text', 'title', __( 'Header text' ) ),
                    Field::make( 'select', 'header_style', __( 'Color of header' ) )
                    ->set_options( array(
                        'black' => __( 'Black' ),
                        'yellow' => __( 'Yellow' ),
                    ) ),
                    Field::make( 'select', 'header_align', __( 'Alignment of header' ) )
                    ->set_options( array(
                        'center' => __( 'Center' ),
                        'left' => __( 'Left' ),
                    ) ),
                    Field::make( 'select', 'header_type', __( 'type of header' ) )
                    ->set_options( array(
                        'h1' => __( 'H1' ),
                        'h2' => __( 'H2' ),
                    ) ),
                    Field::make( 'select', 'header_margin', __( 'Space above header' ) )
                    ->set_options( array(
                        'default' => __( 'Default (some space above header text)' ),
                        'direct' => __( 'Direct (no space above header text)' ),
                    ) ),
                ) )
                ->add_fields( 'banner', 'Banner', array(
                    // Field::make( 'separator', 'separator1', __( 'Hero (big header)' ) ),
                    Field::make( 'image', 'image', __( 'Banner Image' ) )->set_visible_in_rest_api($visible = true),
                    Field::make( 'text', 'title', __( 'Banner title (can use html-tags)' ) ),
                    Field::make( 'textarea', 'text', __( 'Banner Text (can use html-tags)' ) ),
                    Field::make( 'text', 'btn_email', __( 'E-mail address (leave blank to remove the button)' ) ),
                    Field::make( 'text', 'btn_email_text', __( 'Text of the e-mail button' ) ),
                ) )
                // ->add_fields( 'text', 'Tekst', array(
                //     Field::make( 'separator', 'separator1', __( 'Text section' ) ),

                //     // Field::make( 'text', 'header', __( 'Header (can use html-tags)' ) ),
                //     Field::make( 'rich_text', 'text', __( 'Text' ) ),
                //     // Field::make( 'image', 'image', __( 'Image' ) ),
                //     // Field::make( 'complex', 'cta_button', __( 'Add Button' ) )
                //     //     ->add_fields( array(
                //     //         Field::make( 'select', 'color', __( 'Color' ) )
                //     //         ->set_options( array(
                //     //             'full_orange' => __( 'Full orange' ),
                //     //             'orange_border' => __( 'White with orange border' ),
                //     //             'transparent' => __( 'Transparent' ),
                //     //         ) ),
                //     //         Field::make( 'select', 'icon', __( 'Icon' ) )
                //     //         ->set_options( array(
                //     //             'no_icon' => __( 'No icon' ),
                //     //             'icon_phone' => __( 'Phone' ),
                //     //             'icon_external_link' => __( 'External link' ),
                //     //         ) ),
                //     //         Field::make( 'text', 'text', __( 'Button Text (can use html-tags)' ) ),
                //     //         Field::make( 'text', 'url', __( 'Button URL' ) ),
                //     //         Field::make( 'select', 'target', __( 'Target' ) )
                //     //         ->set_options( array(
                //     //             'same_tab' => __( 'Same tab' ),
                //     //             'new_tab' => __( 'New tab' ),
                //     //         ) ),
                //     // ) ),

                //     // Field::make( 'separator', 'separator2', __( 'Text Section 2 (optional)' ) ),

                //     // Field::make( 'text', 'header_2', __( 'Header (can use html-tags)' ) ),
                //     // Field::make( 'rich_text', 'text_2', __( 'Text' ) ),
                //     // Field::make( 'image', 'image_2', __( 'Image' ) ),
                //     // Field::make( 'complex', 'cta_button_2', __( 'Add Button' ) )
                //     //     ->add_fields( array(
                //     //         Field::make( 'select', 'color', __( 'Color' ) )
                //     //         ->set_options( array(
                //     //             'full_orange' => __( 'Full orange' ),
                //     //             'orange_border' => __( 'White with orange border' ),
                //     //             'transparent' => __( 'Transparent' ),
                //     //         ) ),
                //     //         Field::make( 'select', 'icon', __( 'Icon' ) )
                //     //         ->set_options( array(
                //     //             'no_icon' => __( 'No icon' ),
                //     //             'icon_phone' => __( 'Phone' ),
                //     //             'icon_external_link' => __( 'External link' ),
                //     //         ) ),
                //     //         Field::make( 'text', 'text', __( 'Button Text (can use html-tags)' ) ),
                //     //         Field::make( 'text', 'url', __( 'Button URL' ) ),
                //     //         Field::make( 'select', 'target', __( 'Target' ) )
                //     //         ->set_options( array(
                //     //             'same_tab' => __( 'Same tab' ),
                //     //             'new_tab' => __( 'New tab' ),
                //     //         ) ),
                //     // ) ),
                // ) )
                // ->add_fields( 'office_boxes', 'Offices', array(
                //     Field::make( 'separator', 'separator1', __( 'Offices' ) ),
                //     Field::make( 'association', 'office_associations', __( 'Select offices' ))
                //     ->set_types( array(
                //         array(
                //             'type' => 'post',
                //             'post_type' => 'office',
                //         ),
                //     ) )
                // ) )
                ->add_fields( 'blog_items', 'Blog items - carrousel', array(
                    Field::make( 'separator', 'separator1', __( 'Blog items' ) ),
                    Field::make( 'association', 'blog_associations', __( 'Select blog items' ))
                    ->set_types( array(
                        array(
                            'type' => 'post',
                            'post_type' => 'blog',
                        ),
                    ) )
                ) )
                ->add_fields( 'case_items', 'Case items - carrousel', array(
                    Field::make( 'separator', 'separator1', __( 'Case items' ) ),
                    Field::make( 'association', 'case_associations', __( 'Select case items' ))
                    ->set_types( array(
                        array(
                            'type' => 'post',
                            'post_type' => 'case',
                        ),
                    ) )
                ) )
                ->add_fields( 'partner_items', 'Partner items - carrousel', array(
                    Field::make( 'separator', 'separator1', __( 'Partner items' ) ),
                    Field::make( 'association', 'partner_associations', __( 'Select partner items' ))
                    ->set_types( array(
                        array(
                            'type' => 'post',
                            'post_type' => 'partner',
                        ),
                    ) )
                ) )
                ->add_fields( 'trainings', 'Trainings - carrousel', array(
                    Field::make( 'separator', 'separator1', __( 'Trainings' ) ),
                    Field::make( 'association', 'training_cat_associations', __( 'Select training categories' ))
                    ->set_types( array(
                        array(
                            'type' => 'term',
                            'taxonomy' => 'training_category',
                        ),
                    ) ),
                ) )
                ->add_fields( 'teammembers', 'Team members - carrousel', array(
                    Field::make( 'separator', 'separator1', __( 'Team members' ) ),
                    Field::make( 'checkbox', 'show_teammembers', __( 'Show All team members' ) ),
                ) )
                ->add_fields( 'allblogitems', 'Blog items (alles)', array(
                    Field::make( 'separator', 'separator1', __( 'Blog items' ) ),
                    Field::make( 'checkbox', 'show_blogitems', __( 'Show All blog items' ) ),
                ) )
                // ->add_fields( 'team_specialists', 'Team specialists', array(
                //     Field::make( 'separator', 'separator1', __( 'Team specialists' ) ),
                //     Field::make( 'association', 'team_specialists_associations', __( 'Select team specialists' ))
                //     ->set_types( array(
                //         array(
                //             'type' => 'post',
                //             'post_type' => 'teammember',
                //         ),
                //     ) )
                // ) )
                // ->add_fields( 'news_boxes', 'News', array(
                //     Field::make( 'separator', 'separator1', __( 'News' ) ),
                //     Field::make( 'association', 'news_associations', __( 'Select news (max 3)' ))
                //     ->set_types( array(
                //         array(
                //             'type' => 'post',
                //             'post_type' => 'news',
                //         ),
                //     ) )
                // ) )
                // ->add_fields( 'packages', 'Price Packages', array(
                //     Field::make( 'separator', 'separator1', __( 'Prijs Pakketten' ) ),
                //     Field::make( 'checkbox', 'show_packages', __( 'Show Pricing Packages' ) ),
                // ) )
                // ->add_fields( 'working_with', 'Clients', array(
                //     Field::make( 'separator', 'separator1', __( 'Clients' ) ),
                //     Field::make( 'checkbox', 'show_working_with', __( 'Show "Clients" section' ) ),
                // ) )
                // ->add_fields( 'reviews', 'Reviews', array(
                //     Field::make( 'separator', 'separator1', __( 'Reviews' ) ),
                //     Field::make( 'checkbox', 'show_reviews', __( 'Show Reviews' ) ),
                // ) )
                ->add_fields( 'marketing_terms', 'Implementation terms', array(
                    Field::make( 'separator', 'separator1', __( 'Implementation page terms' ) ),
                    // Field::make( 'checkbox', 'show_teammembers', __( 'Show Team members carousel' ) ),
                    Field::make( 'image', 'image1', __( 'Term 1 image' ) ),
                    Field::make( 'text', 'term1', __( 'Term 1 title' ) ),
                    Field::make( 'text', 'color1', __( 'Term 1 color' ) ),
                    Field::make( 'text', 'term1_text', __( 'Term 1 text' ) ),
                    Field::make( 'image', 'image2', __( 'Term 2 image' ) ),
                    Field::make( 'text', 'term2', __( 'Term 2 title' ) ),
                    Field::make( 'text', 'color2', __( 'Term 2 color' ) ),
                    Field::make( 'text', 'term2_text', __( 'Term 2 text' ) ),
                    Field::make( 'image', 'image3', __( 'Term 3 image' ) ),
                    Field::make( 'text', 'term3', __( 'Term 3 title' ) ),
                    Field::make( 'text', 'color3', __( 'Term 3 color' ) ),
                    Field::make( 'text', 'term3_text', __( 'Term 3 text' ) ),
                    Field::make( 'image', 'image4', __( 'Term 4 image' ) ),
                    Field::make( 'text', 'term4', __( 'Term 4 title' ) ),
                    Field::make( 'text', 'color4', __( 'Term 4 color' ) ),
                    Field::make( 'text', 'term4_text', __( 'Term 4 text' ) ),
                    Field::make( 'image', 'image5', __( 'Term 5 image' ) ),
                    Field::make( 'text', 'term5', __( 'Term 5 title' ) ),
                    Field::make( 'text', 'color5', __( 'Term 5 color' ) ),
                    Field::make( 'text', 'term5_text', __( 'Term 5 text' ) ),
                    Field::make( 'image', 'image6', __( 'Term 6 image' ) ),
                    Field::make( 'text', 'term6', __( 'Term 6 title' ) ),
                    Field::make( 'text', 'color6', __( 'Term 6 color' ) ),
                    Field::make( 'text', 'term6_text', __( 'Term 6 text' ) ),
                    // Field::make( 'image', 'image7', __( 'Term 7 image' ) ),
                    // Field::make( 'text', 'term7', __( 'Term 7 title' ) ),
                    // Field::make( 'text', 'term7_text', __( 'Term 7 text' ) ),
                    // Field::make( 'image', 'image8', __( 'Term 8 image' ) ),
                    // Field::make( 'text', 'term8', __( 'Term 8 title' ) ),
                    // Field::make( 'text', 'term8_text', __( 'Term 8 text' ) ),
                ) )
                ->add_fields( 'approach_tiles', 'Approach tiles', array(
                    Field::make( 'separator', 'separator1', __( 'Our Approach tiles / list' ) ),
                    Field::make( 'select', 'approuch_style', __( 'Select display style of approaches' ) )
                    ->set_options( array(
                        'tiles' => __( 'Tiles' ),
                        'list' => __( 'List' ),
                    ) ),
                    Field::make( 'complex', 'approach', __( 'Add Approach' ) )
                        ->add_fields( array(
                            Field::make( 'image', 'image', __( 'Approach image' ) ),
                            Field::make( 'text', 'approach_title', __( 'Approach title' ) ),
                            Field::make( 'text', 'approach_text', __( 'Approach text (When display style: Tiles)' ) ),
                            Field::make( 'rich_text', 'approach_rich_text', __( 'Approach text (When display style: List)' ) ),
                        ) ),
                ) )
                ->add_fields( 'schedule_call', 'Schedule a call Form', array(
                    Field::make( 'separator', 'separator1', __( 'Schedule a call' ) ),
                    Field::make( 'text', 'title', __( 'Title' ) ),
                    Field::make( 'rich_text', 'text', __( 'Text' ) ),
                    Field::make( 'text', 'email_to', __( 'E-mail to' ) ),
                    Field::make( 'text', 'success_text', __( 'Text on success' ) ),
                ) )
                ->add_fields( 'video', 'Video', array(
                    Field::make( 'separator', 'separator1', __( 'Select a video' ) ),
                    Field::make( 'image', 'video', __( 'Video' ) )->set_type( 'video' )->set_visible_in_rest_api($visible = true),
                ) )
                // ->add_fields( 'get_in_touch', 'Get in touch', array(
                //     Field::make( 'separator', 'separator1', __( 'Get in touch' ) ),
                //     Field::make( 'checkbox', 'show_get_in_touch', __( 'Show "Get in touch" section' ) ),
                // ) )
                // ->add_fields( 'statistics', 'Statistics', array(
                //     Field::make( 'separator', 'separator1', __( 'Statistics' ) ),
                //     Field::make( 'complex', 'stats', __( 'Add statistic' ) )
                //         ->add_fields( array(
                //             Field::make( 'select', 'icon', __( 'Icon' ) )
                //             ->set_options( array(
                //                 'icon_world' => __( 'World' ),
                //                 'icon_crew' => __( 'Crew' ),
                //                 'icon_calendar' => __( 'Calendar' ),
                //                 'icon_thumb' => __( 'Thumb' ),
                //                 'icon_recycle' => __( 'Recycle' ),
                //                 'icon_wind' => __( 'Wind' ),
                //                 'icon_building' => __( 'Building' ),
                //             ) ),
                //             Field::make( 'text', 'number', __( 'Number' ) ),
                //             Field::make( 'text', 'headline', __( 'Headline' ) ),
                //             Field::make( 'text', 'subline', __( 'Subline' ) ),
                //     ) )
                // ) )


        ))
        ->add_tab( __('Page information'), array(
            Field::make( 'separator', 'separator', __( 'Information about the page' ) ),
            Field::make( 'text', 'meta_title', __( 'Page title (shown in browser tab)' ))->set_visible_in_rest_api($visible = true),
            Field::make( 'text', 'meta_description', __( 'Page meta description (shown in search engines)' ))->set_visible_in_rest_api($visible = true),
            Field::make( 'checkbox', 'hide_from_menu', __('Hide page from menu (page is still available via permalink)') )->set_visible_in_rest_api($visible = true),
        ))
        ;

    Container::make( 'post_meta', __( 'Information' ) )
        ->where( 'post_type', '=', 'blog' )
        ->add_fields(array(
            // Field::make( 'text', 'title', __( 'Title' ))->set_visible_in_rest_api($visible = true),
            // Field::make( 'image', 'small_image', __( 'Card image' ) )->set_visible_in_rest_api($visible = true),
            Field::make( 'separator', 'separator1', __( 'Blog Hero information' ) ),
            Field::make( 'media_gallery', 'gallery', __( 'Blog Hero images' ) )->set_visible_in_rest_api($visible = true),
            Field::make( 'text', 'hero_title', __( 'Blog Hero title (can use html-tags)' ))->set_visible_in_rest_api($visible = true),
            Field::make( 'textarea', 'hero_text', __( 'Blog Hero text (can use html-tags)' ))->set_visible_in_rest_api($visible = true),
            Field::make( 'text', 'hero_sub_title', __( 'Blog subtext below Hero' ))->set_visible_in_rest_api($visible = true),
            Field::make( 'separator', 'separator2', __( 'Blog text' ) ),
            Field::make( 'rich_text', 'text', __( 'Text' ))->set_visible_in_rest_api($visible = true),
            Field::make( 'text', 'card_title', __( 'Card title' ))->set_visible_in_rest_api($visible = true),
            Field::make( 'textarea', 'card_text', __( 'Card text (can use html-tags)' ))->set_visible_in_rest_api($visible = true),
            Field::make( 'image', 'card_image', __( 'Card image' ) )->set_visible_in_rest_api($visible = true),
            Field::make( 'separator', 'separator3', __( 'SEO information' ) ),
            Field::make( 'text', 'page_title', __( 'Blog title (shown in browser tab)' ))->set_visible_in_rest_api($visible = true),
            Field::make( 'text', 'page_meta_description', __( 'Blog meta description (shown in search engines)' ))->set_visible_in_rest_api($visible = true),
            )
        );
    Container::make( 'post_meta', __( 'Information' ) )
        ->where( 'post_type', '=', 'case' )
        ->add_fields(array(
            // Field::make( 'separator', 'separator1', __( 'Images' ) ),
            Field::make( 'media_gallery', 'gallery', __( 'Images' ) )->set_visible_in_rest_api($visible = true),
            // Field::make( 'text', 'hero_title', __( 'Hero title (can use html-tags)' ))->set_visible_in_rest_api($visible = true),
            // Field::make( 'textarea', 'hero_text', __( 'Hero text (can use html-tags)' ))->set_visible_in_rest_api($visible = true),
            Field::make( 'separator', 'separator2', __( 'Case text' ) ),
            Field::make( 'rich_text', 'text', __( 'Text' ))->set_visible_in_rest_api($visible = true),
            Field::make( 'textarea', 'card_text', __( 'Card text (can use html-tags)' ))->set_visible_in_rest_api($visible = true),
            Field::make( 'separator', 'separator3', __( 'SEO information' ) ),
            Field::make( 'text', 'page_title', __( 'Case title (shown in browser tab)' ))->set_visible_in_rest_api($visible = true),
            Field::make( 'image', 'card_image', __( 'Card image' ) )->set_visible_in_rest_api($visible = true),
            Field::make( 'text', 'page_meta_description', __( 'Case meta description (shown in search engines)' ))->set_visible_in_rest_api($visible = true),
            // Field::make( 'separator', 'separator4', __( 'Extra options' ) ),
            // Field::make( 'checkbox', 'highlighted', __('Show on homepage') ),
            )
        );
    Container::make( 'post_meta', __( 'Information' ) )
        ->where( 'post_type', '=', 'training' )
        ->add_fields(array(
            // Field::make( 'separator', 'separator1', __( 'Images' ) ),
            Field::make( 'media_gallery', 'gallery', __( 'Images' ) )->set_visible_in_rest_api($visible = true),
            // Field::make( 'text', 'hero_title', __( 'Hero title (can use html-tags)' ))->set_visible_in_rest_api($visible = true),
            // Field::make( 'textarea', 'hero_text', __( 'Hero text (can use html-tags)' ))->set_visible_in_rest_api($visible = true),
            Field::make( 'separator', 'separator2', __( 'Training text' ) ),
            Field::make( 'rich_text', 'text', __( 'Text' ))->set_visible_in_rest_api($visible = true),
            Field::make( 'textarea', 'card_text', __( 'Card text (can use html-tags)' ))->set_visible_in_rest_api($visible = true),
            Field::make( 'separator', 'separator3', __( 'Training information' ) ),
            Field::make( 'image', 'card_logo', __( 'Card logo' ) )->set_visible_in_rest_api($visible = true),
            Field::make( 'text', 'training_location', __( 'Training Location' ))->set_visible_in_rest_api($visible = true),
            Field::make( 'text', 'training_participants', __( 'Training participants' ))->set_visible_in_rest_api($visible = true),
            Field::make( 'text', 'training_time', __( 'Training time' ))->set_visible_in_rest_api($visible = true),
            Field::make( 'rich_text', 'training_requirements', __( 'Training requirements' ))->set_visible_in_rest_api($visible = true),
            Field::make( 'separator', 'separator4', __( 'SEO information' ) ),
            Field::make( 'text', 'page_title', __( 'Training title (shown in browser tab)' ))->set_visible_in_rest_api($visible = true),
            Field::make( 'text', 'page_meta_description', __( 'Training meta description (shown in search engines)' ))->set_visible_in_rest_api($visible = true),
            // Field::make( 'separator', 'separator4', __( 'Extra options' ) ),
            // Field::make( 'checkbox', 'highlighted', __('Show on homepage') ),
            )
        );
    Container::make( 'post_meta', __( 'Information' ) )
        ->where( 'post_type', '=', 'review' )
        ->add_fields(array(
            // Field::make( 'separator', 'separator1', __( 'Images' ) ),
            Field::make( 'image', 'image', __( 'Image' ) ),
            // Field::make( 'media_gallery', 'gallery', __( 'Images' ) )->set_visible_in_rest_api($visible = true),
            // Field::make( 'text', 'hero_title', __( 'Hero title (can use html-tags)' ))->set_visible_in_rest_api($visible = true),
            // Field::make( 'textarea', 'hero_text', __( 'Hero text (can use html-tags)' ))->set_visible_in_rest_api($visible = true),
            Field::make( 'separator', 'separator2', __( 'Review text' ) ),
            Field::make( 'text', 'leading_title', __( 'Leading title' ))->set_visible_in_rest_api($visible = true),
            Field::make( 'rich_text', 'text', __( 'Text' ))->set_visible_in_rest_api($visible = true),
            // Field::make( 'text', 'by', __( 'Review by' ))->set_visible_in_rest_api($visible = true),
            // Field::make( 'textarea', 'card_text', __( 'Card text (can use html-tags)' ))->set_visible_in_rest_api($visible = true),
            // Field::make( 'separator', 'separator3', __( 'SEO information' ) ),
            // Field::make( 'separator', 'separator4', __( 'Extra options' ) ),
            // Field::make( 'checkbox', 'highlighted', __('Show on homepage') ),
            )
        );
    Container::make( 'post_meta', __( 'Information' ) )
        ->where( 'post_type', '=', 'teammember' )
        ->add_fields(array(
            // Field::make( 'separator', 'separator1', __( 'Images' ) ),
            Field::make( 'image', 'image', __( 'Image' ) )->set_visible_in_rest_api($visible = true),
            // Field::make( 'media_gallery', 'gallery', __( 'Images' ) )->set_visible_in_rest_api($visible = true),
            // Field::make( 'text', 'hero_title', __( 'Hero title (can use html-tags)' ))->set_visible_in_rest_api($visible = true),
            // Field::make( 'textarea', 'hero_text', __( 'Hero text (can use html-tags)' ))->set_visible_in_rest_api($visible = true),
            // Field::make( 'separator', 'separator2', __( 'Review text' ) ),
            Field::make( 'text', 'function', __( 'Function' ))->set_visible_in_rest_api($visible = true),
            Field::make( 'text', 'order', __( 'Order number (lower is sooner in carrousel)' ))->set_visible_in_rest_api($visible = true),
            Field::make( 'rich_text', 'text', __( 'Text' ))->set_visible_in_rest_api($visible = true),
            // Field::make( 'text', 'by', __( 'Review by' ))->set_visible_in_rest_api($visible = true),
            // Field::make( 'textarea', 'card_text', __( 'Card text (can use html-tags)' ))->set_visible_in_rest_api($visible = true),
            // Field::make( 'separator', 'separator3', __( 'SEO information' ) ),
            // Field::make( 'separator', 'separator4', __( 'Extra options' ) ),
            // Field::make( 'checkbox', 'highlighted', __('Show on homepage') ),
            )
        );
    Container::make( 'post_meta', __( 'Information' ) )
        ->where( 'post_type', '=', 'partner' )
        ->add_fields(array(
            Field::make( 'image', 'image', __( 'Image' ) )->set_visible_in_rest_api($visible = true),
            )
        );
    Container::make( 'post_meta', __( 'Information' ) )
        ->where( 'post_type', '=', 'faq' )
        ->add_fields(array(
            Field::make( 'text', 'question', __( 'Question)' ))->set_visible_in_rest_api($visible = true),
            Field::make( 'rich_text', 'answer', __( 'Answer' ))->set_visible_in_rest_api($visible = true),
            )
        );
    // Container::make( 'post_meta', __( 'Information' ) )
    //     ->where( 'post_type', '=', 'office' )
    //     ->add_fields(array(
    //         Field::make( 'text', 'country', __( 'Country' ))->set_visible_in_rest_api($visible = true),
    //         Field::make( 'text', 'phone', __( 'Phone number' ))->set_visible_in_rest_api($visible = true),
    //         Field::make( 'text', 'email', __( 'E-mail address' ))->set_visible_in_rest_api($visible = true),
    //         Field::make( 'text', 'address1', __( 'Address line 1' ))->set_visible_in_rest_api($visible = true),
    //         Field::make( 'text', 'address2', __( 'Address line 2' ))->set_visible_in_rest_api($visible = true),
    //         Field::make( 'text', 'address3', __( 'Address line 3' ))->set_visible_in_rest_api($visible = true),
    //         Field::make( 'text', 'address4', __( 'Address line 4' ))->set_visible_in_rest_api($visible = true),
    //         Field::make( 'text', 'google_maps_address', __( 'Address for Google Maps Marker' ))->set_visible_in_rest_api($visible = true),
    //         )
    //     );
    // Container::make( 'post_meta', __( 'Information' ) )
    //     ->where( 'post_type', '=', 'professional' )
    //     ->add_fields(array(
    //         Field::make( 'text', 'function', __( 'Function' ))->set_visible_in_rest_api($visible = true),
    //         Field::make( 'image', 'image', __( 'Image' ) )->set_visible_in_rest_api($visible = true),
    //         )
    //     );

    // Container::make('term_meta', 'Woo Category Options')
    //     ->where('term_taxonomy', '=', 'product_cat')
    //     // ->add_tab( __( 'Profile' ), array(
    //     ->add_fields( array(
    //         Field::make( 'radio', 'crb_catalogus_type', __( 'Choose catalogus type' ) )->set_visible_in_rest_api($visible = true)
    //         ->set_options( array(
    //             'shop' => 'Shop',
    //             'list' => 'List',
    //         ) ),
    //         Field::make( 'rich_text', 'crb_category_text', __( 'Text' ) )->set_visible_in_rest_api($visible = true),
    //     ));


    $fieldsToAdd = array();
    foreach($args['websiteOptions'] as $opt) {
        if($opt[0] == 'media_gallery') {
            $fieldsToAdd[] = Field::make($opt[0], $opt[1], __($opt[2]))->set_type( array( 'image' ) )->set_duplicates_allowed( false );
        } elseif($opt[0] == 'office_assoc') {
            $fieldsToAdd[] = Field::make( 'association', $opt[1], __($opt[2]))
                                ->set_types( array(
                                    array(
                                        'type' => 'post',
                                        'post_type' => 'office',
                                    ),
                                ) );
        } else {
            $fieldsToAdd[] = Field::make($opt[0], $opt[1], __($opt[2]));
        }
    }
    Container::make('theme_options', 'Website Options')->add_fields($fieldsToAdd );

    // Container::make('theme_options', 'Reserveringen')->add_fields(array(
        // Field::make( 'html', 'file_download')->set_html('<p><a href="/event_files/aanmeldingen.csv">Download Excel bestand</a></p>')
        // )
    // );
}
?>