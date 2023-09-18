<div class="inner">
    <div class="approachTilesContent displayAs_{{ $displayType }}">
        @if($approaches && count($approaches))
        @foreach ($approaches as $approach)
        <article>
            <div class="outerFlip">
                <div class="innerFlip">
                    <div class="flipFront">
                        {{-- <a href="{{ url('diensten/' . $case->categories[0]->slug . '/' . $case->slug) }}"> --}}
                            @if (isset($approach->image[0]) && isset($approach->image[0]['sizes']))
                                <img src="{{ $approach->image[0]['sizes']['medium_large'] }}" alt="{{ $approach->image[0]['alt'] }}" loading="lazy">
                            @else
                                <img src="{{ $approach->image[0]['url'] }}" alt="{{ $approach->image[0]['alt'] }}" loading="lazy">
                            @endif
                        {{-- </a> --}}
                        <h3>{{ $approach->approach_title }}</h3>
                    </div>
                    <div class="flipBack">
                        {{-- <p>{{ $case->card_text }}</p>
                        @if (isset($showCaseCat) && $showCaseCat)
                            <p>{{ $case->categories[0]->name }}</p>
                        @endif --}}
                        <p>{{ $approach->approach_text }}</p>
                    </div>
                </div>
            </div>
        </article>
        {{-- <article>
            <div><img src="{!! $teamMember->image[0]['sizes']['medium_large'] !!}" alt="{{ $teamMember->image[0]['alt'] }}"></div>
            <div>
                <h3>{{ $teamMember->title->rendered }}</h3>
                {!! $teamMember->text !!}
            </div>
        </article> --}}
        @endforeach
        @endif
    </div>
</div>
