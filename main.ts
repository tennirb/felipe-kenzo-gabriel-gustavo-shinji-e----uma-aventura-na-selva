namespace SpriteKind {
    export const cobra = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    timer.background(function () {
        story.startCutscene(function () {
            story.printCharacterText("Fernando encontra fazendeiros, que levam ele para o acampamento, é aplaudido por sobreviver e seu irmão chora em seus braços depis de vê-lo denovo.", "Narrador")
        })
    })
    timer.background(function () {
        tiles.placeOnTile(Fernando, tiles.getTileLocation(9, 4))
    })
    tiles.setCurrentTilemap(tilemap`level9`)
    timer.after(5000, function () {
        game.splash("Você terminou o jogo, obrigado por jogar!", "Narrador")
    })
    timer.background(function () {
        game.gameOver(true)
    })
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.cobra, function (sprite, otherSprite) {
    pedra += -1
    cobra.setImage(img`
        . . . . c c c c c . . . . . . . 
        . . . c 6 7 2 7 2 . . . . . . . 
        . . c 7 7 7 2 7 2 2 . . . . . . 
        . c 6 7 7 7 2 7 7 2 2 . . . . . 
        . c 7 2 6 2 2 6 2 7 2 2 . . . . 
        . f 7 6 2 6 6 2 6 7 7 7 . . . . 
        . f 7 2 7 2 2 7 2 7 2 7 f . . . 
        . . f 7 7 2 7 6 c 7 2 6 f c . . 
        . . . f c 2 c c 7 7 2 f 7 2 c . 
        . . c 2 2 2 7 2 6 c 2 7 7 2 7 c 
        . c 7 2 2 2 7 2 f c 2 7 7 2 c c 
        c 2 1 2 1 2 6 2 c c 2 6 2 c . . 
        f 2 1 2 1 2 6 2 c 6 2 6 2 f . . 
        f 2 1 2 1 2 1 2 6 6 2 6 2 f . . 
        . 2 6 2 1 2 1 2 1 6 2 6 2 . . . 
        . 2 c c c c c c c c c f 2 . . . 
        `)
    cobra.follow(Fernando, 0)
    timer.background(function () {
        story.startCutscene(function () {
            story.printCharacterText("Fernando matou uma cobra que tentou atacá-lo. Ele comeu choalete e bebeu água, agora está indo pela direção oposta do Sol para reencontrar o acampamento.", "Narrador")
        })
    })
    sprites.destroy(projectile2)
    Notification.notify("Estou com fome, vou comer esses ovos e andar, espera ai..... UM RIO E MILHARAL, ESTOU SALVO!")
    Notification.waitForNotificationFinish()
    story.startCutscene(function () {
        story.printCharacterText("Depois de muito tempo caminhando, Fernando achou um rio, atravesse-o para continuar.", "Narrador")
    })
    Notification.notify("....................]", 0.01)
    Notification.waitForNotificationFinish()
    tiles.setCurrentTilemap(tilemap`level7`)
    tiles.placeOnTile(Fernando, tiles.getTileLocation(7, 13))
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (pedra == 1) {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . c c c c . . 
            . c d b b b c . 
            c 1 b 1 1 b d c 
            c 1 b b d c 1 c 
            . c b b b d c . 
            . . c c c c . . 
            `, Fernando, 50, 50)
        projectile2.follow(cobra)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile32`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile1`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile33`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile1`)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile37`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`bag3`)
    timer.after(500, function () {
        timer.background(function () {
            if (Notification.isNotifying()) {
                Notification.cancelNotification()
            }
            Notification.cancelNotification()
            tiles.setCurrentTilemap(tilemap`bag3`)
            Notification.waitForNotificationFinish()
        })
        timer.after(1000, function () {
            timer.background(function () {
                tiles.setCurrentTilemap(tilemap`bag`)
                pedra = 1
                Notification.waitForNotificationFinish()
                tiles.setCurrentTilemap(tilemap`level4`)
                timer.after(500, function () {
                    info.setLife(1)
                    timer.background(function () {
                        cobra = sprites.create(img`
                            . . . . c c c c c c . . . . . . 
                            . . . c 6 7 7 7 7 6 c . . . . . 
                            . . c 7 7 7 7 7 7 7 7 c . . . . 
                            . c 6 7 7 7 7 7 7 7 7 6 c . . . 
                            . c 7 c 6 6 6 6 c 7 7 7 c . . . 
                            . f 7 6 f 6 6 f 6 7 7 7 f . . . 
                            . f 7 7 7 7 7 7 7 7 7 7 f . . . 
                            . . f 7 7 7 7 6 c 7 7 6 f c . . 
                            . . . f c c c c 7 7 6 f 7 7 c . 
                            . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
                            . c 7 7 2 7 7 c f c 6 7 7 6 c c 
                            c 1 1 1 1 7 6 f c c 6 6 6 c . . 
                            f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
                            f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
                            . f 6 1 1 1 1 1 1 6 6 6 f . . . 
                            . . c c c c c c c c c f . . . . 
                            `, SpriteKind.cobra)
                        cobra.follow(Fernando, 80)
                        tiles.placeOnTile(cobra, tiles.getTileLocation(29, 7))
                        timer.background(function () {
                            story.startCutscene(function () {
                                story.printCharacterText("Fernando acorda, bebe água e come chocolate e molha o rosto. Ele decidiu abrir a mata na direção oposta do Sol, pois lembrou que entrou na mata seguindo-o. ", "Narrador")
                            })
                        })
                    })
                })
            })
        })
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    story.startCutscene(function () {
        story.printCharacterText("Fernando atravessa o rio e precisa atravessar o milharal.", "Narrador")
    })
    timer.after(5000, function () {
        tiles.setCurrentTilemap(tilemap`level8`)
    })
})
info.onLifeZero(function () {
    timer.after(500, function () {
        story.startCutscene(function () {
            story.printCharacterText("Fernando está com muito medo de onças, para dormir ele fez uma rede de folhas d=e gravetos, amarrando-se para não cair.", "Narrador")
            Notification.notify("Encoste na rede para dormir...", 1, assets.image`myImage1`)
        })
        tiles.setCurrentTilemap(tilemap`bag3`)
        tiles.setCurrentTilemap(tilemap`bag`)
        tiles.placeOnTile(Fernando, tiles.getTileLocation(29, 8))
    })
})
info.onScore(5, function () {
    Notification.waitForNotificationFinish()
    timer.after(500, function () {
        Notification.notify("Onde eu estou? onde está o Toninho? EU ME PERDi!", 1.5, img`
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
            `)
        Notification.waitForNotificationFinish()
        Notification.notify("Colete 6 folhas para fazer uma rede para dormir nela.", 1, img`
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
            `)
        Notification.waitForNotificationFinish()
        tiles.setCurrentTilemap(tilemap`level0`)
        tiles.placeOnTile(Fernando, tiles.getTileLocation(12, 4))
    })
    timer.after(500, function () {
        Notification.waitForNotificationFinish()
        info.setScore(0)
        Notification.waitForNotificationFinish()
    })
})
let projectile2: Sprite = null
let cobra: Sprite = null
let pedra = 0
let Fernando: Sprite = null
game.splash("Aperte A - Espaço - para continuar;")
game.splash("Aperte B - Enter -  quando uma cobra aparecer para matá-lá;", "")
game.splash("Esse jogo  foi feito por Gabriel Galindo, Luigi Guedes, Felipe Kenzo e Gustavo Shinji;")
game.splash("Fernando é o personagem que você pode controlar, ele começa sua aventura em um acampamaneto, com seu irmão Toninho.")
let Toninho = sprites.create(assets.image`myImage`, SpriteKind.Player)
Fernando = sprites.create(assets.image`myImage1`, SpriteKind.Player)
info.setScore(0)
Toninho.setPosition(34, 30)
controller.moveSprite(Fernando, 100, 100)
tiles.setCurrentTilemap(tilemap`level`)
scene.cameraFollowSprite(Fernando)
scaling.scaleToPixels(Toninho, 20, ScaleDirection.Uniformly, ScaleAnchor.Middle)
story.startCutscene(function () {
    story.cancelSpriteMovement(Fernando)
    story.setPagePauseLength(200, 1000)
    story.printCharacterText("Fernando está em um acampamento com o seu irmão Toninho pois tentou fazer uma cabana, seu pai gostou de sua criatividade e colocou no grupo de escoteiros.", "Narrador")
})
timer.after(17000, function () {
    Notification.notify("O fernando, pode pegar 5 gravetos para mim? Por favor.", 1, assets.image`myImage`)
    Notification.waitForNotificationFinish()
    Notification.notify("Vou pegar lá!")
    tiles.setCurrentTilemap(tilemap`level1`)
    timer.after(1, function () {
        tiles.placeOnTile(Fernando, tiles.getTileLocation(19, 6))
        sprites.destroy(Toninho)
    })
})
spriteutils.setLifeImage(assets.image`myImage0`)
info.setLife(6)
forever(function () {
    characterAnimations.loopFrames(
    Fernando,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . f e e . . . . . . . 
        . . . . . . f e e . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . 6 e 8 . . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . . 9 9 6 . . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . e . e . . . . . . . 
        . . . . . . e . e . . . . . . . 
        . . . . . f e f e . . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
})
forever(function () {
    characterAnimations.loopFrames(
    Fernando,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . . f e e e e e f . . . . . 
        . . . . f 1 f e f 1 f . . . . . 
        . . . . e 1 f e f 1 e . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . . 6 e 8 . . . . . . . 
        . . . . e e 9 9 9 6 e . . . . . 
        . . . e e 9 9 9 6 e e . . . . . 
        . . e e . 9 9 9 9 e e e . . . . 
        . . . . . 9 9 9 9 e e e . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . d d . d d . . . . . . 
        . . . . . e e . e e . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . . f e e e e e f . . . . . 
        . . . . f 1 f e f 1 f . . . . . 
        . . . . e 1 f e f 1 e . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . . 6 e 8 . . . . . . . 
        . . . . e e 9 9 9 6 e . . . . . 
        . . . e e 9 9 9 6 e e . . . . . 
        . . e e . 9 9 9 9 e e e . . . . 
        . . . . . 9 9 9 9 e e e . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . d d . d d . . . . . . 
        . . . . . e e . e e . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingDown)
    )
})
forever(function () {
    characterAnimations.loopFrames(
    Fernando,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . e e f . . . . . . . 
        . . . . . . e e f . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . 6 e 8 . . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . . 9 9 6 . . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . e . e . . . . . . . 
        . . . . . . e . e . . . . . . . 
        . . . . . . e f e f . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingRight)
    )
})
forever(function () {
    characterAnimations.loopFrames(
    Fernando,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . e e f f f e e . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . . 6 e 8 . . . . . . . 
        . . . . e e 9 9 9 6 e . . . . . 
        . . . e e 9 9 9 6 e e . . . . . 
        . . e e . 9 9 9 9 e e e . . . . 
        . . . . . 9 9 9 9 e e e . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . d d . d d . . . . . . 
        . . . . . e e . e e . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingUp)
    )
})
forever(function () {
    characterAnimations.loopFrames(
    cobra,
    [img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `,img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `,img`
        . . . c c c c c c . . . . . . . 
        . . c 6 7 7 7 7 6 c . . . . . . 
        . c 7 7 7 7 7 7 7 7 c . . . . . 
        c 6 7 7 7 7 7 7 7 7 6 c . . . . 
        c 7 c 6 6 6 6 c 7 7 7 c . . . . 
        f 7 6 f 6 6 f 6 7 7 7 f . . . . 
        f 7 7 7 7 7 7 7 7 7 7 f . . . . 
        . f 7 7 7 7 6 c 7 7 6 f . . . . 
        . . f c c c c 7 7 6 f c c c . . 
        . . c 6 2 7 7 7 f c c 7 7 7 c . 
        . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
        . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
        . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
        . . c 6 1 1 1 1 1 7 6 6 c c . . 
        . . . c c c c c c c c c c . . . 
        `,img`
        . . . c c c c c c . . . . . . . 
        . . c 6 7 7 7 7 6 c . . . . . . 
        . c 7 7 7 7 7 7 7 7 c . . . . . 
        c 6 7 7 7 7 7 7 7 7 6 c . . . . 
        c 7 c 6 6 6 6 c 7 7 7 c . . . . 
        f 7 6 f 6 6 f 6 7 7 7 f . . . . 
        f 7 7 7 7 7 7 7 7 7 7 f . . . . 
        . f 7 7 7 7 6 c 7 7 6 f . . . . 
        . . f c c c c 7 7 6 f c c c . . 
        . . c 6 2 7 7 7 f c c 7 7 7 c . 
        . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
        . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
        . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
        . . c 6 1 1 1 1 1 7 6 6 c c . . 
        . . . c c c c c c c c c c . . . 
        `],
    100,
    characterAnimations.rule(Predicate.NotMoving)
    )
})
