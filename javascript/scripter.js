// function makeUp(){
//     const bid = prompt("Enter a true or false");
//     let counter = 0;
//     if(bid){
//         counter ++;
//         setInterval(e =>{
//             console.log("The counnter is updating.... " + counter )
//             alert(" Counter Loading " + counter ++);
//         },200)
//     }
// }

// makeUp();

function isName(){
    var isCounter = prompt("Enter your name");
    while(isCounter == ""){
        var counter = 0;
        alert("counter loading... " + counter++)
        console.log("counter laoding.... " +counter++)

        isCounter = prompt("Enter your name")
    }
}

isName();