function convertStrToObj(str){
if(!str){
    return{}
}
return JSON.parse(str)
}