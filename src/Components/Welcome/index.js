import React from 'react'
import './styles.scss'

const Welcome = () => (
	<div className='background-image'>
		<div className='welcomes'>
			<h5 className='slogan'>The whole world in a picture</h5>
			<input
				className='search'
				onChange={() => {}}
				placeholder={'Search'}
				type='search'
			/>
			<p className='suggest'>
				Suggested: technology, engineering, desk, programming, more
			</p>
		</div>
	</div>
)

export default Welcome
