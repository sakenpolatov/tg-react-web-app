import { useTelegram } from '../../hooks/useTelegram'
import { Button } from '../Button'
import 'header.css'

export const Header = () => {
	const { user, onClose } = useTelegram()

	return (
		<div className='header'>
			<Button onClick={onClose}>Закрыть</Button>
			<span className='username'>{user?.username}</span>
		</div>
	)
}
