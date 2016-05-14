/**
 * Created by lizekang on 16-5-13.
 */
function edit_name(){
    var curtain = document.createElement('div');
    curtain.id = 'curtain';
    curtain.classList.add('curtain');
    document.body.appendChild(curtain);
    var name_edit = document.createElement('div');
    name_edit.id = 'name_edit';
    name_edit.classList.add('name-edit');
    document.body.appendChild(name_edit);
    var headline = document.createElement('div');
    headline.classList.add('headline');
    headline.innerText = '编辑姓名';
    name_edit.appendChild(headline);
    var edit_form = document.createElement('form');
    var name_input = document.createElement('input');
    name_input.defaultValue = document.getElementById('name').innerText;
    var bt_left = document.createElement('button');
    var bt_right = document.createElement('button');
    bt_left.classList.add('left');
    bt_left.innerText = '取消';
    bt_right.innerText = '确定';
    bt_right.classList.add('right');
    bt_left.addEventListener('click',cancel,false);
    name_edit.appendChild(edit_form);
    edit_form.appendChild(name_input);
    name_edit.appendChild(bt_left);
    name_edit.appendChild(bt_right);
}
function edit_sex(){

}
function edit_school(){
    var curtain = document.createElement('div');
    curtain.id = 'curtain';
    curtain.classList.add('curtain');
    document.body.appendChild(curtain);
    var name_edit = document.createElement('div');
    name_edit.id = 'name_edit';
    name_edit.classList.add('name-edit');
    document.body.appendChild(name_edit);
    var headline = document.createElement('div');
    headline.classList.add('headline');
    headline.innerText = '编辑学校';
    name_edit.appendChild(headline);
    var edit_form = document.createElement('form');
    var name_input = document.createElement('input');
    name_input.defaultValue = document.getElementById('school').innerText;
    var bt_left = document.createElement('button');
    var bt_right = document.createElement('button');
    bt_left.classList.add('left');
    bt_left.innerText = '取消';
    bt_right.innerText = '确定';
    bt_right.classList.add('right');
    bt_left.addEventListener('click',cancel,false);
    name_edit.appendChild(edit_form);
    edit_form.appendChild(name_input);
    name_edit.appendChild(bt_left);
    name_edit.appendChild(bt_right);
}
function edit_phone(){
    var curtain = document.createElement('div');
    curtain.id = 'curtain';
    curtain.classList.add('curtain');
    document.body.appendChild(curtain);
    var name_edit = document.createElement('div');
    name_edit.id = 'name_edit';
    name_edit.classList.add('name-edit');
    document.body.appendChild(name_edit);
    var headline = document.createElement('div');
    headline.classList.add('headline');
    headline.innerText = '编辑手机号码';
    name_edit.appendChild(headline);
    var edit_form = document.createElement('form');
    var name_input = document.createElement('input');
    name_input.defaultValue = document.getElementById('phoneNumber').innerText;
    var bt_left = document.createElement('button');
    var bt_right = document.createElement('button');
    bt_left.classList.add('left');
    bt_left.innerText = '取消';
    bt_right.innerText = '确定';
    bt_right.classList.add('right');
    bt_left.addEventListener('click',cancel,false);
    name_edit.appendChild(edit_form);
    edit_form.appendChild(name_input);
    name_edit.appendChild(bt_left);
    name_edit.appendChild(bt_right);
}
function edit_QQ(){
    var curtain = document.createElement('div');
    curtain.id = 'curtain';
    curtain.classList.add('curtain');
    document.body.appendChild(curtain);
    var name_edit = document.createElement('div');
    name_edit.id = 'name_edit';
    name_edit.classList.add('name-edit');
    document.body.appendChild(name_edit);
    var headline = document.createElement('div');
    headline.classList.add('headline');
    headline.innerText = '编辑QQ';
    name_edit.appendChild(headline);
    var edit_form = document.createElement('form');
    var name_input = document.createElement('input');
    name_input.defaultValue = document.getElementById('QQ').innerText;
    var bt_left = document.createElement('button');
    var bt_right = document.createElement('button');
    bt_left.classList.add('left');
    bt_left.innerText = '取消';
    bt_right.innerText = '确定';
    bt_right.classList.add('right');
    bt_left.addEventListener('click',cancel,false);
    name_edit.appendChild(edit_form);
    edit_form.appendChild(name_input);
    name_edit.appendChild(bt_left);
    name_edit.appendChild(bt_right);
}
function edit_time(){
    var curtain = document.createElement('div');
    curtain.id = 'curtain';
    curtain.classList.add('curtain');
    document.body.appendChild(curtain);
    var name_edit = document.createElement('div');
    name_edit.id = 'name_edit';
    name_edit.classList.add('name-edit');
    document.body.appendChild(name_edit);
    var headline = document.createElement('div');
    headline.classList.add('headline');
    headline.innerText = '编辑时间';
    name_edit.appendChild(headline);
    var edit_form = document.createElement('form');
    var name_input = document.createElement('input');
    name_input.defaultValue = document.getElementById('time').innerText;
    var bt_left = document.createElement('button');
    var bt_right = document.createElement('button');
    bt_left.classList.add('left');
    bt_left.innerText = '取消';
    bt_right.innerText = '确定';
    bt_right.classList.add('right');
    bt_left.addEventListener('click',cancel,false);
    name_edit.appendChild(edit_form);
    edit_form.appendChild(name_input);
    name_edit.appendChild(bt_left);
    name_edit.appendChild(bt_right);
}
function cancel(){
    console.log(1);
    var curtain = document.getElementById('curtain');
    var edit = document.getElementById('name_edit');
    document.body.removeChild(curtain);
    document.body.removeChild(edit);
}