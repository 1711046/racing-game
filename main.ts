radio.onReceivedNumber(function (receivedNumber) {
	
})
input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.Shake, function () {
    while (true) {
        music.stopAllSounds()
        GHBit.Min_Motor_Shake(GHBit.Motorshock.OFF)
    }
})
let s4: game.LedSprite = null
let s3: game.LedSprite = null
let s2: game.LedSprite = null
let sprite: game.LedSprite = null
basic.clearScreen()
GHBit.Min_Motor_Shake(GHBit.Motorshock.OFF)
basic.showString("3")
basic.pause(250)
basic.showString("2")
basic.pause(250)
basic.showString("1")
basic.pause(250)
basic.showString("go !")
basic.clearScreen()
basic.pause(250)
sprite = game.createSprite(2, 4)
for (let index = 0; index < 5; index++) {
    s2 = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 5; index++) {
        basic.pause(500)
        s2.change(LedSpriteProperty.Y, 1)
        while (s2.isTouching(sprite)) {
            GHBit.Min_Motor_Shake(GHBit.Motorshock.OFF)
            music.playTone(587, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Double))
            music.playTone(220, music.beat(BeatFraction.Breve))
            music.stopAllSounds()
            basic.clearScreen()
            s2.delete()
            sprite.delete()
            game.pause()
        }
    }
    s2.delete()
}
for (let index = 0; index < 8; index++) {
    s2 = game.createSprite(randint(0, 4), 0)
    s3 = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 5; index++) {
        basic.pause(350)
        s2.change(LedSpriteProperty.Y, 1)
        s3.change(LedSpriteProperty.Y, 1)
        while (s2.isTouching(sprite)) {
            GHBit.Min_Motor_Shake(GHBit.Motorshock.OFF)
            basic.showIcon(IconNames.Sad)
            music.playTone(587, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Double))
            music.playTone(220, music.beat(BeatFraction.Breve))
            music.stopAllSounds()
            basic.clearScreen()
            s2.delete()
            s3.delete()
            sprite.delete()
            game.pause()
        }
        while (s3.isTouching(sprite)) {
            GHBit.Min_Motor_Shake(GHBit.Motorshock.OFF)
            basic.showIcon(IconNames.Sad)
            music.playTone(587, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Double))
            music.playTone(220, music.beat(BeatFraction.Breve))
            music.stopAllSounds()
            basic.clearScreen()
            s2.delete()
            s3.delete()
            sprite.delete()
            game.pause()
        }
    }
    s2.delete()
    s3.delete()
}
sprite.change(LedSpriteProperty.Y, 1)
for (let index = 0; index < 10; index++) {
    s2 = game.createSprite(randint(0, 4), 0)
    s3 = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 5; index++) {
        basic.pause(300)
        s2.change(LedSpriteProperty.Y, 1)
        s3.change(LedSpriteProperty.Y, 1)
        while (s2.isTouching(sprite)) {
            GHBit.Min_Motor_Shake(GHBit.Motorshock.OFF)
            basic.showIcon(IconNames.Sad)
            music.playTone(587, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Double))
            music.playTone(220, music.beat(BeatFraction.Breve))
            music.stopAllSounds()
            basic.clearScreen()
            s2.delete()
            s3.delete()
            sprite.delete()
            game.pause()
        }
        while (s3.isTouching(sprite)) {
            GHBit.Min_Motor_Shake(GHBit.Motorshock.OFF)
            basic.showIcon(IconNames.Sad)
            music.playTone(587, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Double))
            music.playTone(220, music.beat(BeatFraction.Breve))
            music.stopAllSounds()
            basic.clearScreen()
            s2.delete()
            s3.delete()
            sprite.delete()
            game.pause()
        }
    }
    s2.delete()
    s3.delete()
}
for (let index = 0; index < 12; index++) {
    s2 = game.createSprite(randint(0, 4), 0)
    s3 = game.createSprite(randint(0, 4), 0)
    s4 = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 5; index++) {
        basic.pause(250)
        s2.change(LedSpriteProperty.Y, 1)
        s3.change(LedSpriteProperty.Y, 1)
        s4.change(LedSpriteProperty.Y, 1)
        while (s2.isTouching(sprite)) {
            GHBit.Min_Motor_Shake(GHBit.Motorshock.OFF)
            basic.showIcon(IconNames.Sad)
            music.playTone(587, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Double))
            music.playTone(220, music.beat(BeatFraction.Breve))
            music.stopAllSounds()
            basic.clearScreen()
            s2.delete()
            s3.delete()
            s4.delete()
            sprite.delete()
            game.pause()
        }
        while (s3.isTouching(sprite)) {
            GHBit.Min_Motor_Shake(GHBit.Motorshock.OFF)
            basic.showIcon(IconNames.Sad)
            music.playTone(587, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Double))
            music.playTone(220, music.beat(BeatFraction.Breve))
            music.stopAllSounds()
            basic.clearScreen()
            s2.delete()
            s3.delete()
            s4.delete()
            sprite.delete()
            game.pause()
        }
        while (s4.isTouching(sprite)) {
            GHBit.Min_Motor_Shake(GHBit.Motorshock.OFF)
            music.playTone(587, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Double))
            music.playTone(220, music.beat(BeatFraction.Breve))
            music.stopAllSounds()
            basic.clearScreen()
            s2.delete()
            s3.delete()
            s4.delete()
            sprite.delete()
            game.pause()
        }
    }
    basic.showString("win")
    s2.delete()
    s3.delete()
    s4.delete()
}
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Right)) {
        sprite.change(LedSpriteProperty.X, 1)
    }
    if (GHBit.Rocker(GHBit.enRocker.Left)) {
        sprite.change(LedSpriteProperty.X, -1)
    }
    if (GHBit.Rocker(GHBit.enRocker.Press)) {
        while (true) {
            music.stopAllSounds()
            GHBit.Min_Motor_Shake(GHBit.Motorshock.OFF)
        }
    }
})
