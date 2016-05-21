
///////////
// Other //
///////////

ArticleGenerator.gen_FontPairing = function()
{
    this.state.fontPairing = Utilities.randomFromArray(Config.fontPairings);
};

ArticleGenerator.gen_WrapperWidth = function()
{
    // generate from font size
    var width = Math.round(
        this.state.paragraphFontSize *
        Utilities.randomFloatBetween(33.33, 55.55));

    // clamp it
    width = Math.clamp(700, 1200, width);

    // set it
    this.state.wrapperWidth = width;
};

///////////////
// Paragraph //
///////////////

ArticleGenerator.gen_ParagraphFontSize = function()
{
    if (this.state.fontPairing.paragraph.weight && this.state.fontPairing.paragraph.weight < 400)
    {
        // thin fonts have to be bigger
        this.state.paragraphFontSize = Utilities.randomIntBetween(20, 30);
    }
    else
    {
        this.state.paragraphFontSize = Utilities.randomIntBetween(18, 30);
    }
};

ArticleGenerator.gen_ParagraphLineHeight = function()
{
    this.state.paragraphLineHeight = Utilities.randomIntBetween(12, 16) / 10;
};

ArticleGenerator.gen_ParagraphTextAlign = function()
{
    this.state.paragraphTextAlign = Utilities.randomFromArray([
        "left", "left", "left", "left",
        "justify", "justify",
        "center"
    ]);
};

ArticleGenerator.gen_ParagraphMargin = function()
{
    // generate from font size
    var vMargin = Math.round(
        this.state.paragraphFontSize *
        Utilities.randomFloatBetween(0.9, 2.3)
    );

    // set it
    this.state.paragraphMargin = vMargin + "px 0";
};

/////////////
// Heading //
/////////////

ArticleGenerator.gen_HeadingFontSize = function()
{
    // generate
    var fontSize = Utilities.randomIntBetween(30, 80);

    // must be at least 200% of the paragraph size
    var minSize = Math.round(this.state.paragraphFontSize * 2);
    if (fontSize < minSize)
        fontSize = minSize;

    // set
    this.state.headingFontSize = fontSize;
};

ArticleGenerator.gen_HeadingTextAlign = function()
{
    this.state.headingTextAlign = Utilities.randomFromArray([
        "left", "left", "left",
        "center"
    ]);
};

////////////
// Colors //
////////////

ArticleGenerator.gen_BackgroundColor = function()
{
    this.state.backgroundColor = {};

    /*
        Some values have limits above 1 to allow for white and gray backgrounds (sometimes)
     */
    this.state.backgroundColor.hue = Utilities.randomIntBetween(0, 359);
    this.state.backgroundColor.saturation = Math.clamp(0, 1, Utilities.randomFloatBetween(0, 1.3));
    this.state.backgroundColor.lightness = Math.clamp(0, 1, Utilities.randomFloatBetween(0.95, 1.05));
};

ArticleGenerator.gen_PrimaryColor = function()
{
    this.state.primaryColor = {};

    this.state.primaryColor.hue = this.state.backgroundColor.hue + Utilities.randomFromArray(
    [
        0, // monochromatic
        -30, -15, 15, 30, // analogous
        150, 180, 210, // complementary
        120, -120 // triadic
    ]);
    this.state.primaryColor.hue = Utilities.wrapHue(this.state.primaryColor.hue);

    this.state.primaryColor.saturation = Utilities.randomFloatBetween(0.2, 1);
    this.state.primaryColor.lightness = Utilities.randomFloatBetween(0.2, 0.8);
};

ArticleGenerator.gen_ParagraphAlpha = function()
{
    this.state.paragraphAlpha = Math.round(Utilities.randomFloatBetween(0.7, 1) * 100) / 100;
};