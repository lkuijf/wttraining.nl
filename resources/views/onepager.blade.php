@extends('templates.wtme')
@section('page_title', $data['website_options']->meta_title)
@section('meta_description', $data['website_options']->meta_description)
@section('content')
    @include('snippets.contentSections')

    <div class="videoContent">
        <video
    id="my-video"
    class="video-js"
    controls
    preload="auto"
    width="640"
    height="264"
    poster="{{ asset('statics/wtt-logo.png') }}"
    data-setup="{}"
  >
    <source src="{{ asset('video/oceans.mp4') }}" type="video/mp4" />
    {{-- <source src="MY_VIDEO.webm" type="video/webm" /> --}}
    <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a
      web browser that
      <a href="https://videojs.com/html5-video-support/" target="_blank"
        >supports HTML5 video</a
      >
    </p>
  </video>
    </div>

@endsection
@section('subscriptionForm')
    @include('snippets.subscription-form')
@endsection
@section('before_closing_body_tag')
    <script src="{{ asset('js/video.min.js') }}"></script>
    <script>
        const player = videojs('my-video');
        player.fluid(true);
    </script>
@endsection