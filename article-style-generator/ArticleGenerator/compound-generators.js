
/**
 * Generate new styles
 */
ArticleGenerator.generateAll = function()
{
    if (!this.hasOwnProperty("state"))
        this.state = {};

    this.gen_FontPairing();

    this.gen_ParagraphFontSize();
    this.gen_ParagraphLineHeight();
    this.gen_ParagraphTextAlign();
    this.gen_ParagraphMargin();

    this.gen_HeadingFontSize();
    this.gen_HeadingTextAlign();

    this.gen_WrapperWidth();

    this.gen_BackgroundColor();
    this.gen_PrimaryColor();
    this.gen_ParagraphAlpha();

    this.tryAutoApply();
};

/**
 * Generate new font pairing
 */
ArticleGenerator.generateFonts = function()
{
    this.gen_FontPairing();

    this.tryAutoApply();
};

/**
 * Generate new font pairing
 */
ArticleGenerator.generateSizes = function()
{
    this.gen_ParagraphFontSize();
    this.gen_ParagraphLineHeight();
    this.gen_ParagraphMargin();

    this.gen_HeadingFontSize();

    this.gen_WrapperWidth();

    this.tryAutoApply();
};

/**
 * Generate new font pairing
 */
ArticleGenerator.generateAlign = function()
{
    this.gen_ParagraphTextAlign();
    this.gen_HeadingTextAlign();

    this.tryAutoApply();
};