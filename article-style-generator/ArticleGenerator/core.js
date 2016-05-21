var ArticleGenerator = {};

//////////////////
// State object //
//////////////////

ArticleGenerator.state = {};

/**
 * Returns copy of the state object
 */
ArticleGenerator.getStateObject = function()
{
    return JSON.parse(JSON.stringify(this.state));
};

/**
 * Sets value of the state object
 */
ArticleGenerator.setStateObject = function(stateObject)
{
    this.state = JSON.parse(JSON.stringify(stateObject));
};

////////////////
// CSS Styles //
////////////////

/**
 * Prefix for all css selectors
 */
ArticleGenerator.cssPrefix = "";

/**
 * If true, apply is called after every generation or other update
 */
ArticleGenerator.autoApply = false;

/**
 * Get the style object
 */
ArticleGenerator.getStyleObject = function(mapping)
{
    // generate the style object
    var styleObject = {
        ".body": {
            "background-color": Utilities.colorToString(this.state.backgroundColor)
        },
        "p": {
            "margin": this.state.paragraphMargin,

            "font-family": '"' + this.state.fontPairing.paragraph.name + '"',
            "font-weight": this.state.fontPairing.paragraph.weight || 400,
            "font-size": this.state.paragraphFontSize + "px",
            "line-height": this.state.paragraphLineHeight,
            "text-align": this.state.paragraphTextAlign,

            "color": "rgba(0, 0, 0, " + this.state.paragraphAlpha + ")"
        },

        ".wrapper": {
            "margin": "0 auto",
            "width": this.state.wrapperWidth + "px"
        },

        "h1": {
            "font-family": '"' + this.state.fontPairing.heading.name + '"',
            "font-weight": this.state.fontPairing.heading.weight || 400,
            "text-transform": this.state.fontPairing.heading.transform || "none",
            "font-style": this.state.fontPairing.heading.style || "normal",
            "font-size": this.state.headingFontSize + "px",
            "text-align": this.state.headingTextAlign,

            "color": Utilities.colorToString(this.state.primaryColor)
        },
        "b": {
            "color": Utilities.colorToString(this.state.primaryColor)
        }
    };

    // remap the selectors
    mapping = mapping || {};
    for (var from in mapping)
    {
        var to = mapping[from];

        styleObject[to] = styleObject[from];
        delete styleObject[from];
    }

    // return the result
    return styleObject;
};

/**
 * Apply generated styles to the document
 */
ArticleGenerator.apply = function()
{
    var styleObject = this.getStyleObject();

    // prefix selectors
    for (var selector in styleObject)
    {
        styleObject[this.cssPrefix + selector] = styleObject[selector];
        delete styleObject[selector];
    }

    Utilities.setStyles(styleObject);
};

ArticleGenerator.tryAutoApply = function()
{
    if (this.autoApply)
        this.apply();
};