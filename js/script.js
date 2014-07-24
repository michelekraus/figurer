    var terminals = {};
    var startwords = [];
    var wordstats = {};
    var figures = [
    "Ballet Leg Single", 

    "Ballet Leg Alternate",  

    "Submarine Ballet Leg Single",  

    "Ballet Leg Double",  

    "Submarine Ballet Leg Double",  

    "Ibis Half Twist",  

    "Ibis Full Twist",  

    "Ibis Twirl",  

    "Ibis Spinning 180°",  

    "Ibis Spinning 180°",  

    "Ibis Continuous Spin",  

    "Ibis Twist Spin",  

    "Ibis Spin Up 180°",  

    "Ibis Spin Up 360°",  

    "Ibis Combined Spin",  

    "Catalina ½ Twist",  

    "Catalina Full Twist",  

    "Catalina Split Close Twirl",  

    "Catalina Spinning 180°",  

    "Catalina Spinning 360°",

    "Catalina Continuous Spin",  

    "Catalina Twist Spin",  

    "Catalina Spin Up 180°",  

    "Catalina Spin Down 360°",  

    "Catalina Combined Spin",  

    "Catalarc Open 360°",  

    "Eiffel Tower ½ Twist",  

    "Eiffel Tower Full Twist", 

    "Eiffel Tower Twirl", 

    "Eiffel Tower Spinning 180°", 

    "Eiffel Tower Split Join",  

    "Eiffel Tower Continuous Spin",  

    "Eiffel Tower Twist Spin",  

    "Eiffel Tower Spin Down 180°",  

    "Eiffel Tower Spin Down 360°",

    "Eiffel Walk",  

    "Flamingo ½ Twist",  

    "Flamingo Full Twist",  

    "Flamingo Twirl",  

    "Flamingo Spinning 180°",  

    "Flamingo Spinning 360°",  

    "Flamingo Continuous Spin",  

    "Flamingo Twist Spin",  

    "Flamingo Spin Up 180°",  

    "Flamingo Spin Up 360°",  

    "Flamingo Combined Spin",  

    "Flamingo Bent Knee",  

    "Stingray Twirl Up Closing",  

    "Manta Ray Double Submurged",  

    'Knight Split Join Up Spin',  

    'London Walk Full Spin Twist',  

    'Albatross ½ Twist',  

    'Albatross Full Twist',  

    'Albatross Twirl', 

    'Albatross Spinning 180°',  

    'Albatross Spinning 360°',  

    'Albatross Spin Up 180°',  

    'Albatross Spin Up 360°',
     
    "Barracuda Somersault Back Pike Spinning 180°",  

    "Barracuda Somersault Back Pike Spinning 360°",  

    "Barracuda Somersault Back Pike Continuous Spin",  

    "Barracuda Somersault Back Pike Spin Up 180°", 

    "Goeland Airborne Split Closing", 

    "Flying Fish Spinning 180°",  

    "Flying Fish Spinning 360°", 

    "Barracuda Airborne Split", 

    "Somersault Back Tuck", 

    "Subalina Submurged", 

    "Subilarc Full Spin",  

    "Ballerina Walk",  

    "Jupiter Walk Spinning",  

    "Lagoon Alternate Bent Knee",  

    "Aurora Open",  

    "Aurora ½ Twist",  

    "Aurora Twirl",  

    "Kipswirl Spinning 180°",  

    "Kipswirl Spinning 360°",  

    "Kipswirl Continuous Spin",  

    "Elevator Spinning 180°", 

    "Kipnus Variant",

    "Gaviata Variant Split",  

    "Gaviata Open 180°",  

    "Heron Variant Split", 

    "Heron Twirl",  

    "Butterfly",  

    "Neptunus", 

    "Side Fishtail Split",  

    "Beluga",  

    "Dalecarlia",  

    "Tower",  

    "Minerva Front", 

    "Porpoise Spin Up 180°", 

    "Porpoise ½ Twist",  

    "Walkover Front",  

    "Prawn",  

    "Surface Prawn",   

    "Water Drop", 

    "Swordfish",  

    "Swordasub",  

    "Swordtail",  

    "Swordalina",  

    "Swordfish Straight Leg",  

    "Hightower",  

    "Alba",

    "Walkover Back",  

    "Nova Twist Spin",  

    "Cyclone",  

    "Cyclone Twirl", 

    "Cyclone Spinning 180°",

    ];


    for (var i = 0; i < figures.length; i++) {
        var words = figures[i].split(' ');
        terminals[words[words.length-1]] = true;
        startwords.push(words[0]);
        for (var j = 0; j < words.length - 1; j++) {
            if (wordstats.hasOwnProperty(words[j])) {
                wordstats[words[j]].push(words[j+1]);
            } else {
                wordstats[words[j]] = [words[j+1]];
            }
        }
    }

    var choice = function (a) {
        var i = Math.floor(a.length * Math.random());
        return a[i];
    };

    var make_figure = function (min_length) {
        word = choice(startwords);
        var figure = [word];
        while (wordstats.hasOwnProperty(word)) {
            var next_words = wordstats[word];
            word = choice(next_words);
            figure.push(word);
            if (figure.length > min_length && terminals.hasOwnProperty(word)) break;
        }
        if (figure.length < min_length) return make_figure(min_length);
        return figure.join(' ');
    };

$(document).ready(function(){
    $('#generate').on('click', function () {
    var figure = make_figure(3 + Math.floor(3 * Math.random()));
    $('#generated_figure').html(figure);
    });
});
