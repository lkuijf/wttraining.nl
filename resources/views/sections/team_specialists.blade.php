<div class="inner">
    <div class="teamSpecialistsContent">
        @foreach ($specialists as $teamMember)
        <article>
            <div><img src="{!! $teamMember->image[0]['sizes']['medium_large'] !!}" alt="{{ $teamMember->image[0]['alt'] }}"></div>
            <div>
                <h3>{{ $teamMember->title->rendered }}</h3>
                {!! $teamMember->text !!}
            </div>
        </article>
        @endforeach
    </div>
</div>
