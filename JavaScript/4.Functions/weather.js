//using conditionals inside a function


function isShortsWeather(temperature){
    if(temperature>=36){
        return true;
    }
    else{
        return false;
    }
}
isShortsWeather(37) //true
isShortsWeather(29) //false
isShortsWeather(39) //true