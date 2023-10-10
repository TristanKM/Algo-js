var a = 3
var b = 4
var c = 3
/*if (a == b)
{
    console.log ("c'est egal")
}

if (c < b && a +c != 3)
{
    console.log("ok")
}
else
{
    console.log("raté")
}

switch (a)
{
    case b:
        console.log ("egal a b")
        break
    case c:
        console.log ("egal a c")
        break
    default:
        console.log("egal a rien")
}

for (let i = 0; i < a; i++){
    console.log("oklm")
}*/

while(a < 9)
{
    a++
    if (a==8)
    {
        break
    }
    if (a == 7)
    {
        continue
    }
    console.log(a)
}
console.log('j ai casse la boucle au bout de ' + a + ' tours')