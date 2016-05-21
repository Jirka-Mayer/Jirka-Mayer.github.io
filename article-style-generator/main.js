var gen = Object.create(ArticleGenerator);
gen.cssPrefix = ".preview ";
gen.autoApply = true;

gen.generateAll();

window.onkeydown = function(event)
{
    if (event.keyCode == 32)
    {
        event.preventDefault();

        gen.generateAll();
    }
};