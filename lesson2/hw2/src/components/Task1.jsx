// Задача 1. Вводимо логін і пароль. Якщо логін вірний відображаємо смайл. Якщо ні, то:
// 1) якщо логін = Іван – колір повідомлення про помилку синій
// 2) якщо хтось інший, то колір повідомлення червоний

import { useState } from 'react'
function Login() {
	const [logValue, setLogValue] = useState('')
	const [passValue, setPassValue] = useState('')
	const [isAut, setIsAut] = useState(false)
	// const [isMainUser, setIsMainUser] = useState(false)
	const [text, setText] = useState()
	const userData = [
		{ id: 1, login: 'Admin1', password: '1' },
		{ id: 2, login: 'Admin2', password: '22' },
		{ id: 3, login: 'Admin3', password: '333' },
		{ id: 4, login: 'Admin4', password: '4444' },
		{ id: 5, login: 'Admin5', password: '55555' },
	]
	const mainUser = 'Ivan'

	const handleChangeLogin = e => {
		setLogValue(e.target.value)
	}
	const handleChangePass = e => {
		setPassValue(e.target.value)
	}

	const handleClick = e => {
		e.preventDefault()
		if (logValue === '' && passValue === '') {
			setText(<p style={{ color: 'red' }}>Введіть логін і пароль</p>)
			return
		} else {
			setLogValue('')
			setPassValue('')

			const isAuthenticated = userData.some(user => user.login === logValue && user.password === passValue)

			setIsAut(isAuthenticated)
			if (!isAuthenticated) {
				if (logValue === mainUser) {
					setText(<p style={{ color: 'blue' }}>Ваше імʼя: {mainUser}</p>)

					// setIsMainUser(true)
				} else {
					setText(<p style={{ color: 'red' }}>Невірно ввели логін чи пароль</p>)
				}
			}
		}
	}

	return (
		<div className='form__box'>
			<form>
				<div>
					<label>
						Введіть логін:
						<input
							type='text'
							value={logValue}
							onChange={handleChangeLogin}
						/>
					</label>
				</div>
				<div>
					<label>
						Введіть пароль:
						<input
							type='text'
							value={passValue}
							onChange={handleChangePass}
						/>
					</label>
				</div>
				<input
					type='submit'
					value='GO'
					onClick={handleClick}
				/>
			</form>
			{isAut && (
				<div
					style={{
						width: '200px',
						height: '200px',
						borderRadius: '50%',
						margin: '10px auto 0',
						overflow: 'hidden',
					}}
				>
					<img
						src='https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlMThfYV9jdXRlXzNkX29mX2Ffc21pbGVfZW1vamlfZmFjZV9pc29sYXRlZF9vbl9hX18xMjIzNzVhYi01YWIzLTQzYjQtODA5Ny0xN2YwMjMzNWVjMmQucG5n.png'
						alt='Image'
						style={{
							width: '100%',
							transform: 'scale(1.18)',
						}}
					/>
				</div>
			)}
			{!isAut && text}
		</div>
	)
}

export default Login
