input.onButtonPressed(Button.A, function () {
    radio.sendNumber(input.temperature() + 1000)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(256)
})
radio.setGroup(1)
loops.everyInterval(10000, function () {
    if (input.temperature() <= 20) {
        radio.sendNumber(input.temperature() + 1000)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
    } else {
        radio.sendNumber(257)
        basic.showLeds(`
            . . . . .
            . . . . #
            . # . # .
            . . # . .
            . . . . .
            `)
    }
})
