<?php
namespace App\Http\Helpers;

class CustomPostApi extends ApiCall {
    public function __construct($customPostType, $id = false, $slug = false) {
        $this->endpoint = '/index.php/wp-json/wp/v2/' . $customPostType;
        if($id !== false) {
            if(is_array($id)) { // multiple id's
                $this->endpoint = '/index.php/wp-json/wp/v2/' . $customPostType . '?include=' . implode(',', $id);
            } else {
                $this->endpoint = '/index.php/wp-json/wp/v2/' . $customPostType . '/' . $id;
            }
        }
        if($slug)   $this->endpoint = '/index.php/wp-json/wp/v2/' . $customPostType . '?slug=' . $slug;
    }
}
