<!DOCTYPE html>
<html lang="nl">
<head>
    {{ Vite::useBuildDirectory('bundle') }}
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('page_title')</title>
    <meta name="description" content="@yield('meta_description')">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#e7ac00">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="theme-color" content="#e7ac00">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Karla:wght@200&family=Oswald:wght@400;700&display=swap" rel="stylesheet">
    {{-- <script src="{{ asset('js/swiper-bundle.min.js') }}"></script> --}}
    {{-- <link rel="stylesheet" href="{{ asset('css/swiper-bundle.min.css') }}"> --}}
    {{-- <link rel="stylesheet" href="{{ asset('css/video-js.css') }}"> --}}
    {{-- <link rel="stylesheet" href="{{ asset('css/styles.css') }}"> --}}
    @vite(['resources/scss/styles.scss', 'resources/css/swiper-bundle.min.css', 'resources/css/video-js.css', 'resources/js/swiper-bundle.min.js'])
    <meta name="_token" content="{{ csrf_token() }}">
    @yield('extra_head')
    
</head>
<body>
    @yield('after_body_tag')
    @if(session('success'))
        <div class="alert alert-success">
            <div><p class="thumbsUpIcon"></p></div>
            {{-- @if(session('success') == 'contact')<div><p>{{ $data['website_options']->form_success }}</p></div>@endif --}}
            @if(session('success') == 'subscription')
                <div><p>{{ $data['website_options']->form_subscription_success }}</p></div>
            @else
                <div><p>{{ session('success') }}</p></div>
            @endif
            {{-- <div><p>Gelukt</p></div> --}}
        </div>
    @endif
    @if($errors->any())
        <div class="alert alert-danger">
            <div><p class="exclamationTriangleIcon"></p></div>
            <div><p>{{ $data['website_options']->form_error }}</p></div>
            {{-- <div><p>MISlukt</p></div> --}}
        </div>
    @endif

    <div class="alert alert-danger hideXhrError">
        <div><p class="exclamationTriangleIcon"></p></div>
        <div></div>
    </div>
    <div class="alert alert-success hideXhrSuccess">
        <div><p class="thumbsUpIcon"></p></div>
        <div><p>{{ $data['website_options']->form_subscription_success }}</p></div>
    </div>


    <header class="headerOuter">
        <div class="headerInnerWrap">
            <div class="mainLogoWrap"><a href="{{ url()->route('home') }}"><img src="{{ asset('statics/wtt-logo.png') }}" alt="WT Training"></a></div>
            <nav class="mainNav">
                <input type="checkbox" id="burger-check">
                <label for="burger-check" class="burger-label">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                {!! $data['html_menu'] !!}
            </nav>
        </div>
    </header>

    <div class="contentWrapper">
        @yield('content')
        @yield('subscriptionForm');
        {{-- @include('snippets.subscription-form') --}}
    </div>
    
    <footer>
        {{-- <div class="inner"> --}}
            <div class="ftr">
                <div class="footerContact">
                    <img src="{{ asset('statics/wtt-logo.png') }}" alt="WT Media & Events">
                    <a href="mailto:support@wtmedia-events.nl">CONTACT</a>
                </div>
                <nav>
                    {!! $data['html_menu'] !!}
                </nav>
            </div>
            <div class="btm">
                <p>&copy; W.T. Training | <a href="{{ url('privacy-policy') }}">Privacy Policy</a> | {{ date('Y') }} All Rights Reserved</p>
                <p class="socials">
                    @if ($data['website_options']->instagram)<a href="https://www.instagram.com/wtmedia_events/" target="_blank" class="ig"><img src="{{ asset('statics/instagram.png') }}" alt="Instagram"></a>@endif
                    @if ($data['website_options']->facebook)<a href="{{ $data['website_options']->facebook }}" target="_blank" class="fb"><img src="{{ asset('statics/facebook.png') }}" alt="Facebook"></a>@endif
                    @if ($data['website_options']->linkedin)<a href="https://www.linkedin.com/company/w-t-media-events/" target="_blank" class="li"><img src="{{ asset('statics/linkedin.png') }}" alt="LinkedIn"></a>@endif
                </p>
            </div>
        {{-- </div> --}}
    </footer>

    <a href="" id="toTop"></a>
    {{-- <script src="{{ asset('js/script.js') }}"></script> --}}
    @vite(['resources/js/script.js'])
    @if($errors->any())
    <script>
        const errors = document.querySelectorAll('.error');
        errors.forEach((el) => {
            const err = document.createElement('span');
            err.classList.add('errMsg');
            err.innerHTML = el.dataset.errMsg;
            el.appendChild(err);
        });
    </script>
    @endif
    {{-- <script>
        setReviewsShowMoreToggleButtons();
    </script> --}}
    @yield('before_closing_body_tag')
</body>
</html>