import { useEffect, useState } from "react";

import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";
import { ReactorkutMenu, OrkutNostalgicIconSet } from "../src/lib/ReactorkutCommons";

// const Title = styled.h1`
//	font-size: 50px;
//	color: ${({ theme }) => theme.colors.primary};
// `

function ProfileSidebar({ githubUser }) {
	return (
		<Box>
			<img
				style={{ borderRadius: "8px" }}
				src={`https://github.com/${githubUser}.png`}
			/>
		</Box>
	);
}

export default function Home() {
	const githubUser = "JonatasAmaral";
	const amigos = ["alura-cursos", "KDE", "GNOME", "Blender"];
	return (
		<>
			<ReactorkutMenu {...{ githubUser }} />
			<MainGrid>
				{/* <Box style="grid-area: profileArea">Image</Box> */}
				<div className="profileArea" style={{ gridArea: "profileArea" }}>
					<ProfileSidebar {...{ githubUser }} />
				</div>
				<div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
					<Box>
						<h1 className="title">Bem vindo(a)</h1>

						<OrkutNostalgicIconSet />
					</Box>
					<Box>Postar</Box>
				</div>
				<div
					className="profileRelationsArea"
					style={{ gridArea: "profileRelationsArea" }}
				>
					<ProfileRelationsBoxWrapper>
						<h2 class="smallTitle">Amigos ({amigos.length})</h2>
						<ul>
							{amigos.map((amigo) => (
								<li>
									<a href={`/users/${amigo}`} key={amigo}>
										{/* <img src={`https://api.thecatapi.com/v1/images/search?size=thumb&format=src`} /> */}
										<img src={`https://github.com/${amigo}.png`} />
										<span>{amigo}</span>
									</a>
								</li>
							))}
						</ul>
						<br />
						<a href="">veja mais</a>
					</ProfileRelationsBoxWrapper>
					<Box>
						<h2 class="smallTitle">Comunidades</h2>
					</Box>
				</div>
			</MainGrid>
		</>
	);
}
