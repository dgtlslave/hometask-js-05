var playList = [
 { author: "LED ZEPPELIN",
   song:"STAIRWAY TO HEAVEN" },
 { author: "QUEEN",
   song:"BOHEMIAN RHAPSODY" },
 { author: "LYNYRD SKYNYRD",
   song:"FREE BIRD" },
 { author: "DEEP PURPLE",
   song:"SMOKE ON THE WATER" },
 { author: "JIMI HENDRIX",
   song:"ALL ALONG THE WATCHTOWER" },
 { author: "AC/DC",
   song:"BACK IN BLACK" },
 { author: "QUEEN",
   song:"WE WILL ROCK YOU" },
 { author: "METALLICA",
   song:"ENTER SANDMAN" }
];


function list(array) {
   var listR = '<ol>';
   for (var i = 0; i < array.length; i++) {
      listR += '<li> ' + array[i].author + ' : ' + array[i].song + ' </li>';
   }

   listR += '</ol>';
   document.write(listR);
}

alert(list(playList));
