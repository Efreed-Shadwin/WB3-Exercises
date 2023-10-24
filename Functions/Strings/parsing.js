

function parseAndDisplayName(name){
    console.log("Name:" +name)
    console.log("First name:" +name.substring(0,name.indexOf(" ")) );
    console.log("Last name:" + name.substring(name.indexOf(" "),name.lastIndexOf(" "))) ;
}
parseAndDisplayName("Brenda Kaye ");
parseAndDisplayName("Ian Austin ");
parseAndDisplayName("Siddalee Grace ");