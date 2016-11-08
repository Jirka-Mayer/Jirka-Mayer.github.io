class Game
{
    constructor()
    {
        // game framework
        this.gameTime = new GameTime()
        this.ended = false

        // rendering
        this.canvas = document.getElementById("graphics")
        this.graphics = this.canvas.getContext("2d")

        this.updateCanvasSize()

        // ui
        this.ui = new UI(this.canvas)
        window.onkeydown = this.ui.onKeyDown.bind(this.ui)
        window.onkeyup = this.ui.onKeyUp.bind(this.ui)
        this.canvas.onmousedown = this.ui.onMouseDown.bind(this.ui)
        this.canvas.onmouseup = this.ui.onMouseUp.bind(this.ui)
        this.canvas.onmousemove = this.ui.onMouseMove.bind(this.ui)
        this.canvas.onmouseleave = this.ui.onMouseUp.bind(this.ui)

        // game objects
        this.constants = new Constants()
        this.world = new World(this.constants)
        this.worldLoader = new WorldLoader(this.canvas, this.world, this.ui.camera)

        // debugging
        this.fpsMeter = document.getElementById("fps")
    }

    updateCanvasSize()
    {
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
    }

    run()
    {
        this.gameTime.update()

        this.update()
        this.draw()

        if (!this.ended)
            window.requestAnimationFrame(this.run.bind(this))
    }

    update()
    {
        this.world.update(this.gameTime)

        this.ui.update(this.gameTime)

        if (this.gameTime.frames % 10 == 0)
        {
            this.fpsMeter.innerHTML = "FPS: " + Math.floor(1 / this.gameTime.delta)
        }
    }

    draw()
    {
        this.graphics.clearRect(0, 0, this.canvas.width, this.canvas.height)
        
        this.world.draw(this.graphics, this.ui.camera)

        this.ui.draw(this.graphics)
    }
}