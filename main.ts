input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Happy)
    basic.showString("Hello!")
})
basic.showIcon(IconNames.Heart)
music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
basic.forever(function () {
	
})
