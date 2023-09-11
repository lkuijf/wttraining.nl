<div class="inner">
    <div class="casesContent">
        @if($cases && count($cases))
            @foreach ($cases as $case)
                <div>
                    <a href="{{ url('diensten/' . $case->categories[0]->slug . '/' . $case->slug) }}">
                        <div>
                            <p>{{ $case->title }}</p>
                            <p>{{ $case->categories[0]->name }}</p>
                        </div>
                        @if (isset($case->gallery[0]) && isset($case->gallery[0]['sizes']))
                            <img src="{{ $case->gallery[0]['sizes']['medium_large'] }}" alt="{{ $case->gallery[0]['alt'] }}" loading="lazy">
                        @else
                            <img src="{{ $case->gallery[0]['url'] }}" alt="{{ $case->gallery[0]['alt'] }}" loading="lazy">
                        @endif
                    </a>
                </div>
            @endforeach
        @endif
    </div>
</div>
