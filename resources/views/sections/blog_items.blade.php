<div class="blogWrap">
    @foreach ($blog_items as $blogItem)
        <article>
            @if (isset($blogItem->gallery[0]) && isset($blogItem->gallery[0]['sizes']))
                <img src="{{ $blogItem->gallery[0]['sizes']['medium_large'] }}" alt="{{ $blogItem->gallery[0]['alt'] }}">
            @else
                <img src="{{ $blogItem->gallery[0]['url'] }}" alt="{{ $blogItem->gallery[0]['alt'] }}">
            @endif
            <div>
                <p class="date">{{ date('d-m', strtotime($blogItem->date)) }}</p>
                <h2>{{ (isset($blogItem->title->rendered)?$blogItem->title->rendered:$blogItem->title) }}</h2>
                <p>{!! $blogItem->card_text !!}</p>
                <p><a href="{{ url('blog/' . $blogItem->slug) }}">Lees verder ></a></p>
            </div>
        </article>
    @endforeach
</div>
