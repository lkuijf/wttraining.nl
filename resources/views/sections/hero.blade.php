@if (isset($isBlogHero) && $isBlogHero)
<div class="inner heroTextBlog">
    @if (isset($title) && $title)
        <h1>{!! $title !!}</h1>
    @endif
    @if (isset($text) && $text)
        <p>{!! $text !!}</p>
    @endif
</div>
@endif
<div class="hero">
    @if (!isset($isBlogHero) || !$isBlogHero)
    <div class="heroOverlay @if(isset($bCenterText) && $bCenterText){{ 'centerText' }}@endif">
        <div>
            <div class="heroText">
                @if (isset($title) && $title)
                    <h1>{!! $title !!}</h1>
                @endif
                @if (isset($text) && $text)
                    <p>{!! $text !!}</p>
                @endif
            </div>
            @if ((isset($email) && $email) || (isset($phone) && $phone))
            <div class="makeContact">
                @if (isset($email) && $email)
                    <a href="mailto:{{ $email }}" class="email">@if($email_text){{ $email_text }}@else{{ 'Stuur een e-mail' }}@endif</a>
                @endif
                @if (isset($phone) && $phone)
                    <a href="tel:{{ $phone }}" class="phone"><span>Bel ons</span></a>
                @endif
            </div>
            @endif
        </div>
    </div>
    @endif
    <div class="heroImages zoom">
        <div>
            @if (isset($images))
            @foreach ($images as $image)
            <picture>
                @if (isset($image['sizes']) && $image['sizes'])
                    <source media="(min-width:480px)" srcset="{!! $image['sizes']['medium_large'] !!}">
                    <img src="{!! $image['sizes']['2048x2048'] !!}" alt="{{ $image['alt'] }}">
                @else
                    <img src="{!! $image['url'] !!}" alt="{{ $image['alt'] }}">
                @endif
            </picture>
            @endforeach
            @endif
        </div>
    </div>
</div>
