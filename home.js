function setposition(val){
    if(val<=2){
        return 0;
    }
    if(val<=5){
        return 3;
    }
    return 6;
}
function posible(arr,x,y,val){
    for(let i=0;i<9;i++){
        if(arr[x][i]==val){
            return false;
        }
        else if(arr[i][y]==val){
            return false;
        }
    }
    let stX=setposition(x);
    let stY=setposition(y);
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(arr[stX+j][stY+i]==val){
                return false;
            }
        }
    }
    return true;
}
function sudoku(obj,x,y){
    if(x>8){
        return true;
    }
    if(y>8){
        return sudoku(obj,x+1,0);
    }
    if(obj.arr[x][y]!=0){
        return sudoku(obj,x,y+1);
    }
    for(let i=1;i<=9;i++){
        if(posible(obj.arr,x,y,i)){
            obj.arr[x][y]=i;
            if(sudoku(obj,x,y+1)){
                return true;
            }
            else{
                obj.arr[x][y]=0;
            }
        }
    }
    return false;
}
// var obj={arr:[[5,3,0,0,7,0,0,0,0],
// [6,0,0,1,9,5,0,0,0],
// [0,9,8,0,0,0,0,6,0],
// [8,0,0,0,6,0,0,0,3],
// [4,0,0,8,0,3,0,0,1],
// [7,0,0,0,2,0,0,0,6],
// [0,6,0,0,0,0,2,8,0],
// [0,0,0,4,1,9,0,0,5],
// [0,0,0,0,8,0,0,7,9]]};
// if(sudoku(obj,0,0)){
//     console.log(obj.arr);
// }
// else{
//     console.log("not posible");
// }

var obj={arr:[[0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]]};
// var obj={arr:[[],[],[],[],[],[],[],[],[]]}

var textBox=document.querySelectorAll(".cont input");
var solve=document.querySelector(".run");
solve.addEventListener("click",()=>{
    let count=0;
    textBox.forEach((ele)=>{
        let val=ele.value;
        // console.log(val);
        let i=Math.floor(count/9);
        console.log(Math.floor(i)+" "+count%9);
        if(val!=""){
            obj.arr[i][count%9]=parseInt(val);
        }
        else{
            obj.arr[i][count%9]=0;
        }
        // console.log(obj.arr);
        count++;   
    });
    if(sudoku(obj,0,0)){
        console.log(obj.arr);
        let count=0;
        textBox.forEach((ele)=>{
            ele.value=obj.arr[Math.floor(count/9)][count%9].toString();
            count++;
        })
    }
    else{
        console.log("not posible");
    }
    // console.log(obj.arr);
})
