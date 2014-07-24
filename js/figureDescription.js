    var terminalsD = {};
    var startwordsD = [];
    var wordstatsD = {};
    var figureDesciptions = [
"A Flamingo is executed to a Surface Flamingo Position. With the ballet leg maintaining its vertical position, the hips are lifted as the trunk unrolls while the bent leg moves to assume a Fishtail Position. The horizontal leg is lifted in an arc over the surface. As it passes the vertical leg which moves symmetrically in the opposite direction, a 180 degree rotation is started and is completed as a Split Position is assumed. A Walkout Front is executed.", 


"A Flamingo is executed to a Surface Flamingo Position. As the body unrolls, the bent leg is extended horizontally to assume a Fishtail Position. The horizontal leg is lifted in a 180° arc over the surface of the water, as it passes vertical, the vertical leg is moved to assume a Bent Knee Surface Arch Position. The bent knee is straightened and with continuous motion, an Arch to Back Layout Finish Action is executed.", 

"A Ballet Leg is assumed. Maintaining the position of the legs, the head moves downward as the lower back arches to a Knight Position. The body straightens as the non-ballet leg is lifted to vertical and as the ballet leg bends, the foot follows a vertical line through the hips, to assume a Bent Knee Vertical Position. A Half Twist is executed. The back arches as the extended leg lowers to assume a Bent Knee Surface Arch Position. The bent knee is straightened and with continuous motion, an Arch to Back Layout Finish Action is executed.", 


"A rapid Ballet Leg is assumed followed by a rapid partial Somersault Back Tuck, as both legs are drawn into a Tuck Position, until the shins are perpendicular to the surface. The trunk unrolls as the legs are straightened to assume a Vertical Position midway between the former vertical line through the hips and the former vertical line through the head and the shins. A Combined Spin of 360° is executed.", 


"With the head leading, a Dolphin is initiated until the hips are about to submerge. The hips, legs and feet continue to move along the surface, as the body rolls onto the face as it assumes a Front Pike Position. The legs are lifted simultaneously to a Bent Knee Vertical Position. A Half Twist is executed. The bent knee is extended to Vertical Position. A Vertical Descent is executed.", 

"From a Back Layout Position, the legs are raised to vertical as the body is submerged to a Back Pike Position with the toes just under the surface. A Thrust is executed to Vertical Position. A Vertical Descent is executed at the same tempo as the Thrust.", 


"From a Back Layout position the trunk is lowered as the hips are bent to assume a Submerged Ballet Leg Double Position. The feet separate along the surface as the hips rise and the body assumes a Split Position. The legs join to assume a Vertical Position at ankle level. A Vertical Descent is executed.", 


"From a Back Layout Position, the legs are raised to vertical as the body is submerged to a Back Pike Position with the toes just below the surface. A Thrust is executed as one foot is drawn along the inside of the extended leg to assume a Bent Knee Vertical Position. A Vertical Descent is executed in a Bent Knee Vertical Position at the same tempo as the Thrust.", 


"An Aurora is executed to a Fishtail Position. Maintaining the vertical alignment of the body, the foot of the horizontal leg is moved with accelerating speed in a horizontal arc of 180 at the surface to a Knight Position and with continuous motion and accelerating speed, the body maintains this position as an additional 360 rotation is executed in the same direction. The vertical leg is lowered to a Surface Arch Position. An Arch to Back Layout Finish Action is executed.", 

"A Hightower is executed to a Fishtail Position. A Catalina Reverse Rotation is executed as the horizontal leg is lifted, with minimum lateral movement, to assume a Surface Ballet Leg Double Position. The legs are bent to assume a Tub Position. The knees are straightened to resume a Back Layout Position.", 

"Nova is executed to a Bent Knee Surface Arch Position. The legs are simultaneously lifted to a Vertical Position as a Twirl is executed. A Half Twist in the opposite direction is executed. A Vertical Descent is executed.", 

"From a Front Layout Position, a Front Pike Position is assumed. One leg is lifted to vertical as the body rotates 90 on its longitudinal axis to assume a Side Fishtail Position, and with continuous motion another 90 rotation is executed in the same direction as the vertical leg lowers to assume a Split Position. The legs are lifted to Vertical Position. A Vertical Descent is executed." 

    ];


    for (var i = 0; i < figureDesciptions.length; i++) {
        var words = figureDesciptions[i].split(' ');
        terminalsD[words[words.length-1]] = true;
        startwordsD.push(words[0]);
        for (var j = 0; j < words.length - 1; j++) {
            if (wordstatsD.hasOwnProperty(words[j])) {
                wordstatsD[words[j]].push(words[j+1]);
            } else {
                wordstatsD[words[j]] = [words[j+1]];
            }
        }
    }

    var choice = function (a) {
        var i = Math.floor(a.length * Math.random());
        return a[i];
    };

    var make_figureDescription = function (min_length) {
        word = choice(startwordsD);
        var figureDescription = [word];
        while (wordstatsD.hasOwnProperty(word)) {
            var next_words = wordstatsD[word];
            word = choice(next_words);
            figureDescription.push(word);
            if (figureDescription.length > min_length && terminalsD.hasOwnProperty(word)) break;
        }
        if (figureDescription.length < min_length) return make_figureDescription(min_length);
        return figureDescription.join(' ');
    };

$(document).ready(function(){
    $('#generateDescription').on('click', function () {
    var figureDescription = make_figureDescription(20 + Math.floor(20 * Math.random()));
    $('#generated_figureDescription').html(figureDescription);
    });
});
