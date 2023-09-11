@foreach ($cases as $case)
    @if (isset($case->gallery[0]['sizes']))
        <a href="{{ url('diensten') . '/' . $type . '/' .  $case->slug }}">
            @if ($type == 'events')
            <div>
                <p>{{ $case->title }}</p>
                {{-- <p>- {{ $case->categories[0]->name }} -</p> --}}
            </div>
            @endif
            @if ($type == 'webdevelopment')
                <img src="{{ $case->gallery[0]['sizes']['medium_large'] }}" alt="{{ $case->gallery[0]['alt'] }}" data-title="{{ $case->title }}">
            @else
                <img src="{{ $case->gallery[0]['sizes']['medium_large'] }}" alt="{{ $case->gallery[0]['alt'] }}">
            @endif
        </a>
    @else
        <a href="{{ url('diensten') . '/' . $type . '/' .  $case->slug }}">
            <img src="{{ $case->gallery[0]['url'] }}" alt="{{ $case->gallery[0]['alt'] }}">
        </a>
    @endif
@endforeach
