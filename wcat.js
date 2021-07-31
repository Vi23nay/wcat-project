let fs = require("fs");


let inputArr = process.argv.slice(2);
let optionArr = [];
let filesArr = [];
for(let i = 0 ; i < inputArr.length ; i++){
    let firstchar = inputArr[i].charAt(0);
    if(firstchar == '-'){
        optionArr.push(inputArr[i]);
    }else{
        filesArr.push(inputArr[i]);
    }
}



let singlefileobj = require("./command/singlefile");



for(let i = 0 ; i < filesArr.length ; i++){
    if(fs.existsSync(filesArr[i]) == false){
        console.log("path doesn't exists!!!");
        return;
    }
    }
 if(inputArr[0].charAt(0) != '-'){
    for(let i = 0 ; i < filesArr.length ; i++){
        singlefileobj.command1fxn(filesArr[i]);
}
 }



//handling 3rd command -s
let isSpresent = optionArr.includes("-s");
if(isSpresent){
    
    let content = "";
    for(let i = 0 ; i < filesArr.length ; i++){
    // console.log();
    content = content+fs.readFileSync(filesArr[i])+"\n\r";
    }
    let contentArr = content.split("\n\r");
    let ans = "";
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i] == ''){

        }else{
            ans = ans + "\n" + contentArr[i];
        }
    }
    
    
    // let ans = contentArr.join('');
    console.log(ans);
    
} 

///////////handling edge case of b and n command/////////////////////////
let isBpresent = optionArr.includes("-b");
let isNpresent = optionArr.includes("-n");

if(isBpresent){
    if(isNpresent){
        let Bidx = optionArr.indexOf("-b");
        let Nidx = optionArr.indexOf("-n");
        if(Nidx < Bidx){
            ncommand();
        }else{
            bcommand();
        }
    }else{
        bcommand();
    }
    
    
}else if(isNpresent){
    ncommand();
}



//handling -b command

function bcommand(){

    let content = "";
    for(let file = 0 ; file < filesArr.length ; file++){
        content = content + fs.readFileSync(filesArr[file]) + "\n";
    }
    let contentArr = content.split("\n");
    // console.log(contentArr);

    let num = 1;
    for(let i = 0 ; i < contentArr.length;i++){
        if(contentArr[i] != '\r'){
            contentArr[i] = num + " "+ contentArr[i];
            num++;
        }
        
    }
    ans = "";
    for(let i=0 ; i < contentArr.length;i++){
        ans = ans + contentArr[i] + "\n";

    }
    console.log(ans);
}



//handling -n command

function ncommand(){
    let content = "";
    for(let file = 0 ; file < filesArr.length; file++){
        
        content = content + fs.readFileSync(filesArr[file]) + "\n";
    }

    let contentArr = content.split("\n");
    // console.log(contentArr);
    let num = 1;
    let ans ="";
    for(let i=0 ; i < contentArr.length ; i++){
       
        ans = ans + num + " " +contentArr[i]+ "\n";
        num++;
    }
    console.log(ans);

    
}




    






