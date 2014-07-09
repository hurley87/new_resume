    var totalSeconds = 0;
    function setTime()
    {
        ++totalSeconds;
        $("#minutes").text(pad(totalSeconds%60));
        $("#seconds").text(pad(parseInt(totalSeconds/60)));
    }

    function returnTime() 
    {
        return totalSeconds;
    }

    function pad(val)
    {
        var valString = val + "";
        if(valString.length < 2)
        {
            return "0" + valString;
        }
        else
        {
            return valString;
        }
    }
