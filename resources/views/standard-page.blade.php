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
        const events = document.querySelectorAll('.eventCases a');
        const marketingTermBoxes = document.querySelectorAll('.mTermBox');
        const toggleEventsBtn = document.querySelector('.toggleEvents a');
        const initialWebDevCase = document.querySelector('.webDevGallery a');
        const allHiddenWebDevCases = document.querySelectorAll('.hiddenWebDevCases a');
        const webDevPrevBtn = document.querySelector('.wdnPref');
        const webDevNextBtn = document.querySelector('.wdnNext');
        const webDevTitle = document.querySelector('.wdnTitle');
        
        if(webDevPrevBtn && webDevNextBtn) {
            let curIndex = -1; // -1 is the initial shown item
            let initHref = initialWebDevCase.href;
            let initImage = initialWebDevCase.querySelector('img').src;
            let initTitle = initialWebDevCase.querySelector('img').dataset.title;

            webDevNextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                curIndex++;
                if(allHiddenWebDevCases[curIndex]) {
                    setNewImageValues(allHiddenWebDevCases[curIndex]);
                } else {
                    curIndex--;
                }
            });
            webDevPrevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                curIndex--;
                if(curIndex == -1) {
                    initialWebDevCase.href = initHref;
                    initialWebDevCase.querySelector('img').src = initImage;
                    webDevTitle.innerHTML = initTitle;
                } else if(allHiddenWebDevCases[curIndex]) {
                    setNewImageValues(allHiddenWebDevCases[curIndex]);
                } else {
                    curIndex++;
                }
            });
        }
        function setNewImageValues(sourceElement) {
            let hdnImage = sourceElement.querySelector('img');
            let img = initialWebDevCase.querySelector('img');
            initialWebDevCase.href = sourceElement.href
            img.src = hdnImage.src;
            webDevTitle.innerHTML = hdnImage.dataset.title;
        }
        


        if(marketingTermBoxes.length) {
            marketingTermBoxes.forEach(mtb => {
                mtb.style.backgroundColor = mtb.dataset.color;
            });
        }
        if(events.length) {
            hideEvents(events);
        }
        if(toggleEventsBtn) {
            toggleEventsBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if(toggleEventsBtn.classList.contains("eventsVisible")) {
                    hideEvents(events);
                    toggleEventsBtn.innerHTML = 'Bekijk meer';
                } else {
                    showEvents(events);
                    toggleEventsBtn.innerHTML = 'Bekijk minder';
                }
                toggleEventsBtn.classList.toggle('eventsVisible');
            });
        }
        function hideEvents(events) {
            events.forEach((ev,k) => {
                ev.classList.remove('hoverEffectFullList');
                if(k > 3) {
                    ev.style.display = 'none';
                }
            });
        }
        function showEvents(events) {
            events.forEach((ev,k) => {
                ev.style.display = 'block';
                ev.classList.add('hoverEffectFullList');
            });
        }
    </script>
@endsection
