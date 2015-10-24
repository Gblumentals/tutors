var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
var catagories = [{
    matemātika: {
        pamatskolas_matemātika: [
            "agrā matemātika",
            "Aritmētika",
            "Pirms algebra",
            "pamata ģeometrija",
        ],
        Vidusskolas_matemātika_un_tālāk: [
            "Algebras pamati",
            "Diferenciālā augstākā matemātika",
            "Algebra I",
            "Integrāļu augstākā matemātika",
            "Ģeometrija",
            "Algebra II",
            "Diferenciālie vienādojumi",
            "Trigonometrija",
            "Lineārā algebra",
            "Varbūtība un statistika"
        ]

    }
}, {
    eksaktās_zinātnes: [
        "Bioloģija",
        "Organiskā ķīmīja",
        "Veselība un medicīna",
        "Fizika",
        "Kosmoloģija un astronomija",
        "Pētniecība",
        "Neorganiskā Ķīmīja"
    ]
}, {

    Ekonomika_un_finanses: [
        "Mikroekonomika",
        "Makroekonomika",
        "Finanses",
        "Uzņēmējdarbība"

    ]
}, {
    Māksla_un_humanitārās_zinātnes: [{
            Vēsture: [
                "Latvijas vēsture",
                "Pasaules vēsture"
            ]
        },
        "Mūzika"
    ],
    Mākslas_vēsture: [
        "Mākslas vēstures pamati",
        "Renesanse un Reformācija Eiropā",
        "Antīkā vēsture Eiropā un Āzijas rietumos",
        "Baroka, Rokoko un neo-klasiskā māklsa Eiropā",
        "Māksla Āzijā",
        "Mākla antīkajā Vidusjūrā",
        "Mākla Amerikā līdz pirmajam pasaules karam",
        "Māksla Afrikā",
        "Māksla Viduslaikos",
        "19.gadsimta māksla Eiropā",
        "Māksla Okeanijā",
        "Māksla Islāmā"
    ]
}];

res.render('index', {
	catagories : "catagories",
    title: 'Express'
});

// next();	
});

router.get('/register', function(req, res) {
    var x = '';
    res.render('register', {
        s: 's'
    });
});

module.exports = router;
