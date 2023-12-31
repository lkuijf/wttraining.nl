@foreach ($data['content_sections'] as $i => $section)
    @if ($section->_type == '_anchor')
        <a id="{{ $section->value }}" class="anchorPoint"></a>
    @endif
    @if($section->_type == 'hero')
        {{-- @php
            if(!isset($section->show_logo)) $section->show_logo = false;
        @endphp --}}
        @include('sections.hero', [
            'images' => $section->crb_media_gallery,
            'title' => $section->hero_title,
            'text' => $section->text,
            'email' => $section->btn_email,
            'email_text' => $section->btn_email_text,
            'phone' => $section->btn_phone,
            'bCenterText' => $section->center_text,
            ])
    @endif
    @if($section->_type == 'banner')
        @include('sections.banner', [
            'image' => $section->image,
            'title' => $section->title,
            'text' => $section->text,
            'email' => $section->btn_email,
            'email_text' => $section->btn_email_text,
            ])
    @endif
    @if($section->_type == 'video')
        @include('sections.video', [
            'videoUrl' => $section->video,
            ])
        @section('before_closing_body_tag')
        @parent
            {{-- <script type="module" src="{{ asset('js/video.min.js') }}"></script> --}}
            <script type="module">
                const player = videojs('my-video');
                // player.fluid(true);
                // player.fill(true);
                // player.aspectRatio('24:9');
                // player.responsive(true);
            </script>
        @endsection
    @endif
    {{-- @if($section->_type == 'text')
        @php
            if(!isset($section->cta_button)) $section->cta_button = [];
            if(!isset($section->cta_button_2)) $section->cta_button_2 = [];
        @endphp
        @include('sections.text', [
            // 'header' => $section->header,
            'text' => str_replace('---', '<hr>', $section->text),
            // 'imageUrl' => $section->image[0]['url'],
            // 'imageAlt' => $section->image[0]['alt'],
            // 'buttons' => $section->cta_button,
            // 'header_2' => $section->header_2,
            // 'text_2' => $section->text_2,
            // 'imageUrl_2' => $section->image_2[0]['url'],
            // 'imageAlt_2' => $section->image_2[0]['alt'],
            // 'buttons_2' => $section->cta_button_2,
            ])
    @endif --}}
    {{-- @if($section->_type == 'office_boxes')
    <div class="introTextContent gridBoxes">
        <h2>GLOMAR <strong>OFFICES</strong></h2>
        <div class="inner">
            @foreach ($section->office_associations as $office)
                @include('sections.text_office_boxes', [
                    'header' => $office->country,
                    'phone' => $office->phone,
                    'email' => $office->email,
                    'address_line_1' => $office->address1,
                    'address_line_2' => $office->address2,
                    'address_line_3' => $office->address3,
                    'address_line_4' => $office->address4,
                    'gm_address' => $office->google_maps_address,
                    ])
            @endforeach
        </div>
    </div>
    @endif
    @if($section->_type == 'working_with' && $section->show_working_with)
        @include('sections.working_with')
    @endif
    @if($section->_type == 'get_in_touch' && $section->show_get_in_touch)
        @include('sections.get_in_touch')
    @endif
    @if($section->_type == 'statistics')
        @include('sections.statistics', ['statistics' => $section->stats])
    @endif
    @if($section->_type == 'professional_boxes')
        @include('sections.professionals', ['professionals' => $section->professional_associations])
    @endif
    @if($section->_type == 'vessel_boxes')
        @include('sections.vessels', ['vessels' => $section->vessels_associations])
    @endif
    @if($section->_type == 'news_boxes')
        @include('sections.news', ['news' => $section->news_associations])
    @endif --}}
        @if($section->_type == 'packages' && $section->show_packages)
            @include('sections.packages')
        @endif
        @if($section->_type == 'reviews' && $section->show_reviews)
            @include('sections.reviews', ['reviews' => $data['reviews']])
        @endif
        {{-- @if($section->_type == 'working_with' && $section->show_working_with)
            @include('sections.working_with')
        @endif --}}
        @if($section->_type == 'teammembers' && $section->show_teammembers)
            @php
                $tmSwClass = 'teamMembersSwiper_';
                $tmSwPrevClass = 'swiperBtnPrevTeam_';
                $tmSwNextClass = 'swiperBtnNextTeam_';
            @endphp
            @include('sections.teammembers', [
                'swClass' => $tmSwClass . $i,
                'swBtnPrev' => $tmSwPrevClass . $i,
                'swBtnNext' => $tmSwNextClass . $i,
                ])
            @section('before_closing_body_tag')
            @parent
            <script type="module">initTeamMembersSwiper(".{{ $tmSwClass.$i }}", ".{{ $tmSwPrevClass.$i }}", ".{{ $tmSwNextClass.$i }}");</script>
            @endsection
        @endif
        @if($section->_type == 'team_specialists')
            @include('sections.team_specialists', ['specialists' => $section->team_specialists_associations])
        @endif
        @if($section->_type == 'blog_items')
            @include('sections.blog_items', ['blog_items' => $section->blog_associations])
            @include('sections.button', ['url' => url('blog'), 'title' => 'Bekijk alle items'])
        @endif
        @if($section->_type == 'allblogitems' && $section->show_blogitems)
        @include('sections.all_blog_items')
        @endif
        @if($section->_type == 'case_items')
            @php
                $cSwClass = 'casesSwiper_';
                $cSwPrevClass = 'swiperBtnPrevCases_';
                $cSwNextClass = 'swiperBtnNextCases_';
            @endphp
            @include('sections.events', [
                'cases' => $section->case_associations,
                'swClass' => $cSwClass . $i,
                'swBtnPrev' => $cSwPrevClass . $i,
                'swBtnNext' => $cSwNextClass . $i,
                ])
            @section('before_closing_body_tag')
            @parent
            <script type="module">initCasesSwiper(".{{ $cSwClass.$i }}", ".{{ $cSwPrevClass.$i }}", ".{{ $cSwNextClass.$i }}");</script>
            @endsection
        @endif
        @if($section->_type == 'partner_items')
            @php
                $pSwClass = 'partnerSwiper_';
                $pSwPaginationClass = 'swiperPaginationPartner_';
            @endphp
            @include('sections.working_with', [
                'partners' => $section->partner_associations,
                'swiperClass' => $pSwClass . $i,
                'swiperPaginationClass' => $pSwPaginationClass . $i,
                ])
            @section('before_closing_body_tag')
            @parent
            <script type="module">initPartnerSwiper(".{{ $pSwClass.$i }}", ".{{ $pSwPaginationClass.$i }}");</script>
            @endsection
        @endif
        @if($section->_type == 'service_page_text_header')
            @include('sections.service_page_text_header', ['title' => $section->title, 'color' => $section->header_style, 'align' => $section->header_align, 'type' => $section->header_type, 'margin' => $section->header_margin])
        @endif
        @if($section->_type == 'marketing_terms')
            @include('sections.marketing_terms', [
                'image1' => $section->image1,
                'term1' => $section->term1,
                'color1' => $section->color1,
                'term1_text' => $section->term1_text,
                'image2' => $section->image2,
                'color2' => $section->color2,
                'term2' => $section->term2,
                'term2_text' => $section->term2_text,
                'image3' => $section->image3,
                'term3' => $section->term3,
                'color3' => $section->color3,
                'term3_text' => $section->term3_text,
                'image4' => $section->image4,
                'term4' => $section->term4,
                'color4' => $section->color4,
                'term4_text' => $section->term4_text,
                'image5' => $section->image5,
                'term5' => $section->term5,
                'color5' => $section->color5,
                'term5_text' => $section->term5_text,
                'image6' => $section->image6,
                'term6' => $section->term6,
                'color6' => $section->color6,
                'term6_text' => $section->term6_text,
                // 'image7' => $section->image7,
                // 'term7' => $section->term7,
                // 'term7_text' => $section->term7_text,
                // 'image8' => $section->image8,
                // 'term8' => $section->term8,
                // 'term8_text' => $section->term8_text,
                ])
        @endif
        @if($section->_type == 'schedule_call')
            @include('sections.schedule_call', [
                'title' => $section->title,
                'text' => $section->text,
                'email_to' => $section->email_to,
                'success_text' => $section->success_text,
            ])
        @endif
        @if($section->_type == 'cases')
            @if ($section->show_cases_highlighted)
                @include('sections.events', ['cases' => $data['cases_highlighted'], 'showCaseCat' => true])
            @endif
            @if ($section->show_cases_learning_en_development)
                @include('sections.events', ['cases' => $section->cases])
            @endif
            @if ($section->show_cases_academy_en_lms)
                @include('sections.events', ['cases' => $section->cases])
            @endif
            @if ($section->show_cases_trainingen)
                @include('sections.events', ['cases' => $section->cases])
            @endif
            @if ($section->show_cases_implementatie_ondersteuning)
                @include('sections.events', ['cases' => $section->cases])
            @endif
        @endif
        @if($section->_type == 'trainings')
            @php
                $tSwClass = 'trainingsSwiper_';
                $tSwPrevClass = 'swiperBtnPrevTrainings_';
                $tSwNextClass = 'swiperBtnNextTrainings_';
            @endphp
            @include('sections.trainings', [
                'trainings' => $section->trainings,
                // 'counter' => $section->trainings_counter,
                'swClass' => $tSwClass . $i,
                'swBtnPrev' => $tSwPrevClass . $i,
                'swBtnNext' => $tSwNextClass . $i,
                ])
            @section('before_closing_body_tag')
            @parent
            <script type="module">initTrainingsSwiper(".{{ $tSwClass.$i }}", ".{{ $tSwPrevClass.$i }}", ".{{ $tSwNextClass.$i }}");</script>
            @endsection
        @endif
        @if($section->_type == 'approach_tiles')
            @include('sections.approach_tiles', ['displayType' => $section->approuch_style, 'approaches' => $section->approach])
        @endif
        @if ($section->_type == '1column')
        <div class="fullw">
            @foreach ($section->fullwidth as $secData)
                @include('snippets.dynamicSections', ['secData' => $secData, 'layout' => 'fullwidth'])
            @endforeach
        </div>
        @endif
        @if ($section->_type == '2column')
            <div class="twoColumns">
                <div class="inner">
                <div class="columns @if($section->column_direction == 'reverse'){{ 'colReverse' }}@endif">
                    <div>
                        @foreach ($section->left as $secData)
                            @include('snippets.dynamicSections', ['secData' => $secData, 'layout' => '2column'])
                        @endforeach
                    </div>
                    <div>
                        @foreach ($section->right as $secData)
                            @include('snippets.dynamicSections', ['secData' => $secData, 'layout' => '2column'])
                        @endforeach
                    </div>
                </div>
                </div>
            </div>
        @endif
    {{-- @if ($section['type'] == 'banner')
        @include('sections.banner', [
            'image' => $section['img'], 
            'extraPadding' => $section['checked'],
            // 'wl' => $section['wl_header'],
            // 'bl' => $section['bl_header'],
            't_align' => $section['text_align'],
            't_color' => $section['text_color'],
            'i_opacity' => $section['image_opacity'],
            'text' => $section['text'],
            'buttons' => $section['links'],
            ])
    @endif
    @if ($section['type'] == 'text')
        @include('sections.text', [
            // 'image' => $section['img'], 
            // 'wl' => $section['wl_header'],
            // 'bl' => $section['bl_header'],
            // 'vAlign' => $section['valign_center'],
            'text' => $section['text'],
            // 'bg_color' => $section['background_color'],
            // 'orientation' => $section['orientation'],
            // 'margin' => $section['margin'],
            ])
    @endif
    @if ($section['type'] == 'text_flex')
        @include('sections.text_flex', [
            // 'image' => $section['img'], 
            // 'wl' => $section['wl_header'],
            // 'bl' => $section['bl_header'],
            // 'vAlign' => $section['valign_center'],
            'header' => $section['hdr'],
            'text_left' => $section['text_l'],
            'text_right' => $section['text_r'],
            'bg_color' => $section['background_color'],
            'column_stretch' => $section['stretch'],
            'buttons_l' => $section['links_l'],
            'buttons_r' => $section['links_r'],
            // 'orientation' => $section['orientation'],
            // 'margin' => $section['margin'],
            ])
    @endif
    @if ($section['type'] == 'text_grid')
        @include('sections.text_grid', [
            'gridItems' => $section['grid_items'], 
            ])
    @endif
    @if ($section['type'] == 'info_icons')
        @include('sections.info_icons', [
            'infoItems' => $section['info_icons'], 
            ])
    @endif
    @if ($section['type'] == 'testimonials')
        @include('sections.testimonials', [
            'testimonials' => $section['testimonials'], 
            ])
    @endif
    @if ($section['type'] == 'colleagues')
        @include('sections.colleagues', [
            'colleagues' => $section['people'], 
            ])
    @endif
    @if ($section['type'] == 'joboffers')
        <div id="jobOffersHomepage">
            <div class="inner">
                @include('sections.jobOffers', [
                    'jobOffers' => $section['jobOffers'], 
                    ])
                <div role="tablist" class="jobOfferDots"></div>
            </div>
        </div>
        @section('before_closing_body_tag')
        <script>
            makeResultsClickable();
        </script>
        @endsection
    @endif
    @if ($section['type'] == 'information_blocks_holder')
        @include('sections.information_blocks', ['info_blocks' => $section['blocks']])
    @endif
    @if ($section['type'] == 'person_wraps')
        @include('sections.people_blocks', ['person_blocks' => $section['people']])
    @endif --}}
@endforeach
