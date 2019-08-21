
// colxrows ---> 12x12
//test
// {
//     c_start:7,     //0-11
//     c_n:1,        //1-12
//     c_skip:[],     //0-11
//     r_start:10,     //0-11
//     r_n:1,        //1-12
//     r_skip:[],    //0-11
//     extraStrong:[],
//     //array of [col,row] arrays
//     skip_individual:[],
// },
export const levels=[
    //LEVEL ONE
    [
        //test
        // {
        //     c_start:7,     //0-11
        //     c_n:1,        //1-12
        //     c_skip:[],     //0-11
        //     r_start:10,     //0-11
        //     r_n:1,        //1-12
        //     r_skip:[],    //0-11
        //     extraStrong:[],
        //     //array of [col,row] arrays
        //     skip_individual:[],
        // },

        {
            //l1
            //first column index (columns start here)
            c_start:3,     //0-11
            //number of columns
            c_n:6,        //1-12
            c_skip:[5],     //0-11
            r_start:2,     //0-11
            r_n:8,        //1-12
            r_skip:[],    //0-11
            extraStrong:[],
            //array of [col,row] arrays
            skip_individual:[
                [4,2],[4,3],[4,4],[4,5],[4,6],[4,7],
                [6,4],[6,5],[6,6],[6,7],
                [8,2],[8,3],[8,4],[8,5],[8,6],[8,7],
            ],
        },

        {
            c_start:0,     //0-11
            c_n:12,        //1-12
            c_skip:[0,2,5,6,9,11],     //0-11
            r_start:5,     //0-11
            r_n:5,        //1-12
            r_skip:[],    //0-11
            extraStrong:[],
            //array of [col,row] arrays
            skip_individual:[],
        },
        {
            c_start:4,     //0-11
            c_n:4,        //1-12
            c_skip:[],     //0-11
            r_start:5,     //0-11
            r_n:5,        //1-12
            r_skip:[],    //0-11
            extraStrong:[],
            //array of [col,row] arrays
            skip_individual:[],
        },



    ],
    //LEVEL TWO
    [
        //test
        // {
        //     c_start:7,     //0-11
        //     c_n:1,        //1-12
        //     c_skip:[],     //0-11
        //     r_start:10,     //0-11
        //     r_n:1,        //1-12
        //     r_skip:[],    //0-11
        //     extraStrong:[],
        //     //array of [col,row] arrays
        //     skip_individual:[],
        // },

        {
            //l2
            //first column index (columns start here)
            c_start:2,     //0-11
            //number of columns
            c_n:8,        //1-12
            c_skip:[],     //0-11
            r_start:0,     //0-11
            r_n:12,        //1-12
            r_skip:[],    //0-11
            extraStrong:[],
            //array of [col,row] arrays
            skip_individual:[

                //2
                [6,1],[6,2],[6,5],[6,6],[6,7],[6,8],[6,9],[6,10],
                [7,1],[7,2],[7,5],[7,6],[7,9],[7,10],
                [8,1],[8,2],[8,3],[8,4],[8,5],[8,6],[8,9],[8,10],


                [3,1],
                [3,2],
                [3,3],
                [3,4],
                [3,5],
                [3,6],
                [3,7],
                [3,8],
                [3,8],
                [3,9],[4,9],
                [3,10],[4,10],
            ],
        },
        {
            c_start:0,     //0-11
            c_n:12,        //1-12
            c_skip:[],     //0-11
            r_start:0,     //0-11
            r_n:12,        //1-12
            r_skip:[0,1,3,4,6,7,9,10],    //0-11
            extraStrong:[],
            //array of [col,row] arrays
            skip_individual:[
                [10,5],[11,5],
                [0,2],[1,2],
                [10,11],[11,11],
                [0,8],[1,8],
            ],
        },
        {
            c_start:2,     //0-11
            c_n:8,        //1-12
            c_skip:[],     //0-11
            r_start:2,     //0-11
            r_n:8,        //1-12
            r_skip:[5,6],    //0-11
            extraStrong:[],
            //array of [col,row] arrays
            skip_individual:[],
        },
    ],
    //LEVEL THREE
    [
        //test
        // {
        //     c_start:7,     //0-11
        //     c_n:1,        //1-12
        //     c_skip:[],     //0-11
        //     r_start:10,     //0-11
        //     r_n:1,        //1-12
        //     r_skip:[],    //0-11
        //     extraStrong:[],
        //     //array of [col,row] arrays
        //     skip_individual:[],
        // },

        {
            //l3
            //first column index (columns start here)
            c_start:2,     //0-11
            //number of columns
            c_n:8,        //1-12
            c_skip:[],     //0-11
            r_start:0,     //0-11
            r_n:12,        //1-12
            r_skip:[],    //0-11
            extraStrong:[
                [6,2],[7,2],[8,2],
                [6,3],[7,3],[8,3],
                            [8,4],
                [6,5],[7,5],[8,5],
                [6,6],[7,6],[8,6],
                            [8,7],
                [6,8],[7,8],[8,8],
                [6,9],[7,9],[8,9],

                [3,2],
                [3,3],
                [3,4],
                [3,5],
                [3,6],
                [3,7],
                [3,8],[4,8],
                [3,9],[4,9],
            ],
            //array of [col,row] arrays
            skip_individual:[],
        },
        {
            c_start:0,     //0-11
            c_n:12,        //1-12
            c_skip:[],     //0-11
            r_start:0,     //0-11
            r_n:12,        //1-12
            r_skip:[],    //0-11
            extraStrong:[
                [5,6],[5,7],[5,8],[5,9],[5,10],[5,11],
                [6,6],[6,7],[6,8],[6,9],[6,10],[6,11],
            ],
            //array of [col,row] arrays
            skip_individual:[
                [0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],
                [11,3],[11,4],[11,5],[11,6],[11,7],[11,8],[11,9],[11,10],[11,11],
                [1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],
                [10,5],[10,6],[10,7],[10,8],[10,9],[10,10],[10,11],
                [2,7],[2,8],[2,9],[2,10],[2,11],
                [9,7],[9,8],[9,9],[9,10],[9,11],
                [3,9],[3,10],[3,11],
                [8,9],[8,10],[8,11],
                [3,0],[3,1],[8,0],[8,1],
                [4,0],[4,1],[4,2],[4,3],[7,0],[7,1],[7,2],[7,3],
                [0,0],[11,0],
                [5,0],[5,1],[5,2],[5,3],[5,4],[5,5],
                [6,0],[6,1],[6,2],[6,3],[6,4],[6,5],
            ],
        },
        {
            c_start:0,     //0-11
            c_n:12,        //1-12
            c_skip:[0,11],     //0-11
            r_start:0,     //0-11
            r_n:12,        //1-12
            r_skip:[0,1,10,11],    //0-11
            extraStrong:[
                [1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],
                [2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],
                [5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],
                [6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],
                [9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[9,9],
                [10,2],[10,3],[10,4],[10,5],[10,6],[10,7],[10,8],[10,9],
            ],
            //array of [col,row] arrays
            skip_individual:[

            ],
        },



    ],
    //LEVEL FOUR
    [
        //test
        // {
        //     c_start:7,     //0-11
        //     c_n:1,        //1-12
        //     c_skip:[],     //0-11
        //     r_start:10,     //0-11
        //     r_n:1,        //1-12
        //     r_skip:[],    //0-11
        //     extraStrong:[],
        //     //array of [col,row] arrays
        //     skip_individual:[],
        // },
        {
            //l4
            //first column index (columns start here)
            c_start:1,     //0-11
            //number of columns
            c_n:10,        //1-12
            c_skip:[],     //0-11
            r_start:0,     //0-11
            r_n:12,        //1-12
            r_skip:[],    //0-11
            extraStrong:[
                [0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],
                [0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],
                [0,2],[1,2],[2,2],      [4,2],[5,2],      [7,2],      [9,2],[10,2],[11,2],
                [0,3],[1,3],[2,3],      [4,3],[5,3],      [7,3],      [9,3],[10,3],[11,3],
                [0,4],[1,4],[2,4],      [4,4],[5,4],      [7,4],      [9,4],[10,4],[11,4],
                [0,5],[1,5],[2,5],      [4,5],[5,5],                  [9,5],[10,5],[11,5],
                [0,6],[1,6],[2,6],      [4,6],[5,6],                  [9,6],[10,6],[11,6],
                [0,8],[1,7],[2,7],      [4,7],[5,7],[6,7],[7,7],      [9,7],[10,7],[11,7],
                [0,8],[1,8],[2,8],            [5,8],[6,8],[7,8],      [9,8],[10,8],[11,8],
                [0,9],[1,9],[2,9],            [5,9],[6,9],[7,9],      [9,9],[10,9],[11,9],
                [0,10],[1,10],[2,10],[3,10],[4,10],[5,10],[6,10],[7,10],[8,10],[9,10],[10,10],[11,10],
                [0,11],[1,11],[2,11],[3,11],[4,11],[5,11],[6,11],[7,11],[8,11],[9,11],[10,11],[11,11],
            ],
            //array of [col,row] arrays
            skip_individual:[
                [3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],
                [4,8],[4,9],
                [6,2],[6,3],[6,4],[6,5],[6,6],
                [7,5],[7,6],
                [8,2],[8,3],[8,4],[8,5],[8,6],[8,7],[8,8],[8,9],
            ],
        },
        {

            //first column index (columns start here)
            c_start:0,     //0-11
            //number of columns
            c_n:12,        //1-12
            c_skip:[3,7],     //0-11
            r_start:0,     //0-11
            r_n:12,        //1-12
            r_skip:[],    //0-11
            extraStrong:[
                //F
                [0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],
                [1,0],[1,1],[1,4],[1,5],
                [2,0],[2,1],[2,4],[2,5],
                //U
                [4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],
                [5,10],[5,11],
                [6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,10],[6,11],
                //N
                [8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,6],[8,7],[8,8],[8,9],[8,10],[8,11],
                [9,3],[9,4],[9,5],[9,6],
                [10,5],[10,6],[10,7],[10,8],
                [11,0],[11,1],[11,2],[11,3],[11,4],[11,5],[11,6],[11,7],[11,8],[11,9],[11,10],[11,11],

            ],
            //array of [col,row] arrays
            skip_individual:[
                [1,2],[2,2],[1,3],[2,3],[1,6],[2,6],[1,7],[2,7],[1,8],[2,8],[1,9],[2,9],[1,10],[2,10],[1,11],[2,11],
                [5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],
                [9,0],[9,1],[9,2],[10,0],[10,1],[10,2],
                [9,10],[9,11],[9,9],[10,10],[10,11],[10,9],
                [9,8],[9,7],
                [10,3],[10,4],
            ],
        },
        {
            //first column index (columns start here)
            c_start:2,     //0-11
            //number of columns
            c_n:8,        //1-12
            c_skip:[],     //0-11
            r_start:0,     //0-11
            r_n:12,        //1-12
            r_skip:[],    //0-11
            extraStrong:[
                [5,0],[6,0],
                [4,1],[5,1],[6,1],[7,1],
                [3,2],[4,2],[5,2],[6,2],[7,2],[8,2],
                [2,3],[3,3],[4,3],[5,3],[6,3],[7,3],[8,3],[9,3],
                [2,4],[3,4],[4,4],[5,4],[6,4],[7,4],[8,4],[9,4],
                [2,5],[5,5],[6,5],[9,5],
                [2,6],[5,6],[6,6],[9,6],
                [2,7],[3,7],[4,7],[5,7],[6,7],[7,7],[8,7],[9,7],
                [2,8],[3,8],[4,8],[5,8],[6,8],[7,8],[8,8],[9,8],
                [2,9],[3,9],[5,9],[6,9],[8,9],[9,9],
                [2,10],[3,10],[5,10],[6,10],[8,10],[9,10],
                [2,11],[3,11],[5,11],[6,11],[8,11],[9,11],
            ],
            //array of [col,row] arrays
            skip_individual:[
                [2,0],[3,0],[4,0],[7,0],[8,0],[9,0],
                [2,1],[3,1],[8,1],[9,1],
                [2,2],[9,2],
                [3,5],[3,6],[4,5],[4,6],[7,5],[7,6],[8,5],[8,6],
                [4,9],[4,10],[4,11],
                [7,9],[7,10],[7,11],
            ],
        },
    ],


];

// export const colors=[
//     //blue
//     ['#00a3cc','#48C2D4','#60CFDE',' #B3EEF8','#93E8F3',],
//     // ['#00a3cc','#32b5d6','#93E8F3',' #22B8CF','#99daea',],
//     //pink
//     ['#D6336C','#EE6D9A','#F488AD','#F488AD','#FBBED3',],
//     //yellow
//     ['#E5C800','#F2D50D','#E5CC1A',],
//     //green
//     ['#84B816','#A9E34B','#C0EB85','#C0E48E','#D8F5A2',],
// ];
export const colors=[
    //blue
    ['#15AABF','#93E8F3','#22B8CF',' #1F8FC',],
    //pink
    ['#EA1D60','#FBBED3', '#F3819C','#FEF0F5',],
    //yellow
    ['#FFC108','#FFE188', '#FFD454', '#FFF9E8',],
    //green
    ['#82c91e','#c0e48e','#94D82D', '#F4FCE8',],
];

export const alerts=[
    // 0-start
    '<div><div class="game__message__title">L<span class="e">e</span>T\'s PLAY!</div><p>Destroy all the bricks to get to another level <br/> and to reveal my skills.</p></div>',

    // 1-paused
    '<div><div class="game__message__title">GAM<span class="e">e</span> PAUS<span class="e">e</span>D</div><p>Destroy all the bricks to get to another level <br/> and to reveal my skills.</p></div>',

    // 2-levelCompleted
    '<div><div class="theme-color_transitioned game__message__title">L<span class="e">e</span>V<span class="e">e</span>L COMPL<span class="e">e</span>T<span class="e">e</span>D</div><p>To continue the game at another level<br/>HIT SPACE or TAP THE SCREEN</p></div>',

    // 3-gameCompleted
    '<div><div class="theme-color_transitioned game__message__title">CONGRATULATION!</div><p>You have successfully completed the entire game.</p> <div class="btn__brick btn_restart">Start Again</div></div>',

    // 4-lostLife
    '<div><div class="theme-color_transitioned game__message__title">You\'v<span class="e">e</span> dropp<span class="e">e</span>d th<span class="e">e</span> ball!</div><p>HIT SPACE or TAP THE SCREEN to continue the game.</p></div>',

    // 5-gameOver
    '<div><div class="theme-color_transitioned game__message__title">GAM<span class="e">e</span> OV<span class="e">e</span>R</div><p>Better luck next time...</p><div class="btn__brick btn_restart">Play Again</div></div>',
];
