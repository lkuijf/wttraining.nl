<div class="inner">
    <div class="casesContentDiensten eventCases">
        {{-- @include('sections.cases', ['cases' => $cases, 'type' => 'events']) --}}
        @include('sections.events', ['cases' => $cases])
    </div>
    {{-- <p class="toggleEvents"><a href="">Bekijk meer</a></p> --}}
</div>