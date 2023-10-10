let a1 = "jean"
let b1 = "paul"
let result = checkName(a1, b1)

function checkName(name1, name2)
{
    if (name1 === name2)
    {
        return " Les prenoms sont identiques"
    }
    else
    {
        return " Les prenoms ne sont pas identiques"
    }
}
console.log(result)

let names=[]
names.push("Vincent", "Paul", "Arthur")

names.forEach(function(names)
{
    console.log(names+ " va a la peche")
})

let student = 
{
    Firstname: 'Nicolas',
    favoriteFood: 'Salad',
    city:'Paris',
}

let nbr = 0
let values = Object.values(student)
values.forEach(function (value)
{
    nbr += value.lenght
})

if (nbr%2 == 0)
    {
        console.log ("pair")
    }
    else
    {
        console.log ("impair")
    }