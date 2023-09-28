<div class="inner">
    <div class="teammembersContent">

        <div class="outerSwiperBox">
            <div class="swiper {{ $swClass }}">
                <div class="swiper-wrapper">
                    @if($data['team_members'] && count($data['team_members']))
                    @foreach ($data['team_members'] as $member)
                    <div class="swiper-slide">
                        <img src="{!! $member->image[0]['sizes']['medium_large'] !!}" alt="{{ $member->image[0]['alt'] }}" loading="lazy">
                        <p>{{ $member->title }}</p>
                        <p>{{ $member->function }}</p>
                    </div>
                    @endforeach
                    @endif
                </div>
                
            </div>

            <div class="swiperBtn swiper-button-prev {{ $swBtnPrev }}"></div>
            <div class="swiperBtn swiper-button-next {{ $swBtnNext }}"></div>

            {{-- <div class="swiper-scrollbar-team"></div> --}}
            {{-- <div class="swiper-pagination-team"></div> --}}
        </div>

    </div>
</div>
