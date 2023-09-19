<div class="inner">
    <div class="trainingsContent">

        <div class="outerSwiperBox">
            <div class="swiper trainingsSwiper{{ $counter }}">
                <div class="swiper-wrapper">

                @if($trainings && count($trainings))
                    @foreach ($trainings as $case)
                    <div class="swiper-slide">
                        <div>
                            <article>
                                <div class="outerFlip">
                                    <div class="innerFlip">
                                        <div class="flipFront">

                                            @if (isset($case->card_logo[0]) && isset($case->card_logo[0]['sizes']))
                                                <img class="cardLogo" src="{{ $case->card_logo[0]['sizes']['medium'] }}" alt="{{ $case->card_logo[0]['alt'] }}" loading="lazy">
                                            @endif


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
                                <p><a href="{{ url('training/' . $case->slug) }}">{{ $case->title }}</a></p>
                            </article>
                        </div>
                    </div>
                    @endforeach
                @endif

                </div>
            </div>

            <div class="swiperBtn swiper-button-prev swiperBtnPrevTrainings{{ $counter }}"></div>
            <div class="swiperBtn swiper-button-next swiperBtnNextTrainings{{ $counter }}"></div>

            {{-- <div class="swiper-scrollbar-cases"></div> --}}
        </div>


    </div>
</div>
