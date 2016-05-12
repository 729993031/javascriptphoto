/**
 * Created by Administrator on 2016/5/10.
 */
function  addLoadEvent(func) {
    var oldonload=window.onload;//把现有的window.onland函数存入变量
    if (typeof  window.onload!='function')//如果还没绑定过函数
    {
        window.onload=func;//把新函数添加给他
    }else//如果绑定了就把新函数添加到现有指令的末尾
    {
        window.onload=function () {
            oldonload();
            func();
        }
    }
}
addLoadEvent(prepareGallery);
function prepareGallery() {
    if (!document.getElementsByTagName)return false;
    if (!document.getElementById)return false;//如果不支持getElementById就退出
    if (!document.getElementById("imagegallery"))return false;//
    var gallery=document.getElementById("imagegallery");
    var links=gallery.getElementsByTagName("a");
    for (var i=0;i<links.length;i++){
        links[i].onclick=function () {
            return showPic(this)? false:true;//如果图片切换成功返回false，浏览器不会打开链接。
        }
    }
}
function showPic(whichpic) {
    if (!document.getElementById("placeholder"))return false;//如果没有找到placeholder图片就退出
    var source = whichpic.getAttribute("href");//获取href的属性值把他存入source变量中
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName!="IMG")return false;//如果nodename属性的返回值不是图片标签
    placeholder.setAttribute("src", source);
    if (!document.getElementById("description")) {
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
        var description = document.getElementById("description");// /得到id是description的title元素
        if (description.firstChild.nodeType == 3)  //如果nodetype属性值是3则是文本节点
        {
            description.firstChild.nodeValue = text;//把description的title属性设置为text的值
        }
    }
    return true;
}






