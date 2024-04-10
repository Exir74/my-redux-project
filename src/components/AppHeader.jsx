import Search from 'antd/es/input/Search.js'
import logo from '../image/logo.png'

const AppHeader = () => {
	const appHeader = {
		// textAlign: "center",
		color: '#fff',
		height: 64,
		paddingInline: 48,
		lineHeight: '64px',
		backgroundColor: '#4096ff',
		display: 'flex',
		justifyContent: 'space-between',
	}

	const headerLogo = {
		width: '30px',
		height: '30px',
		alignSelf: 'center',
	}

	const headerSearchInput = {
		maxWidth: '35%',
		maxHeight: '60%',
		alignSelf: 'center',
	}
	// const onSearch = (value) => console.log(value);
	const onSearch = (value, _e, info) => console.log(value)
	return (
		<header style={appHeader}>
			<img style={headerLogo} alt={'лого'} src={logo} />
			<Search
				style={headerSearchInput}
				placeholder='Что ищем?'
				onSearch={onSearch}
				enterButton
			/>
		</header>
	)
}

export default AppHeader
