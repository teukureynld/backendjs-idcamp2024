// //
// "use strict";
// class PlayStation {
//     static all = [];
//     constructor(PORT1, PORT2, PORT3){
//         // Misal dalam ps itu ada 3 port untuk 3 console.

//         this.PORT1 = PORT1
//         this.PORT2 = PORT2
//         this.PORT3 = PORT3;
//         this.all = all;
//     }
// }

// class Players extends PlayStation{
//     constructor(Player1 = "Player 1", Player2 = "Player 2", Player3 = "Player 3"){
        
//         super(Player1, Player2, Player3, all);
//         this.PORT1 = Player1;
//         this.PORT2 = Player2;
//         this.PORT3 = Player3;
//         this.all = all;

//     }
//     connection(){
//         // collecting all objects
//         Players.all.forEach(players=>{
//             if(players){
//                 console.log(
//                     `Players has been connected : ${players.PORT1}, ${players.PORT2}, ${players.PORT3}}`
//                 )
//                 }
//         })
//         return this.Players;
//     }
// }
// const statusPlayers = new Players();
// statusPlayers.connection();
"use strict";

class PlayStation {
    static all = []; 

    constructor(PORT1, PORT2, PORT3) {
        // Inisialisasi port di dalam constructor
        this.PORT1 = PORT1;
        this.PORT2 = PORT2;
        this.PORT3 = PORT3;

        PlayStation.all.push(this);
    }
}

class Players extends PlayStation {
    constructor(Player1 = "Player 1", Player2 = "Player 2", Player3 = "Player 3") {
        // Meneruskan argumen ke constructor induk
        super(Player1, Player2, Player3);
    }

    connection() {
        PlayStation.all.forEach(players => {
            console.log(`Players has been connected: ${players.PORT1}, ${players.PORT2}, ${players.PORT3}`);
        });
    }
}

const statusPlayers = new Players();
statusPlayers.connection(); 

class Warrior extends 