function myScript(){
var a=Math.round(Math.random()*7)
image = new Array();
image[0]="rabbit/1.jpg"
image[1]="rabbit/2.jpg"
image[2]="rabbit/3.jpg"
image[3]="rabbit/4.jpg"
image[4]="rabbit/5.jpg"
image[5]="rabbit/6.jpg"
image[6]="rabbit/7.jpg"
image[7]="rabbit/8.jpg"
document.write ("<img src="+image[a]+">");
setTimeout('location="rabbits.html"',3000)
}
