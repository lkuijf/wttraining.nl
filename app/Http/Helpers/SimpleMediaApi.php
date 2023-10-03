<?php
namespace App\Http\Helpers;

class SimpleMediaApi extends ApiCall {
    public function __construct() {
        // $this->endpoint = config('app_wt.cmsPath') . '/index.php/wp-json/wtcustom/simple-media';
        $this->endpoint = '/wtcustom/simple-media';
    }
    public function makeListById() {
        /* Make available by ID */
        $aList = array();
        foreach($this->res as $media) {
            $aList[$media->id] = $media;
        }
        return $aList;
    }
}
