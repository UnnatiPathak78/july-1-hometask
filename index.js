
//checking for palindrome string or not....

function palindrome_string(){
    let word = prompt();
    let len = word.length;
    for(let i = 0; i < len/2;  i = i + 1){
        if(word[i] !== word[len -1 -i]){
            alert("it is not palindrome");
            break;
        }
        alert(word);
    }
    
}

//checking for most occurence character in a string.... 
//not statisfied with this code.....

function inputtext(){
    let character = prompt();
    let letter_leng= character[0];
    for(let i = 0; i <= letter_leng; i ++){
        let single_char = letter_leng[i];     
        if(single_char == character[i]){
            alert(single_char);
        }
    }
    
}


//program for factorial.....

function factorial(){
    let num = prompt();
    num = parseInt(num);
    let factor = 1;
    for( let i = 1; i <= num; i++){    
        factor = factor * i;
    }
    alert(factor);
    
}


//program for counting consonent in a string......
function count_consonent(){
    let str = prompt();
    let count = 0;
    count= parseInt(count);
    for(let i= 0; i < str.length; i++){
            if(str[i] !== "a" && str[i] !== "e" && str[i] !== "i" && str[i] !== "o" && str[i] !== "u"){
                count += 1;

            }
        }
        alert(count);
    }
  


