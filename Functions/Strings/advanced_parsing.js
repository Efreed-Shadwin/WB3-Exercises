function parseAndDisplayName(name){
    console.log("Name:" +name)
    
    if (name.lastIndexOf(" ")== -1){
        console.log("Only name:" + name.substring(0,name.indexOf("."))) ;
    }else if(name.indexOf(" ")!=name.lastIndexOf(" ") ){
        console.log("First name:" +name.substring(0,name.indexOf(" ")) );
        console.log("Middle name:" +name.substring(name.indexOf(" "),name.lastIndexOf(" ")) );
        console.log("Last name:" + name.slice(-0,name.indexOf(" "))) ;
    }else{
        console.log("First name:" +name.substring(0,name.indexOf(" ")) );
        console.log("Last name:" + name.slice(-0,name.indexOf(" "))) ;
    }    
}
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian");
parseAndDisplayName("Siddalee Grace");
parseAndDisplayName("Siddalee Lynne Grace");