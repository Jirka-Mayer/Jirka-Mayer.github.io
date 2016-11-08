class UI
{
    constructor(canvas)
    {
        this.bodyCreator = new BodyCreator()
        this.camera = new Camera(canvas)
        this.infoBox = new InfoBox()

        // hold pressed keys
        this.pressedKeys = {}
    }

    update(gameTime)
    {
        this.camera.update(gameTime, this.pressedKeys)
    }

    draw(g)
    {
        this.bodyCreator.draw(g, this.camera)
    }

    onKeyDown(e)
    {
        //console.log(e.keyCode)

        this.pressedKeys[e.keyCode] = true

        switch (e.keyCode)
        {
            // "P" (pause)
            case 80:
                if (window.game.ended)
                {
                    window.game.ended = false
                    window.game.gameTime.lastFrame = new Date()
                    window.game.run()
                }
                else
                {
                    window.game.ended = true
                }
                break
        }

        this.camera.onKeyDown(e)
    }

    onKeyUp(e)
    {
        this.pressedKeys[e.keyCode] = false
    }

    onMouseDown(e)
    {
        this.bodyCreator.onMouseDown(e, this.camera)
    }

    onMouseUp(e)
    {
        this.bodyCreator.onMouseUp(e, this.camera)
    }

    onMouseMove(e)
    {
        this.bodyCreator.onMouseMove(e)
    }
}