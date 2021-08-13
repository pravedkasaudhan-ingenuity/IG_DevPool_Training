

export class winning {
    symbols:any
    win:Array<number>[]=[];
    constructor(symbols: any) {
        this.symbols=symbols;
        
        for (let i = 1; i < 4; i++) {
            let row = "";
            for (let j = 0; j < 5; j++) {
                row += symbols[j][i].id + "    ";

            }
            console.log(row);
        }

    }
    decideWIN(){
        let symbols=this.symbols;
        const pass = "Wild.png";
        const lottery = "Scatter.png";
        for (let i = 1; i < 4; i++) {
            let row = "";
            for (let j = 0; j < 3; j++) {
                if(symbols[j][i].id==lottery){
                    continue;
                }
                if ( (symbols[j][i].id == symbols[j + 1][i].id) || symbols[j][i].id==pass || symbols[j+1][i].id==pass) {
                    if(symbols[j + 2][i].id ==symbols[j][i].id  || symbols[j + 2][i].id ==pass ||symbols[j + 2][i].id ==symbols[j+1][i].id  ){
                        console.log(`winning at ${i} ->${j}&${j+1}&${j+2}`);
                        this.win.push([i,j]);
                        j+=2;
                    }
                }

            }
        }
        return this.win;
    }
}