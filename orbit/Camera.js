class Camera
{
    constructor(canvas)
    {
        this.canvas = canvas

        this.scale = 1
        this.offset = new Vector(0, 0)

        this.MOVEMENT_SPEED = 700
    }

    onKeyDown(e)
    {
        switch (e.keyCode)
        {
            case 190:
            case 107:
                this.scale /= 0.9
                break

            case 109:
            case 188:
                this.scale *= 0.9
                break
        }
    }

    update(gameTime, keys)
    {
        if (keys[37])
            this.offset.x -= gameTime.delta * this.MOVEMENT_SPEED / this.scale

        if (keys[39])
            this.offset.x += gameTime.delta * this.MOVEMENT_SPEED / this.scale

        if (keys[38])
            this.offset.y -= gameTime.delta * this.MOVEMENT_SPEED / this.scale

        if (keys[40])
            this.offset.y += gameTime.delta * this.MOVEMENT_SPEED / this.scale
    }

    // to screen

    transformX(x)
    {
        return (x - this.offset.x) * this.scale + this.canvas.width / 2
    }

    transformY(y)
    {
        return (y - this.offset.y) * this.scale + this.canvas.height / 2
    }

    transformLength(l)
    {
        return l * this.scale
    }

    // from screen

    fromScreenX(x)
    {
        return (x - this.canvas.width / 2) / this.scale + this.offset.x
    }

    fromScreenY(y)
    {
        return (y - this.canvas.height / 2) / this.scale + this.offset.y
    }

    fromScreenLength(l)
    {
        return l / this.scale
    }
}