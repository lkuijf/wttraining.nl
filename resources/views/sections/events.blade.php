<div class="inner">
    <div class="casesContent">

        <div class="outerSwiperBox">
            <div class="swiper {{ $swClass }}">
                <div class="swiper-wrapper">

                    @if($cases && count($cases))
                        @foreach ($cases as $case)
                            <div class="swiper-slide">
                                <div>
                                    <article>
                                        <div class="outerFlip">
                                            <div class="innerFlip">
                                                <div class="flipFront">
                                                    @if (isset($case->gallery[0]) && isset($case->gallery[0]['sizes']))
                                                        <img src="{{ $case->gallery[0]['sizes']['medium_large'] }}" alt="{{ $case->gallery[0]['alt'] }}">
                                                    @else
                                                        <img src="{{ $case->gallery[0]['url'] }}" alt="{{ $case->gallery[0]['alt'] }}">
                                                    @endif
                                                </div>
                                                <div class="flipBack">
                                                    <div>
                                                        <p>{{ $case->card_text }}</p>
                                                        @if (isset($showCaseCat) && $showCaseCat)
                                                            <p>{{ $case->categories[0]->name }}</p>
                                                        @endif
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h3><a href="{{ url('case/' . $case->slug) }}">{{ $case->title->rendered }}</a></h3>
                                    </article>
                                </div>
                        </div>
                        @endforeach
                    @endif

                </div>
            </div>

            <div class="swiperBtn swiper-button-prev {{ $swBtnPrev }}"></div>
            <div class="swiperBtn swiper-button-next {{ $swBtnNext }}"></div>

            {{-- <div class="swiper-scrollbar-cases"></div> --}}
        </div>

    </div>
</div>
