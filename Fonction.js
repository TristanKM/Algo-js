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
