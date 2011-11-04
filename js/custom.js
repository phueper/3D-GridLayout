function getParameter(paramNumber) {
        var searchString = window.location.search.substring(1); // substring to get rid of starting "?"
        var params = searchString.split("&");

        return params[paramNumber].split("=");
}

function getParameterByName(paramName, defVal) {

        var searchString = window.location.search.substring(1); // substring to get rid of starting "?"
        var params = searchString.split("&");
        var paramNames = new Array();
        for (var i in params) {
                var param = params[i].split("=");
                paramNames[param[0]] = (param[1] || true); // if the name exists, we still want to return true, i.e. empty params result in true
        }

        return paramNames[paramName] || defVal;

}
