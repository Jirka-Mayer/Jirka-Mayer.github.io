class Planet
{
    constructor(x, y, mass)
    {
        this.x = x || 0
        this.y = y || 0

        this.mass = mass || 1
    }

    update(dt)
    {

    }

    draw(g)
    {
        g.beginPath()
        g.arc(this.x, this.y, 5, 0, Math.PI * 2)
        g.fill()
    }
}