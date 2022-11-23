console.log(this)
var x=function test()
{
    return "hello"
}
var a=10;
console.log(x())
var movie={
    name:'rrr',
    getName:function()
    {
        console.log(this)
    }
}
movie.getName()
