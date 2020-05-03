import React from 'react'
import './styles.scss'
import Header from '../../Components/Header'

const data = [
	'https://66.media.tumblr.com/cf24bcdab1679d10d03c00907edf04c3/982f23e41a6cceae-10/s1280x1920/dd523088c949411e3489f8245c7b2a6c2b308983.jpg',
	'https://66.media.tumblr.com/a2047798deea82b5e8432b1f7ee7b360/8f4de37becfd5baa-4f/s1280x1920/fe7e207e1b567dc051a80c8f46ba95caca3d2ed9.jpg',
	'https://66.media.tumblr.com/8dcd8c3bfbe1d6332a7a7ff25c2e7d2d/707baf7e0bf668f9-7d/s1280x1920/f26ef658a8bc1aadf2e36333ebe5adfc84a54707.jpg',
	'https://66.media.tumblr.com/17b0a5faa111c899099a977d391ba063/c9609f06da30975c-30/s1280x1920/11e68f35fefdb6efeda1a1d1feab1a0c65d6c16b.jpg',
	'https://66.media.tumblr.com/d66c45c969d7612878ff04c0ba6a2b3d/152217a9d764f3c3-c2/s1280x1920/a9c6227a42bb874fe826c95e0460aac08a47c243.jpg',
	'https://66.media.tumblr.com/6ff4aac820375324cea9d059acdcccd8/4bdef99e19dd0169-17/s1280x1920/b5a6d6f0f9aad04434909afc3058c793887c10d4.jpg',
]
const HomePage = () => {
	return (
		<div className='container'>
			{data.map((item) => (
				<div className='item'>
					<div
						className='image'
						style={{ backgroundImage: `url(${item})` }}
					></div>
				</div>
			))}
		</div>
	)
}

export default HomePage
