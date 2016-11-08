class InfoBox
{
    constructor()
    {
        this.trigger = document.getElementById("info-trigger")
        this.box = document.getElementById("info-box")

        this.trigger.onclick = this.onTriggerClick.bind(this)

        this.displayed = false
    }

    onTriggerClick()
    {
        this.displayed = !this.displayed

        if (this.displayed)
            this.box.style.display = "block"
        else
            this.box.style.display = "none"
    }
}