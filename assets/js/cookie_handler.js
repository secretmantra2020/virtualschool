function _set_cookie(name, value) {
    document.cookie=`${name} = ${value}`;
}

function _get_cookie(name) {
    var allcookies = document.cookie;
    cookiearray = allcookies.split(';');

    for(i=0;i<cookiearray.length;i++) {
        if(!cookiearray[i].split('=')[0]) continue;
        t_name = cookiearray[i].split('=')[0].trim();
        t_value = cookiearray[i].split('=')[1].trim();
        if (t_name === name) {
            return t_value;
        }
    }
    return null;
}