<div class="blogWrap">
    @foreach ($data['blog_items'] as $blogItem)
        <article>
            @if (isset($blogItem->card_image[0]) && isset($blogItem->card_image[0]['sizes']) && $blogItem->card_image[0]['sizes'])
                <img src="{{ $blogItem->card_image[0]['sizes']['medium_large'] }}" alt="{{ $blogItem->card_image[0]['alt'] }}">
            @else
                <img src="{{ $blogItem->card_image[0]['url'] }}" alt="{{ $blogItem->card_image[0]['alt'] }}">
            @endif
            <div>
                {{-- <p class="date">{{ date('d.m', strtotime($blogItem->date)) }}<span>&nbsp;</span></p> --}}
                <h2>{{ $blogItem->card_title }}</h2>
                <p>{!! $blogItem->card_text !!}</p>
                <p><a href="{{ url('blog/' . $blogItem->slug) }}">Lees verder ></a></p>
            </div>
        </article>
    @endforeach
</div>
