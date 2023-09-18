<div class="inner">
    <div class="casesContent">
        @if($cases && count($cases))
            @foreach ($cases as $case)
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
                                <p>{{ $case->card_text }}</p>
                                @if (isset($showCaseCat) && $showCaseCat)
                                    <p>{{ $case->categories[0]->name }}</p>
                                @endif
                            </div>
                        </div>
                    </div>
                    <p><a href="{{ url('case/' . $case->slug) }}">{{ $case->title->rendered }}</a></p>
                </article>
            @endforeach
        @endif
    </div>
</div>
