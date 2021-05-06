function getDateTime()
{
    var date=new Date();
    var obj={
        d:date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear(),
        t:date.getHours()+":"+date.getSeconds()
    }
    return obj;
}
module.exports=getDateTime();
