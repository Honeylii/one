function makeUp(){
    const bid = 22;
    let counter = 0;
    if(bid){
        counter ++;
        console.log("The counnter is updating....")
        setInterval(e =>{
            counter ++;
        },200)
    }
}