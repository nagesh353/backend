var ships = [{ locations: ["31", "41", "51"], hits: ["", "", ""] },
 { locations: ["14", "24", "34"], hits: ["", "hit", ""] },
 { locations: ["00", "01", "02"], hits: ["hit", "", ""] }]
 var ship2=ships[1];
// ship2=ships[1]
 console.log(ship2)
 //var location=ship2.locations[1]
 //console.log(ship2)
 var eightBall = { index: 0, 
    advice: ["yes", "no", "maybe", "not a chance"],
    shake: function() { 
    this.index = this.index + 1;
    if (this.index >= this.advice.length) {
    this.index = 0;
    }
    },
    look: function() {
    return this.advice[this.index];
    }
    
   }; 
   eightBall.shake();
   console.log(eightBall.look());