function myScript(){
var a=Math.round(Math.random()*7)
image = new Array();
image[0]="cat/1.jpg"
image[1]="cat/2.jpg"
image[2]="cat/3.jpg"
image[3]="cat/4.jpg"
image[4]="cat/5.jpg"
image[5]="cat/6.jpg"
image[6]="cat/7.jpg"
image[7]="cat/8.jpg"
document.write ("<img src="+image[a]+">");
setTimeout('location="cats.html"',3000)
}
