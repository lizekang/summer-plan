/**
 * Created by lizekang on 16-5-5.
 */
function signUpCheck() {
    var sex = signup.work;
    if(!sex[0].checked == true && !sex[1].checked == true){
        warn('请选择性别');
        return false;
    }
    var user = signup.email;
    if (checkIsEmpty(user, '邮箱不能为空!')) {
        return false;
    } else if (!/[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-z]+/.test(user.value)) {
        warn('请输入有效的邮箱名!');
        return false;
    }
    var pwd = signup.pwd;
    if (checkIsEmpty(pwd, '密码不能为空!')) {
        return false;
    } else if (pwd.value.length < 6 || pwd.value.length > 16) {
        warn('密码长度不能大于16位,且不能小于6位!');
        return false;
    }
    signup.submit();
}