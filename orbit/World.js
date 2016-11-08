class World
{
    constructor(constants)
    {
        // dependency injection
        this.constants = constants

        this.bodies = []

        //this.bodies.push(new Body(0, 0, 1, 8, true))
        //this.bodies.push(new Body(30, 0, 1, 4, false, 0, 80))
        //this.bodies.push(new Body(200, 0, 1, 4, false, 0, 25))
        //this.bodies.push(new Body(220, 0, 0.1, 2, false, 0, 450))
        
        //this.bodies.push(new Body(200, 100, 1, 20, false, 0, 0))
        //this.bodies.push(new Body(230, 100, 1, 20, false, 0, 0))
    }

    update(gameTime)
    {
        var vector, distance
        var trash = []

        // update velocities and check collisions
        for (var i = 0; i < this.bodies.length; i++)
        {
            for (var j = i + 1; j < this.bodies.length; j++)
            {
                vector = this.bodies[i].position.sub(this.bodies[j].position)
                distance = vector.length()

                vector = vector.normalize()

                // collision
                if (distance <= this.bodies[i].radius + this.bodies[j].radius)
                {
                    this.handleCollision(this.bodies[i], this.bodies[j], vector, distance, trash)
                    continue
                }

                vector = vector.mul(
                    (gameTime.delta * this.constants.G * this.bodies[i].mass * this.bodies[j].mass)
                    / (distance * distance)
                )

                this.bodies[j].velocity = this.bodies[j].velocity.add(vector.div(this.bodies[j].mass))
                this.bodies[i].velocity = this.bodies[i].velocity.sub(vector.div(this.bodies[i].mass))
            }
        }

        // handle trash
        for (var i in trash)
            this.bodies.splice(this.bodies.indexOf(trash[i]), 1)

        // update positions
        this.updatePositions(gameTime)
    }

    handleCollision(a, b, vector, distance, trash)
    {
        if (a.locked)
        {
            trash.push(b)
            return
        }

        if (b.locked)
        {
            trash.push(a)
            return
        }

        var v

        // only change velocity if not moving apart
        v = -a.velocity.dot(vector)
        if (v < 0) v = 0

        // canceĺ velocity
        v = vector.mul(-v)
        a.velocity = a.velocity.sub(v)
        b.velocity = b.velocity.add(v)

        // repulsion
        v = vector.mul(a.radius + b.radius - distance).div(2)
        a.position = a.position.add(v)
        b.position = b.position.sub(v)
    }

    updatePositions(gameTime)
    {
        for (var i = 0; i < this.bodies.length; i++)
        {
            if (this.bodies[i].locked)
                continue

            this.bodies[i].position = this.bodies[i].position.add(
                this.bodies[i].velocity.mul(gameTime.delta)
            )
        }
    }

    draw(g, c)
    {
        for (var i in this.bodies)
            this.bodies[i].draw(g, c)
    }
}