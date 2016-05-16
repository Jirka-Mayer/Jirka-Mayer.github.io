
Sloupcový layout webových stránek
=================================

- Layout (= rozvržení?) = kde co je a jak je to velké a jak daleko od ostatního
- Webové stránky jsou často rozděleny na sekce ([ukázka](sekce.html))
    - To není pravidlo, např. článek nelze rozdělit do sekcí
- Každá sekce může mít různý layout
    - Nadpis, podnadpis, obrázek - pod sebou
    - Mřížka obrázků
    - Nadpis přes obrázek na pozadí
    - Dva, či více sloupců
- Ukázky sloupcového layoutu
    - [apple.com](http://www.apple.com/cz/ipad-pro/)
    - [squarespace.com](http://squarespace.com/)

Jak na to?
----------

- V základu to jsou jen `<div>`y vedle sebe
    - Co je uvnitř nás nezajímá
- Jak je dostat vedle sebe?
    - Tabulky
        - Dříve OK, dnes tu máme mobily
    - Nechat prohlížeč řadit elementy jako slova v textu `display: inline-block` nebo `float`
        - Funguje a používá se, ale jsou s ním spojeny určité problémy (např. `font-size: 0`)
        - Hlavní způsob před rozšířením flexboxu
    - Flexbox
        - Jednoduchý, intuitivní, flexibilní
        - Dnes je podpora dostatečná (jen pozor na starší iPady)

Začneme tím, že si do stránky dáme 3 divy, jeden jako rodičovský a dva uvnitř jako dva sloupce.

Vysvětlení marginu, paddingu a borderu [zde](http://www.w3schools.com/css/css_boxmodel.asp).

```html
<!DOCTYPE html>
<html>
<head>
    <title>Sloupcový layout</title>

    <style>

        body {
            margin: 0; /* aby byl obsah až k okrajům obrazovky */
            font-family: sans-serif; /* hezčí písma */
        }

        /* třída pro flexbox */
        .flexbox {
            /* zatím nic */
        }

        /* třída pro sloupec */
        .col {
            /* několik stylů, aby byl vidět */
            margin: 10px;
            padding: 10px;
            background: #ddd;
        }

    </style>

</head>
<body>

    <!-- rodičovský div - flexbox -->
    <div class="flexbox">

        <!-- první sloupec (column) -->
        <div class="col">
            První sloupec
        </div>

        <!-- druhý sloupec -->
        <div class="col">
            Druhý sloupec
        </div>
        
    </div>
    
</body>
</html>
```

Výsledek vypadá [takto](postup-1.html).

Oba sloupce jsou ale zatím pod sebou. Těd uděláme z rodičovského divu flexbox. Následující řádky je potřeba přidat do stylů:

```css
.flexbox {
    display: flex; /* udělá z elementu flexbox */
}

.col {
    /* ... starší kód ... */

    /* roztáhne elementy do zbývajícího prostoru */
    flex: 1;
}
```

Výsledek vypadá [takto](postup-2.html).

Teď přidáme do sloupců nějaký smysluplný obsah.

```html
<div class="col" style="
    background-image: url(http://images.apple.com/v/ipad-pro/d/images/overview/expand_large.jpg);
    background-size: cover;
"></div>

<div class="col">
    <h2>Skvělé způsoby, jak rozšířit možnosti iPadu Pro.</h2>
    <p>S doplňky navrženými na míru možnostem a výkonu iPadu Pro můžete být ještě kreativnější a produktivnější. Projděte si nabídku krytů, klávesnic a dalších doplňků.</p>
    <a href="#">Doplňky k iPadu</a>
</div>
```

[Výsledek](postup-3.html).

Trochu vylepšíme písma. Načteme font [Roboto](https://www.google.com/fonts/specimen/Roboto), který používá Google na svých stránkách a je i výchozím písmem pro Android OS.

Pro načtení písma přidáme link do hlavičky dokumentu:

```html
<head>
    <title>Sloupcový layout</title>

    <!-- tenhle řádek: -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,100&amp;subset=latin,greek-ext" rel="stylesheet" type="text/css">

    <style> /* ... naše styly ... */ </style>
</head>
```

A použijeme ho - jemný pro nadpis a tenký pro odstavec a odkazy.

```css
h2 {
    margin: 0;

    font-family: "Roboto", sans-serif;
    font-weight: 100; /* jemný */
    font-size: 40px;
}

p, a {
    font-family: "Roboto", sans-serif;
    font-weight: 300; /* tenký */
    font-size: 20px;
    line-height: 1.4;
}

a {
    text-decoration: none;
    color: #08c;
}
```

A ještě upravíme odsazení textu od okrajů sloupce a odsadíme celý flexbox od okrajů okna.

```css
.flexbox {
    display: flex;

    margin: 0 10%
}

.col {
    margin: 0;
    padding: 80px 50px;

    flex: 1;
}
```

[Výsledek](postup-4.html).

Dokončení
---------

Nakonec ještě můžeme přidal více obsahu ať je naše stránka plnější.

```html

<div style="text-align: center; margin: 50px 0;">
    <h2 style="font-size: 50px;">Sloupcový layout webových stránek</h2>
    <p>Aneb jak programovat se stylem</p>
</div>

<!-- ... tady je současný HTML kód ... -->
<!-- ... -->
<!-- ... -->

<div style="text-align: center; margin-top: 50px;">
    <h2>I ke Squarespace se dostaneme</h2>
    <p>Ale jen text bez obrázků, na to není čas</p>
</div>

<div class="flexbox">
    <div class="col">
        <h2>Powerful yet simple</h2>
        <p>Creating your website with Squarespace is a simple, intuitive process. Just add and arrange your content and features anywhere you want with the click of a mouse.</p>
    </div>
    <div class="col">
        <h2>A Custom Domain</h2>
        <p>Squarespace makes adding a custom domain to your site simple, and every annual account receives a custom domain for free for a year.</p>
    </div>
    <div class="col">
        <h2>Serious eCommerce</h2>
        <p>Design a best-in-class online storefront with award-winning templates, customizable settings, shoppable lookbooks, and more — all without a single plug-in.</p>
    </div>
</div>

<p style="margin-bottom: 100px; text-align: center;">Díky za pozornost, snad vás to alepoň trochu nadchlo.</p>

```

A finální vzhled je [zde](final.html).

Díky za pozornost.
