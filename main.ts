basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showIcon(IconNames.Giraffe)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Yes)
    basic.showIcon(IconNames.No)
    basic.showString("Hello!")
    basic.showArrow(ArrowNames.North)
})
