var photo = document.getElementById("img-container");
var img_inf = document.getElementById("img-inf");

if(typeof FileReader==='undefined'){
    photo.innerHTML = "抱歉，你的浏览器不支持 FileReader";
    img_inf.setAttribute('disabled','disabled');
}else{
    img_inf.addEventListener('change',readFile,false);
}

function readFile(){
    var file = this.files[0];
    if(!/image\/\w+/.test(file.type)){
        alert("文件必须为图片！");
        return false;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e){
        photo.style.background = "url("+this.result+")"+"no-repeat";
        photo.style.backgroundSize = "100% 200px";
    };
}