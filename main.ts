function createMap () {
    scene.setBackgroundImage(assets.image`background`)
    scene.setTileMap(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a 
        . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . a 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a 
        . . . . . . . . . . . . . . . . . . 6 7 . . . . . . . . . . . a 
        . . . d . c d c d c . . . 6 7 . . . 8 9 . . . . 4 . 4 . . . . a 
        . . . . . . . . . . . . . 8 9 . . . 8 9 . . . 4 4 . 4 4 . . 4 a 
        e e e e e e e e e e e e e e e e e e e e e e e e e f e e e e e e 
        `)
    scene.setTile(14, img`
        1 1 f e 1 1 1 1 e e 1 1 1 1 1 1 
        1 e e e e e e e e f 1 e e e e f 
        1 e e e e e e e e f 1 f e e e f 
        1 e e e e e e e e f e f f f f e 
        1 e e e e e e e e f 1 1 1 1 1 f 
        1 e e e e e e e e f 1 e e e e f 
        1 e e e e e e e e f 1 e e e e f 
        1 e e e e e e e e f 1 e e e e f 
        f f e e e e e e f 1 e e e e e f 
        1 e f f e e e e f 1 e e e e e f 
        1 e e e f f f f 1 e e e e e e f 
        1 e e e e e e f 1 e e e e e e f 
        1 e e e e e e f 1 e e e e e f f 
        e f f f f f f e 1 f f f f f f e 
        e 1 1 1 1 1 1 1 1 f e 1 1 1 1 e 
        1 e e e e e e e e f 1 e e e e e 
        `, true)
    scene.setTile(13, img`
        5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
        4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        4 5 f 5 5 5 5 5 5 5 5 5 5 f 5 f 
        4 5 5 5 5 4 4 4 4 4 5 5 5 5 5 f 
        4 5 5 5 4 4 f f f 4 4 5 5 5 5 f 
        4 5 5 5 4 4 f 5 5 4 4 f 5 5 5 f 
        4 5 5 5 4 4 f 5 5 4 4 f 5 5 5 f 
        4 5 5 5 5 f f 5 4 4 4 f 5 5 5 f 
        4 5 5 5 5 5 5 4 4 f f f 5 5 5 f 
        4 5 5 5 5 5 5 4 4 f 5 5 5 5 5 f 
        4 5 5 5 5 5 5 5 f f 5 5 5 5 5 f 
        4 5 5 5 5 5 5 4 4 5 5 5 5 5 5 f 
        4 5 5 5 5 5 5 4 4 f 5 5 5 5 5 f 
        4 5 f 5 5 5 5 5 f f 5 5 5 f 5 f 
        4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f f f f f f f f f f f f f f f f 
        `, true)
    scene.setTile(12, img`
        2 2 2 2 2 2 2 f 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 f 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 f 2 2 2 2 2 2 2 2 
        f f f f f f f f f f f f f f f f 
        2 2 2 f 2 2 2 2 2 2 2 f 2 2 2 2 
        2 2 2 f 2 2 2 2 2 2 2 f 2 2 2 2 
        2 2 2 f 2 2 2 2 2 2 2 f 2 2 2 2 
        f f f f f f f f f f f f f f f f 
        2 2 2 2 2 2 2 f 2 2 2 2 2 2 2 f 
        2 2 2 2 2 2 2 f 2 2 2 2 2 2 2 f 
        2 2 2 2 2 2 2 f 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f f f f 
        2 2 2 f 2 2 2 2 2 2 2 f 2 2 2 2 
        2 2 2 f 2 2 2 2 2 2 2 f 2 2 2 2 
        2 2 2 f 2 2 2 2 2 2 2 f 2 2 2 2 
        f f f f f f f f f f f f f f f f 
        `, true)
    scene.setTile(5, img`
        4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
        2 4 f 4 4 4 4 4 4 4 4 4 4 f 4 f 
        2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
        2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
        2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
        2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
        2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
        2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
        2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
        2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
        2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
        2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
        2 4 f 4 4 4 4 4 4 4 4 4 4 f 4 f 
        2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
        f f f f f f f f f f f f f f f f 
        `, true)
    scene.setTile(8, img`
        . . f 5 5 5 4 4 5 5 5 5 5 4 5 5 
        . . f 5 5 5 4 4 5 5 5 5 5 4 5 5 
        . . f 5 5 5 4 4 5 5 5 5 5 4 5 5 
        . . f 5 5 5 4 4 5 5 5 5 5 4 5 5 
        . . f 5 5 5 4 4 5 5 5 5 5 4 5 5 
        . . f 5 5 5 4 4 5 5 5 5 5 4 5 5 
        . . f 5 5 5 4 4 5 5 5 5 5 4 5 5 
        . . f 5 5 5 4 4 5 5 5 5 5 4 5 5 
        . . f 5 5 5 4 4 5 5 5 5 5 4 5 5 
        . . f 5 5 5 4 4 5 5 5 5 5 4 5 5 
        . . f 5 5 5 4 4 5 5 5 5 5 4 5 5 
        . . f 5 5 5 4 4 5 5 5 5 5 4 5 5 
        . . f 5 5 5 4 4 5 5 5 5 5 4 5 5 
        . . f 5 5 5 4 4 5 5 5 5 5 4 5 5 
        . . f 5 5 5 4 4 5 5 5 5 5 4 5 5 
        . . f 5 5 5 4 4 5 5 5 5 5 4 5 5 
        `, true)
    scene.setTile(9, img`
        4 4 4 4 4 4 4 4 5 4 5 5 5 f . . 
        4 4 4 4 4 4 4 4 4 5 4 5 5 f . . 
        4 4 4 4 4 4 4 4 5 4 5 5 5 f . . 
        4 4 4 4 4 4 4 4 4 5 4 5 5 f . . 
        4 4 4 4 4 4 4 4 5 4 5 5 5 f . . 
        4 4 4 4 4 4 4 4 4 5 4 5 5 f . . 
        4 4 4 4 4 4 4 4 5 4 5 5 5 f . . 
        4 4 4 4 4 4 4 4 4 5 4 5 5 f . . 
        4 4 4 4 4 4 4 4 5 4 5 5 5 f . . 
        4 4 4 4 4 4 4 4 4 5 4 5 5 f . . 
        4 4 4 4 4 4 4 4 5 4 5 5 5 f . . 
        4 4 4 4 4 4 4 4 4 5 4 5 5 f . . 
        4 4 4 4 4 4 4 4 5 4 5 5 5 f . . 
        4 4 4 4 4 4 4 4 4 5 4 5 5 f . . 
        4 4 4 4 4 4 4 4 5 4 5 5 5 f . . 
        4 4 4 4 4 4 4 4 4 5 4 5 5 f . . 
        `, true)
    scene.setTile(6, img`
        f f f f f f f f f f f f f f f f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        f 4 4 4 4 4 5 5 5 5 5 4 4 4 4 4 
        f 5 5 5 4 4 5 5 5 5 5 4 5 5 4 4 
        f 5 5 5 4 4 5 5 5 5 5 4 5 5 4 4 
        f 5 5 5 4 4 5 5 5 5 5 4 5 5 4 4 
        f 5 5 5 4 4 5 5 5 5 5 4 5 5 4 4 
        f 5 5 5 4 4 5 5 5 5 5 4 5 5 4 4 
        f 5 5 5 4 4 5 5 5 5 5 4 5 5 4 4 
        f 5 5 5 4 4 5 5 5 5 5 4 5 5 4 4 
        f 5 5 5 4 4 5 5 5 5 5 4 5 5 4 4 
        f 5 5 5 4 4 5 5 5 5 5 4 5 5 4 4 
        f 5 5 5 4 4 5 5 5 5 5 4 5 5 4 4 
        f 5 5 5 4 4 5 5 5 5 5 4 5 5 4 4 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `, true)
    scene.setTile(7, img`
        f f f f f f f f f f f f f f f f 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
        4 4 4 4 4 4 4 4 4 5 4 5 4 5 5 f 
        4 4 4 4 4 4 4 4 4 4 5 4 5 5 5 f 
        4 4 4 4 4 4 4 4 4 5 4 5 4 5 5 f 
        4 4 4 4 4 4 4 4 4 4 5 4 5 5 5 f 
        4 4 4 4 4 4 4 4 4 5 4 5 4 5 5 f 
        4 4 4 4 4 4 4 4 4 4 5 4 5 5 5 f 
        4 4 4 4 4 4 4 4 4 5 4 5 4 5 5 f 
        4 4 4 4 4 4 4 4 4 4 5 4 5 5 5 f 
        4 4 4 4 4 4 4 4 4 5 4 5 4 5 5 f 
        4 4 4 4 4 4 4 4 4 4 5 4 5 5 5 f 
        4 4 4 4 4 4 4 4 4 5 4 5 4 5 5 f 
        f f f f f f f f f f f f f f . . 
        f f f f f f f f f f f f f f . . 
        `, true)
    scene.setTile(4, img`
        4 d d d d d d d d d d d d d d f 
        d 4 d d d d d d d d d d d d f f 
        d d 4 d d d d d d d d d d f f f 
        d d d 4 d d d d d d d d f f f f 
        d d d d 4 4 4 4 4 4 4 4 f f f f 
        d d d d 4 4 4 4 4 4 4 4 f f f f 
        d d d d 4 4 4 4 4 4 4 4 f f f f 
        d d d d 4 4 4 4 4 4 4 4 f f f f 
        d d d d 4 4 4 4 4 4 4 4 f f f f 
        d d d d 4 4 4 4 4 4 4 4 f f f f 
        d d d d 4 4 4 4 4 4 4 4 f f f f 
        d d d d 4 4 4 4 4 4 4 4 f f f f 
        d d d f f f f f f f f f 4 f f f 
        d d f f f f f f f f f f f 4 f f 
        d f f f f f f f f f f f f f 4 f 
        f f f f f f f f f f f f f f f 4 
        `, true)
    scene.setTile(10, img`
        . . . . . . . . . 5 4 1 a 5 . . 
        . . . . . . . . . 5 4 1 a 5 . . 
        . . . . . . . . . 5 4 1 a 5 . . 
        . . . . . . . . . 5 4 1 a 5 . . 
        . . . . . . . . . 5 4 1 a 5 . . 
        . . . . . . . . . 5 4 1 a 5 . . 
        . . . . . . . . . 5 4 1 a 5 . . 
        . . . . . . . . . 5 4 1 a 5 . . 
        . . . . . . . . . 5 4 1 a 5 . . 
        . . . . . . . . . 5 4 1 a 5 . . 
        . . . . . . . . . 5 4 1 a 5 . . 
        . . . . . . . . . 5 4 1 a 5 . . 
        . . . . . . . . . 5 4 1 a 5 . . 
        . . . . . . . . . 5 4 1 a 5 . . 
        . . . . . . . . . 5 4 1 a 5 . . 
        . . . . . . . . . 5 4 1 a 5 . . 
        `, true)
    scene.setTile(15, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(2, img`
        5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
        4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        4 5 f 5 5 5 5 5 5 5 5 5 5 f 5 f 
        4 5 5 5 5 4 4 4 4 4 5 5 5 5 5 f 
        4 5 5 5 4 4 f f f 4 4 5 5 5 5 f 
        4 5 5 5 4 4 f 5 5 4 4 f 5 5 5 f 
        4 5 5 5 4 4 f 5 5 4 4 f 5 5 5 f 
        4 5 5 5 5 f f 5 4 4 4 f 5 5 5 f 
        4 5 5 5 5 5 5 4 4 f f f 5 5 5 f 
        4 5 5 5 5 5 5 4 4 f 5 5 5 5 5 f 
        4 5 5 5 5 5 5 5 f f 5 5 5 5 5 f 
        4 5 5 5 5 5 5 4 4 5 5 5 5 5 5 f 
        4 5 5 5 5 5 5 4 4 f 5 5 5 5 5 f 
        4 5 f 5 5 5 5 5 f f 5 5 5 f 5 f 
        4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f f f f f f f f f f f f f f f f 
        `, true)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mario.vy == 0) {
        mario.vy = -150
        pause(500)
        mario.vy = 0
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mario,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . . . d 8 d d 8 8 8 . . . 
        . . . . d d d 8 d d d 8 d 8 . . 
        . . . d d d 8 d d d 8 8 d 8 . . 
        . . . . 8 8 8 8 d d d d 8 8 . . 
        . . . . . d d d d d d d . . . . 
        . . . . . d . 8 1 8 8 8 8 . . . 
        . . . . d d d 8 8 8 8 8 8 d . . 
        . . . . . d d 8 8 8 8 8 2 d d . 
        . . . . . . 2 2 2 2 2 2 2 8 8 . 
        . . . . . . 2 2 2 2 2 2 2 2 8 . 
        . . . . . . . 2 2 2 2 2 2 2 8 8 
        . . . . . . . . 8 8 8 . . . . 8 
        . . . . . . . 8 8 8 8 . . . . . 
        `, img`
        . . . . . . . . . 2 2 2 2 2 . . 
        . . . . . . 2 2 2 2 2 2 2 2 2 . 
        . . . . . . . . d 8 d d 8 8 8 . 
        . . . . . . d d d 8 d d d 8 d 8 
        . . . . . d d d 8 d d d 8 8 d 8 
        . . . . . . 8 8 8 8 d d d d 8 8 
        . . . . . . . d d d d d d d . . 
        . . . . . . . . . 8 8 8 2 8 8 . 
        . . . . . . . . 8 8 2 2 8 8 8 8 
        . . . . . . . d 2 2 d 2 2 8 8 8 
        . . . . . . . 2 2 2 2 2 8 8 8 8 
        . . . . . . . 2 2 2 d d d 8 8 2 
        . . . . . . . . 2 2 2 d d 8 2 . 
        . . . . . . . . 8 8 8 2 2 2 . . 
        . . . . . . . 8 8 8 8 8 8 8 . . 
        . . . . . . . . . . . 8 8 8 . . 
        `, img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . . . d 8 d d 8 8 8 . . . . 
        . . . d d d 8 d d d 8 d 8 . . . 
        . . d d d 8 d d d 8 8 d 8 . . . 
        . . . 8 8 8 8 d d d d 8 8 . . . 
        . . . . d d d d d d d . . . . . 
        . . . . . . 8 8 2 2 8 8 8 8 . . 
        . d d d 8 8 8 2 2 2 8 8 8 8 d d 
        . d d 8 8 2 2 2 d 2 8 8 . d d d 
        . . 8 . . 2 2 2 2 2 2 2 . . . . 
        . . 8 8 2 2 2 2 2 2 2 2 2 . . . 
        . . 8 8 2 2 2 2 2 2 2 2 2 2 . . 
        . . 8 8 2 2 2 . . 2 2 2 2 8 8 . 
        . . . . . . . . . . . . 8 8 8 . 
        . . . . . . . . . . . 8 8 8 . . 
        `],
    100,
    true
    )
    mario.setVelocity(-50, 0)
})
function createGoomba () {
    goomba = sprites.create(assets.image`goomba_1`, SpriteKind.Enemy)
    animation.runImageAnimation(
    goomba,
    [img`
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . e e e e e e e e e . . . . 
        . . e e e e e e e e e e e . . . 
        . e f f e e e e e e e f f e . . 
        e e e d f e e e e e f d e e e . 
        e e e d f f f f f f f d e e e . 
        e e e d f d e e e d f d e e e e 
        e e e d d d e e e d d d e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e d d d d d d d e e e e . 
        . . . d d d d d d d d d . . . . 
        . . . d d d d d d d d d f f . . 
        . . f f d d d d d f f f f f f . 
        . . f f f d d d f f f f f f f . 
        . . . f f f . . f f f f f f . . 
        `, assets.image`gomba_2`],
    200,
    true
    )
    createEnemy(goomba, 150)
}
scene.onHitTile(SpriteKind.Player, 10, function (sprite) {
    game.over(true, effects.confetti)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mario)
mario.setImage(img`
        . . . 2 2 2 2 2 . . . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 . . . . . 
        . . 8 8 8 d d 8 d . . . . . . . 
        . 8 d 8 d d d 8 d d d . . . . . 
        . 8 d 8 8 d d d 8 d d d . . . . 
        . 8 8 d d d d 8 8 8 8 . . . . . 
        . . . d d d d d d d . . . . . . 
        . . 8 8 2 8 8 8 . . . . . . . . 
        . 8 8 8 2 8 8 2 8 8 8 . . . . . 
        8 8 8 8 2 2 2 2 8 8 8 8 . . . . 
        d d 8 2 d 2 2 d 2 8 d d . . . . 
        d d d 2 2 2 2 2 2 d d d . . . . 
        d d 2 2 2 2 2 2 2 2 d d . . . . 
        . . 2 2 2 . . 2 2 2 . . . . . . 
        . 8 8 8 . . . . 8 8 8 . . . . . 
        8 8 8 8 . . . . 8 8 8 8 . . . . 
        `)
    mario.setVelocity(0, 0)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.ImageAnimation, mario)
mario.setImage(img`
        . . . . . . . . 2 2 2 2 2 . . . 
        . . . . . 2 2 2 2 2 2 2 2 2 . . 
        . . . . . . . d 8 d d 8 8 8 . . 
        . . . . . d d d 8 d d d 8 d 8 . 
        . . . . d d d 8 d d d 8 8 d 8 . 
        . . . . . 8 8 8 8 d d d d 8 8 . 
        . . . . . . d d d d d d d . . . 
        . . . . . . . . 8 8 8 2 8 8 . . 
        . . . . . 8 8 8 2 8 8 2 8 8 8 . 
        . . . . 8 8 8 8 2 2 2 2 8 8 8 8 
        . . . . d d 8 2 d 2 2 d 2 8 d d 
        . . . . d d d 2 2 2 2 2 2 d d d 
        . . . . d d 2 2 2 2 2 2 2 2 d d 
        . . . . . . 2 2 2 . . 2 2 2 . . 
        . . . . . 8 8 8 . . . . 8 8 8 . 
        . . . . 8 8 8 8 . . . . 8 8 8 8 
        `)
    mario.setVelocity(0, 0)
})
scene.onHitTile(SpriteKind.Enemy, 9, function (sprite) {
    reverseMove(sprite)
})
function createEnemy (badGuy: Sprite, startingPosition: number) {
    badGuy.setVelocity(50, 0)
    badGuy.setPosition(startingPosition, 103)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mario,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . 8 8 8 d d 8 d . . . . . . 
        . . 8 d 8 d d d 8 d d d . . . . 
        . . 8 d 8 8 d d d 8 d d d . . . 
        . . 8 8 d d d d 8 8 8 8 . . . . 
        . . . . d d d d d d d . . . . . 
        . . . 8 8 8 8 1 8 . d . . . . . 
        . . d 8 8 8 8 8 8 d d d . . . . 
        . d d 2 8 8 8 8 8 d d . . . . . 
        . 8 8 2 2 2 2 2 2 2 . . . . . . 
        . 8 2 2 2 2 2 2 2 2 . . . . . . 
        8 8 2 2 2 2 2 2 2 . . . . . . . 
        8 . . . . 8 8 8 . . . . . . . . 
        . . . . . 8 8 8 8 . . . . . . . 
        `, img`
        . . 2 2 2 2 2 . . . . . . . . . 
        . 2 2 2 2 2 2 2 2 2 . . . . . . 
        . 8 8 8 d d 8 d . . . . . . . . 
        8 d 8 d d d 8 d d d . . . . . . 
        8 d 8 8 d d d 8 d d d . . . . . 
        8 8 d d d d 8 8 8 8 . . . . . . 
        . . d d d d d d d . . . . . . . 
        . 8 8 2 8 8 8 . . . . . . . . . 
        8 8 8 8 2 2 8 8 . . . . . . . . 
        8 8 8 2 2 d 2 2 d . . . . . . . 
        8 8 8 8 2 2 2 2 2 . . . . . . . 
        2 8 8 d d d 2 2 2 . . . . . . . 
        . 2 8 d d 2 2 2 . . . . . . . . 
        . . 2 2 2 8 8 8 . . . . . . . . 
        . . 8 8 8 8 8 8 8 . . . . . . . 
        . . 8 8 8 . . . . . . . . . . . 
        `, img`
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 8 8 8 d d 8 d . . . . . 
        . . . 8 d 8 d d d 8 d d d . . . 
        . . . 8 d 8 8 d d d 8 d d d . . 
        . . . 8 8 d d d d 8 8 8 8 . . . 
        . . . . . d d d d d d d . . . . 
        . . 8 8 8 8 2 2 8 8 . . . . . . 
        d d 8 8 8 8 2 2 2 8 8 8 d d d . 
        d d d . 8 8 2 d 2 2 2 8 8 d d . 
        . . . . 2 2 2 2 2 2 2 . . 8 . . 
        . . . 2 2 2 2 2 2 2 2 2 8 8 . . 
        . . 2 2 2 2 2 2 2 2 2 2 8 8 . . 
        . 8 8 2 2 2 2 . . 2 2 2 8 8 . . 
        . 8 8 8 . . . . . . . . . . . . 
        . . 8 8 8 . . . . . . . . . . . 
        `],
    100,
    true
    )
    mario.setVelocity(50, 0)
})
scene.onHitTile(SpriteKind.Enemy, 4, function (sprite) {
    reverseMove(sprite)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    console.log(sprite.y)
    if (sprite.y > 20) {
        sprite.destroy(effects.spray, 500)
    } else {
        game.over(false, effects.melt)
    }
})
scene.onHitTile(SpriteKind.Enemy, 8, function (sprite) {
    reverseMove(sprite)
})
scene.onHitTile(SpriteKind.Player, 15, function (sprite) {
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mushroom.destroy(effects.warmRadial, 100)
    mario.setImage(img`
        . . . 2 2 2 2 2 . . . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 . . . . . 
        . . 8 8 8 d d 8 d . . . . . . . 
        . 8 d 8 d d d 8 d d d . . . . . 
        . 8 d 8 8 d d d 8 d d d . . . . 
        . 8 8 d d d d 8 8 8 8 . . . . . 
        . . . d d d d d d d . . . . . . 
        . . 8 8 2 8 8 8 . . . . . . . . 
        . 8 8 8 2 8 8 2 8 8 8 . . . . . 
        8 8 8 8 2 2 2 2 8 8 8 8 . . . . 
        d d 8 2 d 2 2 d 2 8 d d . . . . 
        d d d 2 2 2 2 2 2 d d d . . . . 
        d d 2 2 2 2 2 2 2 2 d d . . . . 
        . . 2 2 2 . . 2 2 2 . . . . . . 
        . 8 8 8 . . . . 8 8 8 . . . . . 
        8 8 8 8 . . . . 8 8 8 8 . . . . 
        `)
})
scene.onHitTile(SpriteKind.Player, 12, function (sprite) {
    if (mario.isHittingTile(CollisionDirection.Top)) {
        scene.cameraShake(4, 100)
    }
})
scene.onHitTile(SpriteKind.Player, 13, function (sprite) {
    if (mario.isHittingTile(CollisionDirection.Top)) {
        scene.setTileAt(scene.getTile(Math.floor(mario.x / 20) + 1, Math.floor(mario.y / 20)), 5)
    }
})
function reverseMove (badGuy: Sprite) {
    badGuy.setVelocity(0 - badGuy.vx, 0)
}
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    if (mario.isHittingTile(CollisionDirection.Top)) {
        scene.setTileAt(scene.getTile(Math.ceil(mario.x / 20) + 1, Math.floor(mario.y / 20)), 5)
        mushroom = sprites.create(img`
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . 4 4 4 4 2 2 . . . . . 
            . . . . 4 4 4 4 2 2 2 2 . . . . 
            . . . 4 4 4 4 4 2 2 2 2 2 . . . 
            . . 4 4 4 4 4 4 2 2 2 2 2 4 . . 
            . 4 2 2 2 4 4 4 4 4 4 4 4 4 4 . 
            4 2 2 2 2 2 4 4 4 4 4 4 4 4 4 . 
            4 2 2 2 2 2 4 4 4 4 4 4 2 2 . 4 
            4 2 2 2 2 2 4 4 4 4 4 4 2 2 2 4 
            4 4 2 2 2 4 4 4 4 4 4 4 4 2 2 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 2 2 2 1 1 1 1 1 1 1 1 2 2 4 . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 4 1 1 . . . 
            . . . 1 1 1 1 1 1 1 4 1 1 . . . 
            . . . . 1 1 1 1 1 4 1 1 . . . . 
            `, SpriteKind.Food)
        mushroomTile = scene.getTile(Math.ceil(mario.x / 20) + 1, Math.floor(mario.y / 20) - 1)
        mushroomTile.place(mushroom)
    }
})
let mushroomTile: tiles.Tile = null
let mushroom: Sprite = null
let goomba: Sprite = null
let mario: Sprite = null
mario = sprites.create(img`
    . . . 2 2 2 2 2 . . . . . . . . 
    . . 2 2 2 2 2 2 2 2 2 . . . . . 
    . . 8 8 8 d d 8 d . . . . . . . 
    . 8 d 8 d d d 8 d d d . . . . . 
    . 8 d 8 8 d d d 8 d d d . . . . 
    . 8 8 d d d d 8 8 8 8 . . . . . 
    . . . d d d d d d d . . . . . . 
    . . 8 8 2 8 8 8 . . . . . . . . 
    . 8 8 8 2 8 8 2 8 8 8 . . . . . 
    8 8 8 8 2 2 2 2 8 8 8 8 . . . . 
    d d 8 2 d 2 2 d 2 8 d d . . . . 
    d d d 2 2 2 2 2 2 d d d . . . . 
    d d 2 2 2 2 2 2 2 2 d d . . . . 
    . . 2 2 2 . . 2 2 2 . . . . . . 
    . 8 8 8 . . . . 8 8 8 . . . . . 
    8 8 8 8 . . . . 8 8 8 8 . . . . 
    `, SpriteKind.Player)
mario.setPosition(14, 88)
mario.ay = 150
scene.cameraFollowSprite(mario)
createMap()
createGoomba()
