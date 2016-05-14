/**
 * Created by lizekang on 16-5-11.
 */
function checkIsEmpty(field,warnText){
    if(field.value==''||field.value.replace('/\s*/','')==''){
        console.log(1);
        warn(warnText);
        field.focus();
        return true;
    }
    else{
        console.log(2);
        return false;
    }
}
function warn(warnText){
    var warn_wrap = document.createElement('div');
    warn_wrap.classList.add('warn-wrap');
    warn_wrap.innerHTML = "<div class='warn'><p>"+warnText+"</p>"+"<a onclick='closeWarn(this.parentNode.parentNode)'>好</a></div>";
    document.body.appendChild(warn_wrap);
    var all_dom = document.body.children;
    for(var i=0;i<all_dom.length;i++){
        all_dom[i].classList.add('blur');
    }
    warn_wrap.classList.remove('blur');
}
function closeWarn(warn){
    document.body.removeChild(warn);
    var all_dom = document.body.children;
    for(var i = 0;i<all_dom.length;i++){
        all_dom[i].classList.remove('blur');
    }
}
function getXmlHttp() {
    var xmlHttp = null;
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else {
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    return xmlHttp;
}