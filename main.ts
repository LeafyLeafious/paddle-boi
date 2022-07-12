namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
    export const RightPaddles = SpriteKind.create()
}
function create_right_paddle () {
    Right_Paddle = sprites.create(assets.image`Paddle left`, SpriteKind.RightPaddles)
    controller.player2.moveSprite(Right_Paddle, 0, 150)
    Right_Paddle.right = 160
    Right_Paddle.setStayInScreen(true)
}
function create_left_paddle () {
    Left_paddle = sprites.create(assets.image`Paddle left`, SpriteKind.LeftPaddles)
    controller.moveSprite(Left_paddle, 0, 150)
    Left_paddle.left = 0
    Left_paddle.setStayInScreen(true)
}
function Create_Ball () {
    Ball = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Ball.setVelocity(100, 100)
    Ball.setBounceOnWall(true)
    Ball.y = randint(0, 120)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.LeftPaddles, function (sprite, otherSprite) {
    Ball.vx = Ball.x - 0
})
let Ball: Sprite = null
let Left_paddle: Sprite = null
let Right_Paddle: Sprite = null
Create_Ball()
create_left_paddle()
create_right_paddle()
