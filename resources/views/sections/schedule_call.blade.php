<div class="inner">
    <div class="scheduleCallContent">

        <div class="twoColumns">
            {{-- <div class="inner"> --}}
            <div class="columns">
                <div>
                    <form action="{{ route('submitScheduleCall') }}" method="POST">
                        @method('POST')
                        @csrf
                        <input type="hidden" name="success_text" value="{{ $success_text }}">
                        <input type="hidden" name="email_to" value="{{ $email_to }}">
                        <div @error('name')class="error" data-err-msg="{{ $message }}"@enderror><input type="text" name="name" value="{{ old('name') }}" placeholder="Je naam"></div>
                        <div @error('email')class="error" data-err-msg="{{ $message }}"@enderror><input type="text" name="email" value="{{ old('email') }}" placeholder="Je e-mail adres"></div>
                        <div><input type="text" name="company" value="{{ old('company') }}" placeholder="Bedrijfsnaam"></div>
                        <div @error('phone')class="error" data-err-msg="{{ $message }}"@enderror><input type="text" name="phone" value="{{ old('phone') }}" placeholder="Je telefoonnummer"></div>
                        <div><textarea name="message" cols="30" rows="3" value="{{ old('message') }}" placeholder="Reden van contact"></textarea></div>
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