function click_display(val){
    document.getElementById('screen').value+=val;
}
function clear_display(){
    document.getElementById('screen').value=""
}
 function equal_click(){
    let text=document.getElementById('screen').value  
    let result=eval(text)
    document.getElementById('screen').value=result
 }