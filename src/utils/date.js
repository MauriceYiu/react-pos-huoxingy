export default function(date,fgStr){
    let year = date.getFullYear();
    let month = (date.getMonth()+1)<10?'0'+(date.getMonth()+1):date.getMonth();
    let day = date.getDate();
    return year+fgStr+month+fgStr+day;
}