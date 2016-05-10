/**
 * Created by Administrator on 2016/5/10.
 */
function showPic(whichpic) {
    var source=whichpic.getAttribute("href");
    var placeholder=document.getElementById("placeholder")
    placeholder.setAttribute("src",source)

}
