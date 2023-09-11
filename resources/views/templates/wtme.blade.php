<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('page_title')</title>
    <meta name="description" content="@yield('meta_description')">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('favicon-32x32.png') }}"">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('favicon-16x16.png') }}">
    <link rel="manifest" href="{{ asset('site.webmanifest') }}">
    <link rel="mask-icon" href="{{ asset('safari-pinned-tab.svg') }}" color="#19b4b6">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="theme-color" content="#19b4b6">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Karla:wght@200&display=swap" rel="stylesheet">
    <script src="{{ asset('js/swiper-bundle.min.js') }}"></script>
    <link rel="stylesheet" href="{{ asset('css/swiper-bundle.min.css') }}">
    <link rel='stylesheet' href='{{ asset('_mcfu638b-cms/wp-content/plugins/instagram-feed/css/sbi-styles.min.css?ver=6.1.5') }}' type='text/css' media='all' />
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
    <meta name="_token" content="{{ csrf_token() }}">
    @yield('extra_head')
    
<!-- Leadinfo tracking code -->
<script> (function(l,e,a,d,i,n,f,o){if(!l[i]){l.GlobalLeadinfoNamespace=l.GlobalLeadinfoNamespace||[];
l.GlobalLeadinfoNamespace.push(i);l[i]=function(){(l[i].q=l[i].q||[]).push(arguments)};l[i].t=l[i].t||n;
l[i].q=l[i].q||[];o=e.createElement(a);f=e.getElementsByTagName(a)[0];o.async=1;o.src=d;f.parentNode.insertBefore(o,f);}
}(window,document,"script","https://cdn.leadinfo.net/ping.js","leadinfo","LI-6479E387ADE15")); </script>

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
            <div class="mainLogoWrap"><a href="{{ url()->route('home') }}"><img src="{{ asset('statics/wt-media-events-logo.png') }}" alt="WT Media & Events"></a></div>
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
        @include('snippets.subscription-form')
    </div>
    
    <footer>
        <div class="inner">
            <div class="ftr">
                <div class="footerContact">
                    <img src="{{ asset('statics/wt-media-events-logo.png') }}" alt="WT Media & Events">
                    <a href="mailto:support@wtmedia-events.nl">CONTACT</a>
                </div>
                <nav>
                    {!! $data['html_menu'] !!}
                </nav>
            </div>
            <div class="btm">
                <p>&copy; W.T. Media &amp; Events | <a href="{{ url('privacy-policy') }}">Privacy Policy</a> | {{ date('Y') }} All Rights Reserved</p>
                <p class="socials">
                    <a href="https://www.instagram.com/wtmedia_events/" target="_blank" class="ig"><img src="{{ asset('statics/instagram.png') }}" alt="Instagram"></a>
                    <a href="https://www.facebook.com/profile.php?id=100083027634220" target="_blank" class="fb"><img src="{{ asset('statics/facebook.png') }}" alt="Facebook"></a>
                    <a href="https://www.linkedin.com/company/w-t-media-events/" target="_blank" class="li"><img src="{{ asset('statics/linkedin.png') }}" alt="LinkedIn"></a>
                </p>
                {{-- <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script><div class="elfsight-app-a6161f0f-1cc2-420f-9dc7-d19848614a67"></div> --}}
                {{-- <div class="embedsocial-hashtag" data-ref="cb4f26c68a893f54158863a0aecf5a38c087439e"> <a class="feed-powered-by-es feed-powered-by-es-feed-new" href="https://embedsocial.com/social-media-aggregator/" target="_blank" title="Widget by EmbedSocial"> Widget by EmbedSocial<span>→</span> </a> </div> <script> (function(d, s, id) { var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/cdn/ht.js"; d.getElementsByTagName("head")[0].appendChild(js); }(document, "script", "EmbedSocialHashtagScript")); </script> --}}
                {!! $data['instagram_widget_code'] !!}
            </div>
        </div>
    </footer>

    <a href="" id="toTop"></a>
    <script src="{{ asset('js/script.js') }}"></script>
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
    <!-- Instagram Feed JS -->
    <script type="text/javascript">
        var sbiajaxurl = "https://wtmedia-events.nl/_mcfu638b-cms/wp-admin/admin-ajax.php";
    </script>
    <script type='text/javascript' src='https://wtmedia-events.nl/_mcfu638b-cms/wp-includes/js/jquery/jquery.min.js?ver=3.6.4' id='jquery-core-js'></script>
    <script type='text/javascript' src='https://wtmedia-events.nl/_mcfu638b-cms/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.0' id='jquery-migrate-js'></script>
    <script type='text/javascript' id='sbi_scripts-js-extra'>
    /* <![CDATA[ */
    var sb_instagram_js_options = {"font_method":"svg","resized_url":"https:\/\/wtmedia-events.nl\/_mcfu638b-cms\/wp-content\/uploads\/sb-instagram-feed-images\/","placeholder":"https:\/\/wtmedia-events.nl\/_mcfu638b-cms\/wp-content\/plugins\/instagram-feed\/img\/placeholder.png","ajax_url":"https:\/\/wtmedia-events.nl\/_mcfu638b-cms\/wp-admin\/admin-ajax.php"};
    /* ]]> */
    </script>
    <script type='text/javascript' src='https://wtmedia-events.nl/_mcfu638b-cms/wp-content/plugins/instagram-feed/js/sbi-scripts.min.js?ver=6.1.5' id='sbi_scripts-js'></script>
    <script>
        setReviewsShowMoreToggleButtons();
    </script>
    @yield('before_closing_body_tag')
</body>
</html>