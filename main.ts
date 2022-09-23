basic.forever(function () {
    if (input.soundLevel() > 150) {
        music.playMelody("C5 B A G F E D C ", 140)
        music.playMelody("C5 G B A F A C5 B ", 2222.222)
    } else {
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `)
        basic.clearScreen()
    }
})
