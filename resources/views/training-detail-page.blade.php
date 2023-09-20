@extends('templates.wtme')
@section('page_title', $data['head_title'])
@section('meta_description', $data['meta_description'])
@section('content')
    <div class="standardPage">
        @include('sections.hero', [
            'images' => array($data['gallery'][0]),
            'title' => $data['hero_title'],
            // 'text' => $data['hero_text'],
            // 'email' => $section->btn_email,
            // 'phone' => $section->btn_phone,
            ])
        <div class="inner">
            <article class="detailArticle">
                <div class="training">
                    @if ($data['t_location'] || $data['t_participants'] || $data['t_time'] || $data['t_requirements'])
                    <div class="trainingSpecs">
                        @if ($data['t_location'])
                        <div>
                            <div><img src="{{ asset('statics/study-type.png') }}" alt="Study type"></div>
                            <div><p>{{ $data['t_location'] }}</p></div>
                        </div>
                        @endif
                        @if ($data['t_participants'])
                        <div>
                            <div><img src="{{ asset('statics/study-capacity.png') }}" alt="Study capacity"></div>
                            <div><p>{{ $data['t_participants'] }}</p></div>
                        </div>
                        @endif
                        @if ($data['t_time'])
                        <div>
                            <div><img src="{{ asset('statics/study-time.png') }}" alt="Study time"></div>
                            <div><p>{{ $data['t_time'] }}</p></div>
                        </div>
                        @endif
                        @if ($data['t_requirements'])
                        <div>
                            <div><img src="{{ asset('statics/study-requirements.png') }}" alt="Study requirements"></div>
                            <div>{!! $data['t_requirements'] !!}</div>
                        </div>
                        @endif
                    </div>
                    @endif
                    <div>{!! $data['text'] !!}</div>
                </div>
                <div class="caseDetailImageWrapper">
                    @foreach ($data['gallery'] as $image)
                        @if (isset($image['sizes']) && $image['sizes'])
                            {{-- <a data-fslightbox="first-lightbox" href="{{ str_replace('https://wtmedia-events.nl', '', $image['sizes']['large']) }}"><img src="{{ $image['sizes']['medium_large'] }}" alt="{{ $image['alt'] }}"></a> --}}
                            <img class="gallery_image" src="{{ $image['sizes']['medium_large'] }}" alt="{{ $image['alt'] }}" data-description="{{ $image['alt'] }}" data-large="{{ $image['sizes']['large'] }}">
                        @endif
                    @endforeach
                </div>
            </article>
            @if ($data['faqs'] && count($data['faqs']))
            <div class="faqs">
                <h2>FAQ</h2>
                @foreach ($data['faqs'] as $faq)
                    <div>
                        <h3>{{ $faq->question }}</h3>
                        <div class="answer">{!! $faq->answer !!}</div>
                    </div>
                @endforeach
            </div>
            @endif
        </div>
    </div>
@endsection
@section('extra_head')
    <link rel="stylesheet" href="{{ asset('css/asyncGallery.css') }}">
    {{-- <link rel="stylesheet" href="{{ asset('css/lightbox.min.css') }}"> --}}
    <meta property="og:title" content="{{ $data['head_title'] }}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="{{ url()->full() }}" />
    @if (isset($data['gallery'][0]['sizes']))<meta property="og:image" content="{{ $data['gallery'][0]['sizes']['large'] }}" />@endif
@endsection
@section('before_closing_body_tag')
    <script src="{{ asset('js/asyncGallery.js') }}"></script>
    {{-- <script src="{{ asset('js/fslightbox.js') }}"></script> --}}
    {{-- <script src="{{ asset('js/lightbox.min.js') }}"></script> --}}
@endsection
