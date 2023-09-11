{{-- <form action="/submit-contact-form" method="post" id="contactForm">
    @csrf
    <div class="fieldlist">
        <div><label for="form-name">Naam *</label><br /><input type="text" id="form-name" name="Naam" value="{{ old('Naam') }}"></div>
        <div><label for="form-phone">Telefoon</label><br /><input type="text" id="form-phone" name="Telefoon" value="{{ old('Telefoon') }}"></div>
        <div><label for="form-email">Email Adres *</label><br /><input type="text" id="form-email" name="Emailadres" value="{{ old('Emailadres') }}"></div>
        <div><label for="form-company">Bedrijfsnaam</label><br /><input type="text" id="form-company" name="Bedrijfsnaam" value="{{ old('Bedrijfsnaam') }}"></div>    
    </div>
    <div><label for="form-message">Bericht *</label><br /><textarea id="form-message" name="Bericht" rows="6" cols="20">{{ old('Bericht') }}</textarea></div>
    <div><input type="checkbox" id="form-receive-updates" name="AanmeldenNieuwsbrief" value="Ja"{{ old('AanmeldenNieuwsbrief') == 'Ja' ? ' checked' : '' }}><label for="form-receive-updates">Ik meld mij aan voor de nieuwsbrief</label></div>
    <div><button type="submit"><span>Verzenden</span></button></div>
</form>
<hr /> --}}
<form action="/submit-contact-form" method="post" class="contactForm">
    <h2>CONTACT <strong>FORM</strong></h2>
    @csrf
    <div class="fieldlist">
        <div @error('Naam')class="error" data-err-msg="{{ $message }}"@enderror><label for="form-name">Name *</label><br /><input type="text" id="form-name" name="Naam" value="{{ old('Naam') }}"></div>
        <div><label for="form-phone">Phone number</label><br /><input type="text" id="form-phone" name="Telefoon" value="{{ old('Telefoon') }}"></div>
        <div @error('E-mail_adres')class="error" data-err-msg="{{ $message }}"@enderror><label for="form-email">E-mail Address *</label><br /><input type="text" id="form-email" name="E-mail_adres" value="{{ old('E-mail_adres') }}"></div>
        <div><label for="form-company">Company</label><br /><input type="text" id="form-company" name="Bedrijfsnaam" value="{{ old('Bedrijfsnaam') }}"></div>    
    </div>
    <div @error('Bericht')class="error" data-err-msg="{{ $message }}"@enderror><label for="form-message">Message *</label><br /><textarea id="form-message" name="Bericht" rows="6" cols="20">{{ old('Bericht') }}</textarea></div>
    <div><input type="checkbox" id="form-receive-updates" name="Aanmelden_nieuwsbrief" value="Ja"{{ old('Aanmelden_nieuwsbrief') == 'Ja' ? ' checked' : '' }}><label for="form-receive-updates">Please send me the newsletter</label></div>

    <div @error('Accept_conditions')class="error" data-err-msg="{{ $message }}"@enderror><input type="checkbox" id="form-accept-conditions" name="Accept_conditions" value="Ja"{{ old('Accept_conditions') == 'Ja' ? ' checked' : '' }}><label for="form-accept-conditions">I have read and accept the <a href="{{ url('general-conditions') }}">general conditions</a>.</label></div>

    <div>
        <input type="text" name="valkuil" value="" class="snare">
        <input type="text" name="valstrik" value="" class="snare">
        <button type="submit"><span>Send</span></button>
        {{-- <button type="submit" class="g-recaptcha" data-sitekey="6LdpSX0eAAAAANrVFYR0hn3Lw63hrhK0r04UhOGN" data-callback="onSubmit" data-action="submit"><span>Send</span></button> --}}
    </div>
</form>
