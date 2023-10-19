<?php
namespace App\Http\Helpers;

class Menu {
    public $allPagesFlattenedPerParent;
    public $html;
    public $bNestPageUrls = true;
    public function __construct($menu) {
        $this->allPagesFlattenedPerParent = $menu;
    }
    public function generateUlMenu($parentId = 0, $url = '') {
        if(!$this->bNestPageUrls) $url = '';
        if($parentId == 0) $this->html .= '<ul itemscope itemtype="http://www.schema.org/SiteNavigationElement">' . "\n";
        else $this->html .= '<ul>' . "\n";
        // foreach($this->allPagesFlattenedPerParent[$parentId] as $page) {
        for($x=0;$x<count($this->allPagesFlattenedPerParent[$parentId]);$x++) { // using for(), key can be an order integer
            $page = $this->allPagesFlattenedPerParent[$parentId][$x];
            // if($page->title == '[HOMEPAGE]') continue;
            // if($page->title == 'General Conditions') continue;
            if($page->hide_from_menu) continue;
            if($page->title == '[HOMEPAGE]') $page->title = 'Home';
            
            $pageUrl = $url . '/' . $page->slug;
// dd($pageUrl);
            // if(substr_count($pageUrl, '/') == 2) continue;
            $this->html .= '<li itemprop="name">';
            $href = $pageUrl;
            if(isset($page->alt_url) && $page->alt_url) $href = $page->alt_url; // mironmarine.nl
            $active = false;
            $aRequestPath = explode('/', request()->path());
            if('/' . request()->path() == $pageUrl) $active = true;
            // if(substr_count($pageUrl, '/') == 2) {
            //     // $this->html .= '<a href="#">'; // only for Miron Marine Service
            //     $this->html .= '<a itemprop="url" href="' . $href . '"' . ($active?' class="active"':'') . '>';
            // } else {

                if($page->title == 'Home') $href = '/';
                $this->html .= '<a itemprop="url" href="' . $href . '">';

                // if($page->title == 'Blog' && $aRequestPath[0] == 'blog') {
                //     $href = '/blog';
                //     $this->html .= '<a itemprop="url" href="' . $href . '"' . ' class="active"' . '>';
                // } elseif($page->title == 'Diensten' && $aRequestPath[0] == 'diensten') {
                //     $this->html .= '<a itemprop="url" href="' . route('home') . '#' . substr($href, 1) . '"' . ' class="active"' . '>';
                // } else {
                //     $this->html .= '<a itemprop="url" href="' . route('home') . '#' . substr($href, 1) . '"' . ($active?' class="active"':'') . '>'; // rotterdamsehorecawandeling.nl (onepager)
                // }

            // }

            $this->html .= $page->title;
            $this->html .= '</a>';
            if(isset($this->allPagesFlattenedPerParent[$page->id])) $this->generateUlMenu($page->id, $pageUrl);
            $this->html .= '</li>' . "\n";
        }
        $this->html .= '</ul>' . "\n";
    }
    public function show() {
        echo $this->html;
    }
}
