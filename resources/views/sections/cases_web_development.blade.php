<div class="inner">
    {{-- <div class="casesContentDiensten webDevelopmentCases"> --}}
        {{-- @include('sections.cases', ['cases' => $cases, 'type' => 'web-development']) --}}
    {{-- </div> --}}

    <div class="webDevCasesContent">
        <div class="webDevNumbers">
            <div>
                <span>{{ $data['website_options']->happy_clients }}</span>
                <span>Tevreden klanten</span>
            </div>
            <div>
                <span>{{ $data['website_options']->total_projects }}</span>
                <span>Projecten</span>
            </div>
        </div>
        <div class="webDevGallery">
            @php
                $firstCase = array_shift($cases);
            @endphp
            @include('sections.cases', ['cases' => array($firstCase), 'type' => 'webdevelopment'])
            <div class="hiddenWebDevCases">
                @include('sections.cases', ['cases' => $cases, 'type' => 'webdevelopment'])
            </div>
            <div class="webDevNavigate">
                <div class="wdnTitle">{{ $firstCase->title }}</div>
                <div class="wdnBtns"><a href="" class="wdnPref"></a> <a href="" class="wdnNext"></a></div>
            </div>
        </div>
    </div>

    {{-- <div class="webDevCasesContent">
        <div class="webDevNumber"><div>234</div></div>
        <div class="webDevNumber"><div>12</div></div>
        <div class="webDevGallery">
            @include('sections.cases', ['cases' => $cases, 'type' => 'web-development'])
        </div>
    </div> --}}
    
</div>