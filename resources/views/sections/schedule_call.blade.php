<div class="inner">
    <div class="scheduleCallContent">

        <div class="twoColumns">
            {{-- <div class="inner"> --}}
            <div class="columns">
                <div>
                    <form action="{{ route('submitScheduleCall') }}" method="POST" class="scheduleCallForm">
                        @method('POST')
                        @csrf
                        <input type="hidden" name="success_text" value="{{ $success_text }}">
                        <input type="hidden" name="email_to" value="{{ $email_to }}">
                        <div class="formRow">
                            <div><img src="{{ asset('statics/contact-user.png') }}" alt="naam" class="noshadow"></div>
                            <div @error('name')class="error" data-err-msg="{{ $message }}"@enderror><input type="text" name="name" value="{{ old('name') }}" placeholder="Je naam"></div>
                        </div>
                        <div class="formRow">
                            <div><img src="{{ asset('statics/contact-email.png') }}" alt="email" class="noshadow"></div>
                            <div @error('email')class="error" data-err-msg="{{ $message }}"@enderror><input type="text" name="email" value="{{ old('email') }}" placeholder="Je e-mail adres"></div>
                        </div>
                        <div class="formRow">
                            <div><img src="{{ asset('statics/contact-company.png') }}" alt="company" class="noshadow"></div>
                            <div><input type="text" name="company" value="{{ old('company') }}" placeholder="Bedrijfsnaam"></div>
                        </div>
                        <div class="formRow">
                            <div><img src="{{ asset('statics/contact-phone.png') }}" alt="message" class="noshadow"></div>
                            <div @error('phone')class="error" data-err-msg="{{ $message }}"@enderror><input type="text" name="phone" value="{{ old('phone') }}" placeholder="Je telefoonnummer"></div>
                        </div>
                        {{-- <div><textarea name="message" cols="30" rows="3" value="{{ old('message') }}" placeholder="Reden van contact"></textarea></div> --}}
                        <input type="text" name="valkuil" value="" class="snare">
                        <input type="text" name="valstrik" value="" class="snare">
                        <button type="submit"><span>Verzenden</span></button>
                    </form>
                    {{-- <p>asdf asdf asdf asdf asdf asdf asdf asdf asdf asd fsad f asdf asdf asdf asdf asd fa sdf</p> --}}
                </div>
                <div>
                    <h2>{{ $title }}</h2>
                    {!! $text !!}
                </div>
            </div>
            {{-- </div> --}}
        </div>

    </div>
</div>