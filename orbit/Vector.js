class Vector
{
    constructor(x, y)
    {
        this.x = x || 0
        this.y = y || 0
    }

    add(that)
    {
        return new Vector(
            this.x + that.x,
            this.y + that.y
        )
    }

    sub(that)
    {
        return new Vector(
            this.x - that.x,
            this.y - that.y
        )
    }

    mul(that)
    {
        return new Vector(
            this.x * that,
            this.y * that
        )
    }

    div(that)
    {
        return new Vector(
            this.x / that,
            this.y / that
        )
    }

    equals(that)
    {
        return this.x == that.x && this.y == that.y
    }

    dot(that)
    {
        return this.x * that.x + this.y * that.y
    }

    length()
    {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    lengthSquared()
    {
        return this.x * this.x + this.y * this.y
    }

    square()
    {
        return this.mul(this.length())
    }

    invert()
    {
        return new Vector(
            1 / this.x,
            1 / this.y
        )
    }

    normalize()
    {
        return this.mul(1 / this.length())
    }
}