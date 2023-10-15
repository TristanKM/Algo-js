var a = 4
for (let i = 0; i < a; i++){
    console.log("oklm")
}

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