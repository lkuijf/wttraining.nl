<div class="inner">
    <div class="marketingTermsContent">
        <div class="marketingTermsGrid">
            @if($image1) @include('sections.marketingTerm', ['image' => $image1, 'title' => $term1, 'text' => $term1_text, 'color' => '#5B0808']) @endif
            @if($image2) @include('sections.marketingTerm', ['image' => $image2, 'title' => $term2, 'text' => $term2_text, 'color' => '#246D57']) @endif
            @if($image3) @include('sections.marketingTerm', ['image' => $image3, 'title' => $term3, 'text' => $term3_text, 'color' => '#3F034A']) @endif
            @if($image4) @include('sections.marketingTerm', ['image' => $image4, 'title' => $term4, 'text' => $term4_text, 'color' => '#232F70']) @endif
            @if($image5) @include('sections.marketingTerm', ['image' => $image5, 'title' => $term5, 'text' => $term5_text, 'color' => '#3F034A']) @endif
            @if($image6) @include('sections.marketingTerm', ['image' => $image6, 'title' => $term6, 'text' => $term6_text, 'color' => '#232F70']) @endif
            {{-- @if($image7) @include('sections.marketingTerm', ['image' => $image7, 'title' => $term7, 'text' => $term7_text, 'color' => '#5B0808']) @endif
            @if($image8) @include('sections.marketingTerm', ['image' => $image8, 'title' => $term8, 'text' => $term8_text, 'color' => '#246D57']) @endif --}}
        </div>
    </div>
</div>