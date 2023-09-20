<div class="banner">
    <div class="bannerOverlay">
        <div>
            <div class="heroText">
                @if (isset($title) && $title)
                    <h1>{!! $title !!}</h1>
                @endif
                @if (isset($text) && $text)
                    <p>{!! $text !!}</p>
                @endif
            </div>
            @if ((isset($email) && $email))
            <div class="makeContact">
                @if (isset($email) && $email)
                    <a href="mailto:{{ $email }}" class="email">@if($email_text){{ $email_text }}@else{{ 'Stuur een e-mail' }}@endif</a>
                @endif
            </div>
            @endif
        </div>
    </div>
    <div class="bannerImages">
        <div>
            @if (isset($image))
                @if (isset($image['sizes']) && $image['sizes'])
                    <img src="{!! $image['sizes']['2048x2048'] !!}" alt="{{ $image['alt'] }}">
                @else
                    <img src="{!! $image['url'] !!}" alt="{{ $image['alt'] }}">
                @endif
            @endif
        </div>
    </div>
</div>