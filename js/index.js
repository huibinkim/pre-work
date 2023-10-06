

const _userId = document.getElementById('userId');
const _userPassword = document.getElementById('userPassword');
const loginBtn = document.getElementById('loginBtn');

//button 클릭하면 id password 콘솔에 가져오는 함수
const clickBtn = function(e){
    e.preventDefault();
    console.log(_userId.value, _userPassword.value)
}

loginBtn.addEventListener('click' , clickBtn);