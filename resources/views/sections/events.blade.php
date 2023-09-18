<div class="inner">
    <div class="casesContent">


        <div class="outerSwiperBox">
            <div class="swiper casesSwiper">
                <div class="swiper-wrapper">


                    @if($cases && count($cases))
                        @foreach ($cases as $case)

                            {{-- <article class="swiper-slide">
                                111111111
                            </article>
                            <article class="swiper-slide">
                                22222222
                            </article>
                            <article class="swiper-slide">
                                33333333333
                            </article>
                            <article class="swiper-slide">
                                444444444
                            </article>
                            <article class="swiper-slide">
                                5555555555
                            </article>
                            <article class="swiper-slide">
                                666666666
                            </article> --}}

                            <div class="swiper-slide">
                                <div>
                                    <article>
                                        <div class="outerFlip">
                                            <div class="innerFlip">
                                                <div class="flipFront">
                                                    @if (isset($case->gallery[0]) && isset($case->gallery[0]['sizes']))
                                                        <img src="{{ $case->gallery[0]['sizes']['medium_large'] }}" alt="{{ $case->gallery[0]['alt'] }}" loading="lazy">
                                                    @else
                                                        <img src="{{ $case->gallery[0]['url'] }}" alt="{{ $case->gallery[0]['alt'] }}" loading="lazy">
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
                                        <p><a href="{{ url('case/' . $case->slug) }}">{{ $case->title->rendered }}</a></p>
                                    </article>
                                </div>
                        </div>
                        @endforeach
                    @endif


                </div>
            </div>
            <div class="swiper-scrollbar-cases"></div>
        </div>



    </div>
</div>
