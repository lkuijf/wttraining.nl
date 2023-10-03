<?php
namespace App\Http\Helpers;

class WebsiteOptionsApi extends ApiCall {
    public function __construct() {
        // $this->endpoint = config('app_wt.cmsPath')  . '/index.php/wp-json/wtcustom/website-options';
        $this->endpoint = '/wtcustom/website-options';
    }
}
