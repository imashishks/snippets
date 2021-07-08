
const validSudoku = (arr)=>{
    const rows = {};
    const columns = {};
    const subbox = {};
    for(let i= 0; i < arr.length; i++){
        rows[i] = new Set();
        
        for(let j=0;j < arr.length; j++){
            if(arr[i][j] ==='.'){
                continue;
            }
            if(rows[i].has(arr[i][j])){
                return false;
            }
            rows[i].add(arr[i][j]);
         
            if(columns[j]){
                if(columns[j].has(arr[i][j])){
                    return false;
                }else{
                    columns[j].add(arr[i][j]);
                }
            }else{
                columns[j]= new Set(arr[i][j]);
               
            }
            // check for sub box

        }
        
    }
   
    return true;
}

const board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["4",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

console.log(validSudoku(board));