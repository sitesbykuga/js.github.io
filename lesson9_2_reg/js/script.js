let age = document.getElementById('age'),
	call = document.getElementsByTagName('button')[0],
	apply = document.getElementsByTagName('button')[1],
	bind = document.getElementsByTagName('button')[2],
	user = {
		value: age.value
	};

function showUser(surname, name) {
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

function showUserBind(surname, name) {
    alert("Пользователь " + surname + " " + name + ", его возраст " + this);
}

call.addEventListener('click', () => {
	showUser.call(user, 'Кугаевская', 'Евгения');
});

apply.addEventListener('click', () => {
	showUser.apply(user, ['Кугаевская', 'Евгения']);
});

bind.addEventListener('click', () => {
	let snowUserB = showUserBind.bind(user.value);
	snowUserB('Кугаевская', 'Евгения');
});

age.addEventListener('input', () => {
	user.value = age.value;
})
