
/* 注册点击事件 */
$('#submit').click(function(){
    let o_name=$('#username').val();
    let o_password=$('#userpassword').val();
    
    //用户名不能为空
  if( !o_name){
      alert('用户名不能为空');
      return
  }
  //密码不能位空
  if( !o_password){
    alert('密码不能为空');
    return
}



//如果全部都已经弄好，把注册的用户名传去cookie里面
//获取cooike

//获取cookie
let cookieStr=$.cookie('registor')?$.cookie('registor'):'';
//把cookstr转为json对象
let cookieObj=convertStrToObj(cookieStr);
//判断用户名是否存在
if(o_name in cookieObj){
    //判断密码是否一样
    if(o_password===cookieObj[o_name]){
        alert('登陆成功');
        location.href='list.min.html';
        return;
    }else{
        alert('密码错误！')
    }
}else{
    alert('用户名不存在')
}







})

//判断用户名是否合法
$('#username').blur(function(){
    //正则2-10位中文
    let re=/^[\u4e00-\u9fa5]{2,10}$/;
    //获取用户名
    let o_name=$('#username').val();
    if(!re.test(o_name)){
        alert('请输入2-10位的中文')
        return;
    }
    /* 
    key:registor
    value{
        key:zhangsan,value:123
    }

    */
 
   


})

//判断密码是否合法
$('#userpassword').blur(function(){
    //正则3-16数字
    let re=/^\d{3,16}$/
    //获取密码
    let o_password=$('#userpassword').val();
    //判断
    if(! re.test(o_password)){
        alert('密码是3-16位的数字')
        return;
    }

})



$('#rgs').click(function(){
    location.href='regist.min.html'
  
})
