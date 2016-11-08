class GameTime
{
    constructor()
    {
        this.total = 0
        this.delta = 0
        this.frames = 0

        this.firstFrame = new Date()
        this.lastFrame = new Date()
    }

    update()
    {
        var currentFrame = new Date()

        this.delta = (currentFrame - this.lastFrame) / 1000
        this.total = (currentFrame - this.firstFrame) / 1000

        this.lastFrame = currentFrame
        this.frames++
    }
}