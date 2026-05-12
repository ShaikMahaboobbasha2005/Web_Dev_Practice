//accepting a string as an parameter and capitalizing only the first letter of it

function capitalize(str)
{
    return str[0].toUpperCase()+str.slice(1)
     
}
capitalize('tabrez') // "Eggplant"
capitalize('basha') // "Pamplemousse"
capitalize('basheer') //"Squid"
