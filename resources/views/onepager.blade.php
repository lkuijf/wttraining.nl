@extends('templates.wtme')
@section('page_title', $data['website_options']->meta_title)
@section('meta_description', $data['website_options']->meta_description)
@section('content')
    @include('snippets.contentSections')
@endsection
@section('subscriptionForm')
    @include('snippets.subscription-form')
@endsection
