<div class="inner">
    <div class="subscribeContent">
        <p class="getUpdatesText">{!! $data['website_options']->subscribe_text !!}</p>
    </div>
    <form action="/submit-subscription-form" method="post" class="subscriptionForm">
        @csrf
        <div @error('Email')class="error" data-err-msg="{{ $message }}"@enderror><input type="text" name="Email" placeholder="E-mail adres" value="{{ old('Email') }}"></div>
        <input type="text" name="valkuil" value="" class="snare">
        <input type="text" name="valstrik" value="" class="snare">
        <button type="submit">Aanmelden</button>
    </form>
</div>
