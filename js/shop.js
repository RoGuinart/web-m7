var products = 
{
        0:   ['categoria',              'nom',              'preu',     'imatge',            "Descripció"     ],
        
        1:   ['accessoris',             'Xumet',            '1',        'xumet.jpg',         "Xumet perquè el nen xumi"     ],
        2:   ['roba',                   'Pitet',            '2.49',     'pitet.jpg',         "De "     ],
        3:   ['higiene',                'Esponja',          '4.95',     'esponja.jpg',       ""     ],
        4:   ['roba',                   'Mitjons',          '12.40',    'mitjons.jpg',       ""     ],
        5:   ['higiene accessoris',     'Raspall',          '9.90',     'raspall.jpg',       ""     ],
        6:   ['accessoris',             'Cadira cotxe',     '249.90',   'cadiracotxe.jpg',   ""     ],
        7:   ['accessoris',             'Biberó',           '6.75',     'bibero.jpg',        ""     ],
        8:   ['roba',                   'Samarreta',        '6.99',     'samarreta.jpg',     ""     ],
        9:   ['joguines',               'Nina',             '13.30',    'nina.jpg',          ""     ],
        10:  ['higiene joguines',       'Ànec de goma',     '6.75',     'anec.jpg',          ""     ],
        11:  ['joguines',               'Cotxe elèctric',   '495',      'cotxe.jpg',         ""     ],
        12:  ['accessoris joguines',    'Mòvil',            '35.75',    'movil.jpg',         ""     ],
        13:  ['joguines',               'Os de peluix',     '16.75',    'osito.jpg',         ""     ],
        14:  ['accessoris',             'Cotxet',           '164.75',   'cotxet.jpg',        ""     ],
        15:  ['roba',                   'Sabates',          '9.20',     'sabates.jpg',       ""     ],
        16:  ['higiene',                'Orinal',           '24',       'orinal.jpg',        ""     ]
} // TODO: com moure això a un altre fitxer?


function loadProducts(cat)
{
    var found = false;
    console.log("CAT: " +cat)
    const len = Object.keys( products ).length;

    for (let i = 1; i < len; i++) {
        const elements = products[i];
        
        let prod_cat = elements[0].split(' ');
        for (let j = 0; j < prod_cat.length; j++) {

            if(cat != "" && prod_cat[j] !== cat) // cat == "" si no es passa paràmetre especial. Ho llista tot.
                continue;
            else if(cat == "" && j > 0) // Ja s'ha llistat
                break;

            let pNom  = elements[1];
            let pPreu = elements[2];
            let pImg  = elements[3];
            
            var infoDiv     = $(`<a class="infoDiv" href=#></a>`)
            var priceDiv    = $(`<div class="priceDiv"></div>`);
            
            var prod        = $(`<a id="${i}" class="product"></a>`);
            var nom         = $(`<h2 class="prod_nom">${pNom}</h2>`);
            var img         = $(`<img src="../img/products/${pImg}" alt=""/>`);
            var preu        = $(`<p class="prod_preu">${pPreu}€</p>`);
            const addToCart = $(`<button onclick="addToCart(this)" class="addToCart">Add to cart</button>`);

            
            $(`#productsDiv`).prepend(prod);
            $(`#${i}`).append(infoDiv);
            $(`#${i}`).append(priceDiv);

            $(`#${i} > .infoDiv`).append(nom);
            $(`#${i} > .infoDiv`).append(img);
            $(`#${i} > .priceDiv`).append(addToCart);
            $(`#${i} > .priceDiv`).append(preu);

            found = true;
        }
    }
	
    if(!found)
    {
        $("#productsDiv").append("<h1>Ups! No hi ha productes que s'adeqüin a la vostra cerca!</h1>")
    }

}

function parseURL()
{
    const url = window.location.href;

    for (let i = url.length - 1; i >= 0; i--) {
        if(url[i] == '#')
        {
            var cat = url.substring(i+1, url.length);
            loadProducts(cat);
            return;
        }
    }

    // En el cas que no es trobi '#', ho mostra tot
    loadProducts("");
}

function addToCart(product)
{
    console.log(product.parentElement.id);
}

window.onload = parseURL();
