import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../Assets/crown.svg'

const Header = () => (
	<div className='header'>
		<Link to='/'>
			<Logo className='logo' />
		</Link>
		<div className='options'>
			<Link className='option' to='/'>
				Explore
			</Link>
			<Link className='option' to='/license'>
				License
			</Link>
			<Link className='option' to='/upload'>
				Upload
			</Link>
			<Link className='option' to='/signup'>
				Sign Up
			</Link>
			<Link className='option' to='/signin'>
				SignIn
			</Link>
		</div>
	</div>
)

export default Header
