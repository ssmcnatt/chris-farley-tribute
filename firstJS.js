function hello(who) {
    document.write("Hello, " + who);
    document.write("<br>");
}

function mainFn() {

    var s = "ABCDEFGxxxxxxx";
    var length = s.length;
    document.write(length);
    document.write("<br>");

    var a = new Array(7);
    a[0] = "cat";
    a[1] = "dog";
    a[2] = "rat";
    document.write(a);
    document.write("<br>");

    var p = new Object();
    p.first = "Steve";
    p.last = "McNatt";
    document.write(p.first + " " + p.last);
    document.write("<br>");

    hello("Steve");
    hello("Emily");

    document.write("Hello");
    var city = new Array(“delhi”, “agra”, “akot”, “aligarh”);
city.push("palampur");
console.log(city);
var x = console.log(city);
document.write(x);
}