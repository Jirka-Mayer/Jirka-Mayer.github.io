/**
 * All possible pairings of fonts
 * ==============================
 *
 * Possible values:
 * 
 * heading: {
 *     name: "Montserrat", // must be set
 *     weigth: 700, // default 400
 *     transform: "uppercase" // default "none",
 *     style: "italic" // default "normal"
 * }
 * 
 * paragraph: {
 *     name: "Montserrat",
 *     weigth: 700
 * }
 */

Config.fontPairings = [

    //////////
    // Lora //
    //////////

    // Lora + Raleway
    {
        paragraph: {
            name: "Lora"
        },
        heading: {
            name: "Raleway",
            weight: 200
        }
    },
    {
        paragraph: {
            name: "Lora"
        },
        heading: {
            name: "Raleway"
        }
    },
    {
        paragraph: {
            name: "Lora"
        },
        heading: {
            name: "Raleway",
            weight: 700
        }
    },
    {
        paragraph: {
            name: "Lora"
        },
        heading: {
            name: "Raleway",
            weight: 700,
            transform: "uppercase"
        }
    },

    // Lora + Montserrat
    {
        paragraph: {
            name: "Lora"
        },
        heading: {
            name: "Montserrat"
        }
    },
    {
        paragraph: {
            name: "Lora"
        },
        heading: {
            name: "Montserrat",
            weight: 700
        }
    },
    {
        paragraph: {
            name: "Lora"
        },
        heading: {
            name: "Montserrat",
            weight: 700,
            transform: "uppercase"
        }
    },

    // Lora + Playfair Display
    {
        paragraph: {
            name: "Lora"
        },
        heading: {
            name: "Playfair Display"
        }
    },
    {
        paragraph: {
            name: "Lora"
        },
        heading: {
            name: "Playfair Display",
            style: "italic"
        }
    },
    {
        paragraph: {
            name: "Lora"
        },
        heading: {
            name: "Playfair Display",
            weight: 700
        }
    },
    {
        paragraph: {
            name: "Lora"
        },
        heading: {
            name: "Playfair Display",
            weight: 700,
            style: "italic"
        }
    },
    {
        paragraph: {
            name: "Lora"
        },
        heading: {
            name: "Playfair Display",
            weight: 800
        }
    },
    {
        paragraph: {
            name: "Lora"
        },
        heading: {
            name: "Playfair Display",
            weight: 800,
            style: "italic"
        }
    },

    ///////////////
    // Open Sans //
    ///////////////

    // Open Sans + Montserrat
    {
        paragraph: {
            name: "Open Sans"
        },
        heading: {
            name: "Montserrat"
        }
    },
    {
        paragraph: {
            name: "Open Sans"
        },
        heading: {
            name: "Montserrat",
            weight: 700
        }
    },
    {
        paragraph: {
            name: "Open Sans"
        },
        heading: {
            name: "Montserrat",
            weight: 700,
            transform: "uppercase"
        }
    },

    // Open Sans + Playfair Display
    {
        paragraph: {
            name: "Open Sans"
        },
        heading: {
            name: "Playfair Display"
        }
    },
    {
        paragraph: {
            name: "Open Sans"
        },
        heading: {
            name: "Playfair Display",
            style: "italic"
        }
    },
    {
        paragraph: {
            name: "Open Sans"
        },
        heading: {
            name: "Playfair Display",
            weight: 700
        }
    },
    {
        paragraph: {
            name: "Open Sans"
        },
        heading: {
            name: "Playfair Display",
            weight: 800
        }
    },

    /////////////////////
    // Open Sans - 300 //
    /////////////////////

    // Open Sans + Montserrat
    {
        paragraph: {
            name: "Open Sans",
            weight: 300
        },
        heading: {
            name: "Montserrat"
        }
    },
    {
        paragraph: {
            name: "Open Sans",
            weight: 300
        },
        heading: {
            name: "Montserrat",
            weight: 700
        }
    },
    {
        paragraph: {
            name: "Open Sans",
            weight: 300
        },
        heading: {
            name: "Montserrat",
            weight: 700,
            transform: "uppercase"
        }
    },

    // Open Sans + Playfair Display
    {
        paragraph: {
            name: "Open Sans",
            weight: 300
        },
        heading: {
            name: "Playfair Display"
        }
    },
    {
        paragraph: {
            name: "Open Sans",
            weight: 300
        },
        heading: {
            name: "Playfair Display",
            style: "italic"
        }
    },
    {
        paragraph: {
            name: "Open Sans",
            weight: 300
        },
        heading: {
            name: "Playfair Display",
            weight: 700
        }
    },
    {
        paragraph: {
            name: "Open Sans",
            weight: 300
        },
        heading: {
            name: "Playfair Display",
            weight: 800
        }
    },
];

/*

    Suggestions
    ===========
    
    *Paragraph
        *Heading

    Open Sans
        Open Sans Condensed
        Raleway
        Indie Flower
        Merriweather

    Lora
        Ubuntu

    Roboto
        Raleway
        Playfair Display

    Droid Sans
        Raleway
        Playfair Display
        Droid Serif
        Lobster
        Ubuntu

 */