function myScript(){
var a=Math.round(Math.random()*8)
image = new Array();
image[0]="dog/1.jpg"
image[1]="dog/2.jpg"
image[2]="dog/3.jpg"
image[3]="dog/4.jpg"
image[4]="dog/5.jpg"
image[5]="dog/6.jpg"
image[6]="dog/7.jpg"
image[7]="dog/8.jpg"
image[8]="dog/9.jpg"
document.write ("<img src="+image[a]+">");
setTimeout('location="dogs.html"',3000)
}
