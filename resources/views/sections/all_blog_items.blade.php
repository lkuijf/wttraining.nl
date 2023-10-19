@if($data['blog_items'] && count($data['blog_items']))
@foreach ($data['blog_items'] as $blogitem)
<div>
    <img src="{!! $blogitem->image[0]['sizes']['medium_large'] !!}" alt="{{ $blogitem->image[0]['alt'] }}" loading="lazy">
    {{-- <p>{{ $member->title }}</p>
    <p>{{ $member->function }}</p> --}}
</div>
@endforeach
@endif
