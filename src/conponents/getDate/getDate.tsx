export const parseCurrentDate = (tdate: any) => {
    var system_date: any = new Date(Date.parse(tdate));
    var user_date: any = new Date();
    // if (K.ie) {
    //     system_date = Date.parse(tdate.replace(/( \+)/, ' UTC$1'))
    // }
    var diff = Math.floor((user_date - system_date) / 1000);
    if (diff <= 1) {return "just now";}
    // if (diff <= 60) {return diff + "seconds";}
    if (diff < 40) {return "half a minute ago";}
    if (diff < 60) {return "less than a minute ago";}
    if (diff <= 90) {return "1 minute ago";}

    // if (diff <= 3540) {return Math.round(diff / 60) + " minutes ago";}
    if (diff <= 3540) {return Math.round(diff / 60) + "minutes ago";}

    if (diff <= 5400) {return "1 hour ago";}
    // if (diff <= 5400) {return "1h";}

    if (diff <= 86400) {return Math.round(diff / 3600) + " hours ago";}
    // if (diff <= 86400) {return Math.round(diff / 3600) + "h";}

    if (diff <= 129600) {return "1 day ago";}
    // if (diff <= 129600) {return "1d";}

    if (diff < 604800) {return Math.round(diff / 86400) + " days ago";}
    // if (diff < 604800) {return Math.round(diff / 86400) + "d";}

    if (diff <= 777600) {return "1 week ago";}
    // if (diff <= 777600) {return "1w";}

    const formDate = system_date.getDate() < 10 ? '0'+ system_date.getDate() : system_date.getDate();

    function formMonth(month: number){
        if (month === 1) return 'Jan'
        else if (month === 2) return 'Feb'
        else if (month === 3) return 'Mar'
        else if (month === 4) return 'Apr'
        else if (month === 5) return 'May'
        else if (month === 6) return 'Jun'
        else if (month === 7) return 'Jul'
        else if (month === 8) return 'Aug'
        else if (month === 9) return 'Sep'
        else if (month === 10) return 'Oct'
        else if (month === 11) return 'Nov'
        else if (month === 12) return 'Dec'
    }
    return (
        formDate + ' ' + formMonth((system_date.getMonth()+1)) + ' ' + system_date.getFullYear().toString().substr(2, 2)
    )
}

export const UUID = () => {
    return (new Date().getTime() * Math.random() * 1000000)
}