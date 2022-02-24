var ac = document.querySelector('.input');
var password = document.querySelector('.password_input');
var dengLu = document.getElementById('a');
var bottom_tiShiError = document.querySelector('.bottom_tiShiError');
var bottom_tiShiTip = document.querySelector('.bottom_tiShiTip');
   dengLu.onclick = function(){
  if(ac.value == '1' && password.value == "1"){
      alert('登陆成功！');
  }
   else if (ac.value == '' && password.value == ""){
    bottom_tiShiTip.style.display = 'block';
    ac.onclick = function(){
        bottom_tiShiTip.style.display = 'none';
    };
    password.onclick = function(){
        bottom_tiShiTip.style.display = 'none';
    };
   }
   else {
    bottom_tiShiError.style.display = 'block';
    ac.onclick = function(){
        bottom_tiShiError.style.display = 'none';
    };
    password.onclick = function(){
        bottom_tiShiError.style.display = 'none';
    };
   }
};

//点击右上角关闭登录页面
var dengLu_yeMian = document.getElementById('id_dengLu_yeMian');
var delect = document.getElementById('delect');
delect.onclick = function(){
    dengLu_yeMian.style.display ='none';
};