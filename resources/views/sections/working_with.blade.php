<div class="inner">
    <div class="workingWithContent">

        <div class="outerSwiperBox">
            <div class="swiper {{ $swiperClass }}">
                <div class="swiper-wrapper">

                    @if($partners && count($partners))
                    {{-- @if($data['website_options']->working_with) --}}
                    @foreach ($partners as $partner)
                    {{-- @if (!isset($partner->data->status)) --}}
                        
                    
                    <div class="swiper-slide">
                        {{-- <img src="{!! $image['sizes']['medium'] !!}" alt="{{ $image['alt'] }}" loading="lazy"> --}}
                        @if (isset($partner->image[0]) && isset($partner->image[0]['sizes']) && $partner->image[0]['sizes'])
                        <img src="{{ $partner->image[0]['sizes']['medium_large'] }}" alt="{{ $partner->image[0]['alt'] }}">
                        @else
                            <img src="{{ $partner->image[0]['url'] }}" alt="{{ $partner->image[0]['alt'] }}">
                        @endif
                    </div>

                    {{-- @endif --}}
                    @endforeach
                    {{-- @endif --}}
                    @endif
                </div>
                
            </div>
            <div class="{{ $swiperPaginationClass }}"></div>
        </div>

    </div>
</div>
