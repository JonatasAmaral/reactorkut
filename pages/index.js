import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";

// const Title = styled.h1`
//	font-size: 50px;
//	color: ${({ theme }) => theme.colors.primary};
// `

function ProfileSidebar({githubUser}) {
	return (
		<Box>
			<img
				style={{borderRadius: '8px'}}
				src={`https://github.com/${githubUser}.png`}
			/>
		</Box>
	)
}

export default function Home() {
	const githubUser = 'JonatasAmaral';
	return (
		<MainGrid>
			{/* <Box style="grid-area: profileArea">Image</Box> */}
			<div className="profileArea" style={{gridArea: 'profileArea'}}>
				<ProfileSidebar {...{githubUser}} />
				<Box>User info</Box>
				<Box>Menu</Box>
			</div>
			<div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
				<Box>Bem vindo</Box>
				<Box>Postar</Box>
				<Box>Feed</Box>
			</div>
			<div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
				<Box>Amigos</Box>
				<Box>Comunidades</Box>
			</div>
		</MainGrid>
	)
}
