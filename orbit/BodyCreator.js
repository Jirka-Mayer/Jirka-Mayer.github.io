class BodyCreator
{
    constructor()
    {
        this.dragStart = null
        this.dragEnd = null

        this.mouseX = 0
        this.mouseY = 0

        this.sizeSlider = document.getElementById("size-slider")
        this.massSlider = document.getElementById("mass-slider")
        this.staticCheckbox = document.getElementById("static-checkbox")
    }

    get bodyRadius()
    {
        return parseFloat(this.sizeSlider.value)
    }

    get bodyMass()
    {
        return parseFloat(this.massSlider.value)
    }

    onMouseDown(e, camera)
    {
        this.dragStart = new Vector(e.clientX, e.clientY)
        
        // add a static body
        if (this.staticCheckbox.checked)
        {
            this.dragStart = new Vector(e.clientX, e.clientY)
            window.game.world.bodies.push(new Body(
                camera.fromScreenX(this.dragStart.x),
                camera.fromScreenY(this.dragStart.y),
                this.bodyMass,
                this.bodyRadius,
                true, 0, 0
            ))

            this.dragStart = null
            return
        }
    }

    onMouseUp(e, camera)
    {
        if (!this.dragStart)
            return

        this.dragEnd = new Vector(e.clientX, e.clientY)

        if (this.dragStart.equals(this.dragEnd))
        {
            this.dragStart = null
            this.dragEnd = null
            return
        }

        var delta = this.dragStart.sub(this.dragEnd)
        window.game.world.bodies.push(new Body(
            camera.fromScreenX(this.dragStart.x),
            camera.fromScreenY(this.dragStart.y),
            this.bodyMass,
            this.bodyRadius,
            false,
            camera.fromScreenLength(delta.x),
            camera.fromScreenLength(delta.y)
        ))

        this.dragStart = null
        this.dragEnd = null
    }

    onMouseMove(e)
    {
        this.mouseX = e.clientX
        this.mouseY = e.clientY

        // if not dragging, return
        if (!this.dragStart)
            return

        this.dragEnd = new Vector(e.clientX, e.clientY)
    }

    draw(g, c)
    {
        // if not dragging, return
        if (!this.dragStart || !this.dragEnd)
        {
            g.beginPath()
            g.arc(this.mouseX, this.mouseY, c.transformLength(this.bodyRadius), 0, Math.PI * 2)
            g.stroke()
            return
        }
        
        g.beginPath()
        g.arc(this.dragStart.x, this.dragStart.y, c.transformLength(this.bodyRadius), 0, Math.PI * 2)
        g.moveTo(this.dragStart.x, this.dragStart.y)
        g.lineTo(this.dragEnd.x, this.dragEnd.y)
        g.stroke()
    }
}