@extends('templates.wtme')
@section('page_title', $data['head_title'])
@section('meta_description', $data['meta_description'])
@section('content')
    {{-- @include('snippets.contentSections') --}}
    <div class="standardPage">
        @include('sections.hero', [
            'images' => $data['blog_hero_gallery'],
            'title' => $data['blog_hero_title'],
            'text' => $data['blog_hero_text'],
            'isBlogHero' => true,
            // 'email' => $section->btn_email,
            // 'phone' => $section->btn_phone,
            ])
        <div class="blogBumper">
            <div class="bumperInner">
                <div>{{ $data['hero_sub_title'] }}</div>
                <div>{{ date('d F Y', strtotime($data['blog_date'])) }}</div>
            </div>
        </div>
        <div class="inner">
            <article class="detailArticle">
                {!! $data['blog_text'] !!}
                <p><a href="/blog" class="toBlogBtn">Naar blog overzicht</a></p>
            </article>
        </div>
    </div>
@endsection
@section('extra_head')
    <meta property="og:title" content="{{ $data['head_title'] }}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="{{ url()->full() }}" />
    @if (isset($data['blog_hero_gallery'][0]['sizes']) && $data['blog_hero_gallery'][0]['sizes'])<meta property="og:image" content="{{ $data['blog_hero_gallery'][0]['sizes']['large'] }}" />@endif
@endsection
