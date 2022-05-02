input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        # . # . .
        # . # . .
        . . . . .
        . . # . .
        # # . . .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . . . # .
        . # # . .
        `)
    basic.showLeds(`
        . . # . #
        . . # . #
        . . . . .
        . . . . #
        . . # # .
        `)
    basic.pause(100)
    basic.showIcon(IconNames.Giraffe)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("pizza zeit!")
    basic.showLeds(`
        # # # # #
        # # # # #
        . # . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        . # . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # . .
        . # # . .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . . # # .
        . . # # .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # . .
        . # # . .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . . # # .
        . . # # .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # . .
        . # # . .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . . # # .
        . . # # .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . . . # .
        . # # . .
        `)
    basic.showIcon(IconNames.Giraffe)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . # . #
        . . # . #
        . . . . .
        . . . . #
        . . # # .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . . . # .
        . # # . .
        `)
    basic.showLeds(`
        # . # . .
        # . # . .
        . . . . .
        . . # . .
        # # . . .
        `)
    basic.pause(100)
    basic.showIcon(IconNames.Giraffe)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.showString("stop :(")
    basic.showIcon(IconNames.Giraffe)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.Giraffe)
})
input.onButtonPressed(Button.B, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (hand == 2) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
    basic.pause(2000)
    basic.showIcon(IconNames.Giraffe)
})
let hand = 0
basic.showString("hi!")
basic.showIcon(IconNames.Giraffe)
basic.forever(function () {
	
})
