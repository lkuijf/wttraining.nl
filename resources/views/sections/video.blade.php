<div class="videoContent">
    <video
id="my-video"
class="video-js vjs-fluid vjs-16-9"
controls
preload="auto"
width="640"
height="264"
poster="{{ asset('statics/wtt-logo.png') }}"
data-setup="{}"
>
<source src="{{ $videoUrl }}" type="video/mp4" />
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
