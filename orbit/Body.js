class Body
{
    constructor(x, y, mass, radius, locked, vx, vy)
    {
        this.locked = locked

        this.position = new Vector(x || 0, y || 0)
        this.velocity = new Vector(vx || 0, vy || 0)

        this.mass = mass || 1
        this.radius = radius || 1
    }

    draw(g, c)
    {
        if (this.locked)
            g.fillStyle = "#E98A15"
        else
            g.fillStyle = "#59114D"

        g.beginPath()
        g.arc(
            c.transformX(this.position.x),
            c.transformY(this.position.y),
            c.transformLength(this.radius),
            0, Math.PI * 2
        )
        g.fill()
    }
}