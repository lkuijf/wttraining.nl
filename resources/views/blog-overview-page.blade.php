@extends('templates.wtme')
@section('page_title', $data['head_title'])
@section('meta_description', $data['meta_description'])
@section('content')
    <div class="standardPage">
    {{-- @include('snippets.contentSections') --}}
    <div class="inner">
        <h1 style="text-align:center;padding:40px 0;">BLOG</h1>
    </div>
    @include('sections.blog_items', ['blog_items' => $data['blog_items']])
    </div>
@endsection