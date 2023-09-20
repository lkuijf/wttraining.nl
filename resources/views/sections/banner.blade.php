<div class="banner">
    <div class="bannerOverlay">
        <div>
            <div class="bannerText">
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
                    <a href="mailto:{{ $email }}">@if($email_text){{ $email_text }}@else{{ 'Stuur een e-mail' }}@endif</a>
                @endif
            </div>
            @endif
        </div>
    </div>
    <div class="bannerImage">
        {{-- <div> --}}
            @if (isset($image))
                @if (isset($image[0]['sizes']) && $image[0]['sizes'])
                    <img src="{!! $image[0]['sizes']['2048x2048'] !!}" alt="{{ $image[0]['alt'] }}">
                @else
                    <img src="{!! $image[0]['url'] !!}" alt="{{ $image[0]['alt'] }}">
                @endif
            @endif
        {{-- </div> --}}
    </div>
</div>