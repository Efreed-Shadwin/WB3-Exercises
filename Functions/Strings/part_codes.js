var code = "ACE:1-12"
function getSupplier(code) {
    return "is supplied by " +code.slice(0,code.indexOf(":")) ;
    
}
function getProductNumber(code) {
    return code.slice(code.indexOf(":")+1,code.indexOf("-")) ;
    
}
function getSize(code) {
    size=code.slice(code.indexOf("-"))
    if (size=="-L"){
        return ("The large (L) part")
    }else if(size=="-M"){
        return ("The medium (M) part")
    }else {
        return ("The size "+code.slice(code.indexOf("-")+1)+" part")
    }
    
}
console.log(code,getSize(code),getProductNumber(code),getSupplier(code)) ;