class WorldLoader
{
    constructor(canvas, world, camera)
    {
        this.canvas = canvas
        this.world = world
        this.camera = camera

        this.loadSelection = document.getElementById("load-selection")

        this.load_default()

        this.loadSelection.onchange = this.onLoadButton.bind(this)
    }

    reset()
    {
        this.camera.scale = 1
        this.camera.offset = new Vector(0, 0)

        this.world.bodies = []
    }

    onLoadButton()
    {
        this["load_" + this.loadSelection.value]()
    }

    load_default()
    {
        this.load_starPlanetMoon()
    }

    load_binaryStar()
    {
        this.reset()
        this.camera.scale = (this.canvas.height / 2) / 200

        this.world.bodies.push(new Body(-70, 0, 1, 4, false, 0, 20))
        this.world.bodies.push(new Body(70, 0, 1, 4, false, 0, -20))
    }

    load_starPlanetMoon()
    {
        this.reset()
        this.camera.scale = (this.canvas.height / 2) / 300

        this.world.bodies.push(new Body(0, 0, 1, 8, true))
        this.world.bodies.push(new Body(200, 0, 1, 4, false, 0, 35))
        this.world.bodies.push(new Body(220, 0, 0.1, 2, false, 0, 150))
    }

    load_starNeutronStar()
    {
        this.reset()
        this.camera.scale = (this.canvas.height / 2) / 300

        this.world.bodies.push(new Body(-100, 0, 50, 80, false, 0, 200))
        this.world.bodies.push(new Body(100, 0, 50, 2, false, 0, -200))
    }
}