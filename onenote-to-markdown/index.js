/////////////
// Options //
/////////////

// input elements
var titleCheckbox = document.getElementById("settings__title-as-heading")
var headingsCheckbox = document.getElementById("settings__close-headings")
var bulletsRadios = document.getElementsByName("settings__list-bullets")
var bulletTextbox = document.getElementById("settings__custom-bullet")
var indentationOptions = document.getElementById("settings__indentation")
var clipboardTypeOptions = document.getElementById("settings__clipboard")
var versionOptions = document.getElementById("settings__version")
var versionHelpButton = document.getElementById("settings__version-help")

/**
 * Check the "custom" radio if the text changes
 */
bulletTextbox.onchange = function()
{
    for (var i in bulletsRadios)
    {
        if (bulletsRadios[i].value == "custom")
        {
            bulletsRadios[i].checked = true
            break
        }
    }
}

versionHelpButton.onclick = function(e)
{
    alert("Say you have a document written in OneNote 2010 but it's openned in OneNote 2013. " +
        "You can force the convertor to interpret the styles as if it was copied from the 2010 version.")

    e.preventDefault()
    e.stopPropagation()
    return false
}

/**
 * Update convertor options
 */
function updateOptions()
{
    OneNoteToMarkdown.options.treatTitleAsH1 = titleCheckbox.checked
    OneNoteToMarkdown.options.closeHeadings = headingsCheckbox.checked

    for (var i in bulletsRadios)
    {
        if (bulletsRadios[i].checked)
        {
            if (bulletsRadios[i].value == "custom")
            {
                if (bulletTextbox.value == "")
                {
                    OneNoteToMarkdown.options.listBullets = "*"
                    break
                }

                OneNoteToMarkdown.options.listBullets = bulletTextbox.value
            }
            else
                OneNoteToMarkdown.options.listBullets = bulletsRadios[i].value

            break
        }
    }

    if (indentationOptions.value == "tab")
        OneNoteToMarkdown.options.indentation = "\t"
    else
    {
        OneNoteToMarkdown.options.indentation = ""
        for (var i = 0; i < parseInt(indentationOptions.value); i++)
            OneNoteToMarkdown.options.indentation += " "
    }

    OneNoteToMarkdown.options.clipboardType = clipboardTypeOptions.value

    if (versionOptions.value == "null")
        OneNoteToMarkdown.options.forcedVersion = null
    else
        OneNoteToMarkdown.options.forcedVersion = versionOptions.value
}

////////////////
// Converting //
////////////////

// get convertor elements
var inputDiv = document.getElementById("inputDiv")
var outputPre = document.getElementById("outputPre")

// handle the paste event
inputDiv.addEventListener("paste", function(e)
{
    // update settings
    updateOptions()

    // clear the input box
    inputDiv.innerHTML = ""

    // get the clipboard data and convert it
    var md = ""
    try
    {
        md = OneNoteToMarkdown.handlePaste(e)
        inputDiv.innerHTML = "Success!"
    }
    catch (error)
    {
        inputDiv.innerHTML = error
        console.error(error)
        md = error
    }

    // print out the markdown
    outputPre.innerHTML = md

    // prevent actual pasting
    e.stopPropagation()
    e.preventDefault()
    return false
})