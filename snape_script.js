$(document).ready(function() {
    var move_forward = 0;
    var move_back = 0;
    var poison1 = 0;
    var poison2 = 0;
    var poison3 = 0;
    var wine1 = 0;
    var wine2 = 0;
    var anwsers = [];
    var version = 0;

    $('#into_ok').click(function() {
        $('#introduction').hide(500);
        $('#rules').show(500);
    });

    $('#rules_ok').click(function() {
        $('#rules').hide(500);
        $('#clues').show(500);
        $('#result').empty();
        $('#additional_clues').empty();
        anwsers = generateClues(move_forward, move_back, poison1, poison2, poison3, wine1, wine2, version);
        version = anwsers[7];
        $('#additional_clues').show(500);
        $('#question').show(500);
        $('#reroll').show(500);
    });

    $('#menu_rules').click(function() {
        $('#introduction').hide(500);
        $('#clues').hide(500);
        $('#additional_clues').hide(500);
        $('#question').hide(500);
        $('#result').hide(500);
        $('#result').empty();
        $('#rules').show(500);
    });

    $('#reroll').click(function() {
        $('#introduction').hide(500);
        $('#rules').hide(500);
        do {
            $('#result').hide(500);
            $('#result').empty();
            $('#additional_clues').empty();
            anwsers = generateClues(move_forward, move_back, poison1, poison2, poison3, wine1, wine2, version);
        }
        while (version == anwsers[7])
        version = anwsers[7]
        $('#clues').show(500);
        $('#additional_clues').show(500);
        $('#question').show(500);
        $('#reroll').empty();
        $('#reroll').append('Przelosuj zagadkę');
        $('#reroll').show(500);
    })

    $('#drink').click(function() {
        var number = parseInt($('#number').val());
        if (number == anwsers[2] || number == anwsers[3] || number == anwsers[4]) {
            $('#result').append('<p>Wypito truciznę.</p>')
        } else if (number == anwsers[5] || number == anwsers[6]) {
            $('#result').append('<p>Wypito wino.</p>')
        } else if (number == anwsers[1]) {
            $('#result').append('<p>Wypito eliksir magiczny pozwalający wrócić.</p>')
        } else if (number == anwsers[0]) {
            $('#result').append('<p>Wypito eliksir magiczny pozwalający iść dalej.</p>')
        } else {
            alert("Unexpected value!")
        }
        $('#clues').hide(500);
        $('#additional_clues').hide(500);
        $('#question').hide(500);
        $('#result').show(500);
        $('#reroll').empty();
        $('#reroll').append('Zagraj ponownie');
        $('#reroll').show(500);
    });
});

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateClues(move_forward, move_back, poison1, poison2, poison3, wine1, wine2, version) {
    result = [];
    move_forward = random(3, 5);
    switch (move_forward) {
        case 3:
            random_move_back = random(0, 1);
            switch (random_move_back) {
                case 0:
                    version = 1;
                    move_back = 1;
                    poison1 = 2;
                    poison2 = 4;
                    poison3 = 6;
                    wine1 = 5;
                    wine2 = 7;
                    $('#additional_clues').append('<p>Czwarta: strachliwi niech wiedzą, że na ucieczkę pozwoli</br>Tylko i wyłącznie pierwszy z napoi;</p>');
                    $('#additional_clues').append('<p>Piąta: odważnym podpowiem, że pokrzywowy trunek,</br>Zajął sobie piąty posterunek.</p>');
                    break;
                case 1:
                    version = 2;
                    move_back = 7;
                    poison1 = 1;
                    poison2 = 4;
                    poison3 = 5;
                    wine1 = 2;
                    wine2 = 6;
                    $('#additional_clues').append('<p>Czwarta: strachliwi niech wiedzą, że na ucieczkę pozwoli,</br>Tylko i wyłącznie ostatni z napoi;</p>');
                    $('#additional_clues').append('<p>Piąta: odważnym podpowiem, że morderczy trunek,</br>Zajął sobie czwarty posterunek.</p>');
                    break;
            }
            break;
        case 4:
            random_move_back = random(0, 2);
            switch (random_move_back) {
                case 0:
                    version = 3;
                    move_back = 1;
                    poison1 = 2;
                    poison2 = 5;
                    poison3 = 6;
                    wine1 = 3;
                    wine2 = 7;
                    $('#additional_clues').append('<p>Czwarta: strachliwi niech wiedzą, że na ucieczkę pozwoli,</br>Tylko i wyłącznie pierwszy z napoi;</p>');
                    $('#additional_clues').append('<p>Piąta: odważnym podpowiem, że morderczy trunek,</br>Zajął sobie piąty posterunek.</p>');
                    break;
                case 1:
                    version = 4;
                    move_back = 5;
                    poison1 = 1;
                    poison2 = 2;
                    poison3 = 6;
                    wine1 = 3;
                    wine2 = 7;
                    $('#additional_clues').append('<p>Czwarta: strachliwi niech wiedzą, że na ucieczkę pozwoli,</br>Tylko i wyłącznie piąty z napoi.</p>');
                    break;
                case 2:
                    version = 5;
                    move_back = 7;
                    poison1 = 1;
                    poison2 = 3;
                    poison3 = 5;
                    wine1 = 2;
                    wine2 = 6;
                    $('#additional_clues').append('<p>Czwarta: strachliwi niech wiedza, że na ucieczkę pozwoli,</br>Tylko i wyłącznie ostatni z napoi;</p>');
                    $('#additional_clues').append('<p>Piąta: odważanym podpowiem, że morderczy trunek,</br>Zajął sobie trzeci posterunek.</p>');
                    break;
            }
            break;
        case 5:
            random_move_back = random(0, 1);
            switch (random_move_back) {
                case 0:
                    version = 6;
                    move_back = 4;
                    poison1 = 1;
                    poison2 = 2;
                    poison3 = 6;
                    wine1 = 3;
                    wine2 = 7;
                    $('#additional_clues').append('<p>Czwarta: strachliwi niech wiedzą, że na ucieczkę pozwoli,</br>Tylko i wyłącznie czwarty z napoi.</p>');
                    break;
                case 1:
                    random_poison = random(0, 1);
                    switch (random_poison) {
                        case 0:
                            version = 7;
                            move_back = 1;
                            poison1 = 2;
                            poison2 = 4;
                            poison3 = 6;
                            wine1 = 3;
                            wine2 = 7;
                            $('#additional_clues').append('<p>Czwarta: strachliwi niech wiedzą, że na ucieczkę pozwoli,</br>Tylko i wyłącznie pierwszy z napoi;</p>');
                            $('#additional_clues').append('<p>Piąta: odważnym podpowiem, że pokrzywowy trunek,</br>Zajął sobie trzeci posterunek.</p>');
                            break;
                        case 1:
                            version = 8;
                            move_back = 1;
                            poison1 = 2;
                            poison2 = 3;
                            poison3 = 6;
                            wine1 = 4;
                            wine2 = 7;
                            $('#additional_clues').append('<p>Czwarta: strachliwi niech wiedzą, że na ucieczkę pozwoli,</br>Tylko i wyłącznie pierwszy z napoi;</p>');
                            $('#additional_clues').append('<p>Piąta: odważnym podpowiem, że morderczy trunek,</br>Zajął sobie trzeci posterunek.</p>');
                            break;
                    }
                    break;
            }
    }
    result = [move_forward, move_back, poison1, poison2, poison3, wine1, wine2, version]
    return result;
}