//write a function that generate and print multipication of tables of given range

function printMutipicationTable(tableOf,tableTill){
    if(tableOf < 1 || tableTill < 1){
        throw new Error('Number should be positive')
    }
    for(let i = 1; i <= tableTill; i++ ){
        console.log(`${tableOf} * ${i} = ${tableOf * i}`);
    }
        
}
// printMutipicationTable(2,10)

// 2nd way to do this

function printMutipicationTable1(tableOf,tableTill){
        for (let i = tableOf; i<= tableOf * tableTill; i = i + tableOf) {
            console.log(i);
        }
}
printMutipicationTable1(5,10)