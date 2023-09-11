@if ($secData->_type == 'tekst')
    @php
        $secData->text = str_replace('---', '<hr>', $secData->text);
    @endphp
    @include('sections.' . $layout . '_text', [
        'text' => $secData->text,
        ])
@endif
@if ($secData->_type == 'afbeelding')
    @include('sections.' . $layout . '_afbeelding', [
    'imgUrlMedium' => $secData->image[0]['sizes']['medium_large'],
    'imgUrlLarge' => $secData->image[0]['sizes']['large'],
    'imgAlt' => $secData->image[0]['alt'],
    ])
@endif
@if ($secData->_type == 'button')
    @include('sections.' . $layout . '_button', ['url' => $secData->url, 'title' => $secData->title])
@endif
@if ($secData->_type == 'services_buttons')
    @include('sections.' . $layout . '_services_buttons')
@endif
