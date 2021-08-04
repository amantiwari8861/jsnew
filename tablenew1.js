function fun2() {
    //var y = prompt("Enter the column you want to print");
    var x;
    x=document.getElementById("table2").value;

    //var x = parseInt(prompt("Enter the number :"));
    document.write("<table>");
    console.log(x);
    // var x = parseInt(prompt("please enter the value", x));
    //var y = parseInt(prompt("Enter the value of y is", y));

    for (var i = 1; i <= 10; i++) {
        document.write("<tr>");
        document.write("<td>" + x + "</td>");
        document.write("<td> * </td>");
        document.write("<td>" + i + "</td>");
        document.write("<td> = </td>");
        document.write("<td>" + x * i + "</td>");
        document.write("</tr>");

        //  z = x * i;
        // document.getElementById("d1").innerHTML += (x) + " X " + (i) + "=" + (z) + "<br>";
    }
    document.write("</table>");
}