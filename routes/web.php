<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\SubmitController;
use App\Http\Controllers\ImageController;
use Spatie\ResponseCache\Facades\ResponseCache;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
/*** Moved some web.config rewrites/redirects to these routes. Since Laravel toolkit, and others, for Plesk messes web.config up) ******************/
Route::get('/media/{year}/{month}/{file}', [ImageController::class, 'renderImage'])->where(['year' => '[0-9]{4}','month' => '[0-9]{2}']); // rewrite for media
Route::get('/wp-json/carbon-fields/v1/attachment', function () {return redirect(str_replace('/wp-json/carbon-fields/v1/attachment', '/_mcfu638b-cms/index.php/wp-json/carbon-fields/v1/attachment', Request::fullUrl()));}); // redirect for Carbon Fields -bug
Route::get('/wp-json/carbon-fields/v1/association', function () {return redirect(str_replace('/wp-json/carbon-fields/v1/association', '/_mcfu638b-cms/index.php/wp-json/carbon-fields/v1/association', Request::fullUrl()));}); // redirect for Carbon Fields -bug
Route::get('/wp-json/carbon-fields/v1/association/options', function () {return redirect(str_replace('/wp-json/carbon-fields/v1/association/options', '/_mcfu638b-cms/index.php/wp-json/carbon-fields/v1/association/options', Request::fullUrl()));}); // redirect for Carbon Fields -bug
Route::get('/admin', function () {return redirect('/_mcfu638b-cms/wp-admin');}); // redirect /admin to wp-cms
/*** TIP: Check the Web Application Firewall when a route is not picked up by a rule above *********************************************************/
/***************************************************************************************************************************************************/

Route::get('/', function () {
    // return view('welcome');
    return redirect('https://www.wtgroup.nl/w-t-training/');
});
// Route::get('/background-test', function () {
//     return view('templates.background-test');
// });
Route::get('/clear-response-cache-wt', function () {
    ResponseCache::clear();
    return 'Response Cache Cleared!';
})->middleware('doNotCacheResponse');


Route::get('/wtcustom/simple-pages', function () {return file_get_contents(config('app_wt.host') . config('app_wt.cmsPath') . '/index.php/wp-json/wtcustom/simple-pages');});
Route::get('/wtcustom/website-options', function () {return file_get_contents(config('app_wt.host') . config('app_wt.cmsPath') . '/index.php/wp-json/wtcustom/website-options');});
Route::get('/wtcustom/simple-media', function () {return file_get_contents(config('app_wt.host') . config('app_wt.cmsPath') . '/index.php/wp-json/wtcustom/simple-media');});



Route::post('/submit-subscription-form', [SubmitController::class, 'submitSubscriptionFormXHR']);
Route::post('/submit-schedule-call-form', [SubmitController::class, 'submitScheduleCallForm'])->name('submitScheduleCall');

Route::get('/homepage', [PagesController::class, 'showOnePager'])->name('home');

Route::get('/blog', [PagesController::class, 'showBlog']);
Route::get('/blog/{slug}', [PagesController::class, 'showPost'])->where([
    'slug' => '[a-z0-9_-]+',
]);

Route::get('/diensten/learning-en-development', [PagesController::class, 'showPage'])->defaults('section', 'diensten')->defaults('page', 'learning-en-development')->defaults('subpage', false)->middleware('doNotCacheResponse');
Route::get('/diensten/academy-en-lms', [PagesController::class, 'showPage'])->defaults('section', 'diensten')->defaults('page', 'academy-en-lms')->defaults('subpage', false)->middleware('doNotCacheResponse');
Route::get('/diensten/trainingen', [PagesController::class, 'showPage'])->defaults('section', 'diensten')->defaults('page', 'trainingen')->defaults('subpage', false)->middleware('doNotCacheResponse');
Route::get('/diensten/implementatie-ondersteuning', [PagesController::class, 'showPage'])->defaults('section', 'diensten')->defaults('page', 'implementatie-ondersteuning')->defaults('subpage', false)->middleware('doNotCacheResponse');

Route::get('/training/{slug}', [PagesController::class, 'showTraining'])->where([
    'slug' => '[a-z0-9_-]+',
]);
Route::get('/case/{slug}', [PagesController::class, 'showCase'])->where([
    'slug' => '[a-z0-9_-]+',
]);
// Route::get('/diensten/learning-en-development/{slug}', [PagesController::class, 'showCase'])->where([
//     'slug' => '[a-z0-9_-]+',
// ]);
// Route::get('/diensten/academy-en-lms/{slug}', [PagesController::class, 'showCase'])->where([
//     'slug' => '[a-z0-9_-]+',
// ]);
// Route::get('/diensten/trainingen/{slug}', [PagesController::class, 'showCase'])->where([
//     'slug' => '[a-z0-9_-]+',
// ]);
// Route::get('/diensten/implementatie-ondersteuning/{slug}', [PagesController::class, 'showCase'])->where([
//     'slug' => '[a-z0-9_-]+',
// ]);


// When no matches, check for regular (nested) pages
/* Check for a page request */
Route::get('/{section}', [PagesController::class, 'showPage'])->defaults('page', false)->defaults('subpage', false)->where([
    'section' => '[a-z0-9_-]+',
]);
Route::get('/{section}/{page}', [PagesController::class, 'showPage'])->defaults('subpage', false)->where([
    'section' => '[a-z0-9_-]+',
    'page' => '[a-z0-9_-]+',
]);
// Route::get('/{section}/{page}/{subpage}', [PagesController::class, 'showPage'])->where([
//     'section' => '[a-z0-9_-]+',
//     'page' => '[a-z0-9_-]+',
//     'subpage' => '[a-z0-9_-]+',
// ]);
