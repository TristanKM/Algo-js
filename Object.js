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