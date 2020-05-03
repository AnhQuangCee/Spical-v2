import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'

const Tabbars = () => (
	<div className='tab-bars'>
		<Link to='/' className='option'>
			Trending
		</Link>
		<Link to='/license' className='option'>
			Popular
		</Link>
		<Link to='/upload' className='option'>
			Creative
		</Link>
		<Link to='/signin' className='option'>
			Editorial
		</Link>
		<Link to='/signup' className='option'>
			Service
		</Link>
	</div>
)

export default Tabbars
