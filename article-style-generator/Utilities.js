var Utilities = {};

/**
 * Updates the document styles acording to the passed style object
 */
Utilities.setStyles = function(styles)
{
    var outputCSS = "";

    // all selectors
    for (selector in styles)
    {
        outputCSS += selector + " {\n";

        // all properties
        for (property in styles[selector])
        {
            // ignore properties starting with an underscore
            if (property[0] == "_")
                continue;

            outputCSS += "\t" + property + ": " + styles[selector][property] + ";\n";
        }

        outputCSS += "}";
    }

    document.getElementById("styleInput").innerHTML = outputCSS;
}

/**
 * Clamp a number into an interval
 */
Math.clamp = function(min, max, val)
{
    if (val < min)
        return min;
    else if (val > max)
        return max;
    else
        return val;
};

/**
 * Merges two objects
 */
Utilities.mergeObjects = function(a, b)
{
    var out = {};

    for (var i in a)
    {
        out[i] = a[i];
    }

    for (var i in b)
    {
        out[i] = b[i];
    }

    return out;
};

////////////
// Colors //
////////////

/**
 * Turns a color object into a CSS hsl string
 */
Utilities.colorToString = function(color)
{
    return "hsl(" +
        color.hue + ", " +
        Math.round(color.saturation * 10000) / 100 +
        "%, " + Math.round(color.lightness * 10000) / 100 + "%)";
};

/**
 * Wrap hue into the 0 - 360 interval
 */
Utilities.wrapHue = function(hue)
{
    hue %= 360;

    if (hue < 0)
        hue += 360;

    return hue;
};

////////////
// Random //
////////////

/**
 * Generates a random float number in a given interval
 */
Utilities.randomFloatBetween = function(min, max)
{
    return (max - min) * Math.random() + min;
}

/**
 * Generates a random integer number in a given interval
 */
Utilities.randomIntBetween = function(min, max)
{
    return Math.round(this.randomFloatBetween(min, max));
}

/**
 * Returns a random element from an array
 */
Utilities.randomFromArray = function(array)
{
    return array[this.randomIntBetween(0, array.length - 1)];
}