import { Flex, Typography } from 'antd'
import ImageCard from '../ImageCard/ImageCard.jsx'
import styles from './MainContent.module.scss'

const { Title } = Typography

const mainContentTitleStyle = {
	color: 'white',
}

function MainContent({
	photosArr,
	likedImages,
	likesHandler,
	foundImage,
}) {
	return (
		<>
			<Typography>
				<Title level={1} style={mainContentTitleStyle}>
					Вы искали- мы нашли
				</Title>
			</Typography>
			<section
				style={{
					width: 'max-content',
					margin: 'auto',
				}}
			>
				<Flex wrap='wrap' className={styles.mainContent} gap='small'>
					{photosArr.map(photoCard => (
						<ImageCard
							photo={photoCard}
							key={photoCard.id}
							likedImages={likedImages}
							likesHandler={likesHandler}
							foundImage={foundImage}
						/>
					))}
				</Flex>
			</section>
		</>
	)
}
export default MainContent
