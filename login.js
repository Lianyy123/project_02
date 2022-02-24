var ac = document.querySelector('.input');
var password = document.querySelector('.password_input');
var dengLu = document.getElementById('a');
var bottom_tiShi = document.querySelector('.bottom_tiShi');
   dengLu.onclick = function(){
  if(ac.value == '1' && password.value == "1"){
      alert('登陆成功！');
  }
   else if (ac.value == '' && password.value == ""){
       alert('请输入账号和密码后点击登录');
   }
   else {
    bottom_tiShi.style.display = 'block';
    ac.onclick = function(){
        bottom_tiShi.style.display = 'none';
    };
    password.onclick = function(){
        bottom_tiShi.style.display = 'none';
    };
   }
};
