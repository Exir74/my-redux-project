import { Flex } from 'antd'
import ImageCard from '../ImageCard/ImageCard.jsx'

function DrawerCard({ likedImages, foundImage, likesHandler }) {
	return (
		<Flex
			className='drawer-card'
			vertical
			gap={'small'}
			align='center'
		>
			{likedImages.map(photoCard => (
				<ImageCard
					photo={photoCard}
					key={photoCard.id}
					likesHandler={likesHandler}
					foundImage={foundImage}
				/>
			))}
		</Flex>
	)
}

export default DrawerCard
