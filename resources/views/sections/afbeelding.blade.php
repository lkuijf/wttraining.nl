<picture class="imgHolder">
    <source media="(min-width:480px)" srcset="{!! $imgUrlLarge !!}">
    {{-- <source media="(min-width:465px)" srcset="{{ asset('statics/instagram.png') }}"> --}}
    <img src="{!! $imgUrlMedium !!}" alt="{{ $imgAlt }}" loading="lazy">
</picture>