@extends('templates.wtme')
@section('page_title', $data['head_title'])
@section('meta_description', $data['meta_description'])
@section('content')
    <div class="standardPage">
    @include('snippets.contentSections')
    </div>
@endsection
@section('before_closing_body_tag')
    <script>
        const marketingTermBoxes = document.querySelectorAll('.mTermBox');
        if(marketingTermBoxes.length) {
            marketingTermBoxes.forEach(mtb => {
                mtb.style.backgroundColor = mtb.dataset.color;
            });
        }
    </script>
@endsection
