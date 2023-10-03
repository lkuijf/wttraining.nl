<?php
namespace App\Http\Helpers;

class PageApi extends ApiCall {
    public function __construct($id, $orderby = false, $order = false) {
        if(is_array($id)) { // multiple id's
            $this->endpoint = config('app_wt.cmsPath') . '/index.php/wp-json/wp/v2/pages?include=' . implode(',', $id);
            if($orderby) $this->endpoint .= '&orderby=' . $orderby;
            if($order) $this->endpoint .= '&order=' . $order;
        } else {
            $this->endpoint = config('app_wt.cmsPath') . '/index.php/wp-json/wp/v2/pages/' . $id;
        }
    }
    public function postProcess() {
        if(is_array($this->res)) {
            foreach($this->res as &$page) {
                $page->content->rendered = str_replace('_mcfu638b-cms/wp-content/uploads', 'media', $page->content->rendered);
            }
        } else {
            $this->res->content->rendered = str_replace('_mcfu638b-cms/wp-content/uploads', 'media', $this->res->content->rendered);
        }
    }
}
