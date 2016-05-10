/**
 * Created by Administrator on 2016/5/10.
 */
function showPic(whichpic) {
    var source=whichpic.getAttribute("href");
    var placeholder=document.getElementById("placeholder")
    placeholder.setAttribute("src",source);
    var text=whichpic.getAttribute("title");//当图片库的链接被点击时，这个链接的title属性被提取并保存到text变量中
    var description=document.getElementById("description");//得到id是description的title元素
    description.firstChild.nodeValue=text;//把description的title属性设置为text的值

}
function countBodyChildren() {
    var body_element=document.getElementsByTagName("body")[0];
    alert(body_element.length);

}window.onload=countBodyChildren();


