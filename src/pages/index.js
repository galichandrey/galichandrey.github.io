import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Section, Override, StackItem, Stack, SocialMedia, Formspree } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				«Школа-студия Галич»
			</title>
			<meta name={"description"} content={"Индивидуальное обучение без отрыва от производства в удобном для вас графике по направлениям: маникюр, гель-лак, педикюр, наращивание ногтей, наращивание ресниц, оформление и окраска бровей"} />
			<meta property={"og:title"} content={"«Школа-студия Галич»"} />
			<meta property={"og:description"} content={"Индивидуальное обучение без отрыва от производства в удобном для вас графике по направлениям: маникюр, гель-лак, педикюр, наращивание ногтей, наращивание ресниц, оформление и окраска бровей"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="64px 0 34px 0" sm-padding="40px 0" font="--base" color="--dark">
			<Text
				as="h1"
				font="--headline1"
				md-font="--headline2"
				max-width="900px"
				margin="0 auto 5px auto"
				text-align="center"
				width="900px"
			>
				Школа-студия Галич
			</Text>
		</Section>
		<Section padding="20px 0 24px 0" sm-padding="40px 0" font="--base" color="--dark">
			<Stack>
				<StackItem width="20%" lg-width="100%" lg-order="2">
					<Override slot="StackItemContent" text-align="center" width="200px" />
					<Stack>
						<StackItem width="50%" sm-width="100%">
							<Override
								slot="StackItemContent"
								background="--color-lightD1"
								padding="20px"
								flex-direction="column"
								width="220px"
								min-width="220px"
								height="250px"
							/>
							<Box
								width="150px"
								height="150px"
								margin="0 auto"
								background="url(https://uploads.quarkly.io/5fb6745ab1c8af001eb5555e/images/DIf-LZypLVI.jpg?v=2020-11-19T15:01:09.913Z) 50% 0/cover no-repeat"
								border-radius="50%"
							/>
							<Text as="h3" font="normal 500 24px/1.2 --fontFamily-sans" margin="20px 0 5px 0">
								Марина Галич{"\n\n"}
							</Text>
							<Text color="--grey" margin="0">
								Директор{"\n\n"}
							</Text>
						</StackItem>
					</Stack>
				</StackItem>
				<StackItem width="80%" lg-width="100%">
					<Override
						slot="StackItemContent"
						lg-margin-bottom="24px"
						flex-direction="column"
						min-width="100%"
						width="100%"
					/>
					<Text
						color="--grey"
						letter-spacing="1px"
						text-transform="uppercase"
						margin="0 0 10px 0"
						width="100%"
						min-width="100%"
						max-width="100%"
					/>
					<Text
						as="h2"
						font="normal 700 30px/1.2 --fontFamily-sans"
						md-font="--headline3"
						margin="0 0 0 10px"
						width="100%"
						min-width="100%"
					>
						«Индивидуальное и групповое обучение маникюру, гель-лаку, педикюру, наращиванию ногтей, наращиванию ресниц, оформлению и окраске бровей.
						<br />
						Без отрыва от производства в удобном для вас графике - день и время выбираете вы»
					</Text>
				</StackItem>
			</Stack>
			<SocialMedia
				facebook="https://www.facebook.com/galichschool.studio"
				instagram="https://www.instagram.com/galichschool.studio"
				whatsapp="https://api.whatsapp.com/send?phone=79069543999"
				margin="0px 0px 10px 0px"
				display="none"
			>
				<Override slot="link" />
			</SocialMedia>
		</Section>
		<Section background="--color-light" color="--dark" padding="64px 0">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text font="--headline2" max-width="500px" margin="10px 0 0 0">
						Запись
						<br />
						на собеседование
						<br />
						в форме справа
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Formspree endpoint="https://formspree.io/f/xzbkvoql">
						<Stack gap="16px">
							<StackItem width="50%">
								<Override slot="StackItemContent" flex-direction="column" />
								<Text font="--base" margin="0 0 4px 0">
									Имя
								</Text>
								<Input max-width="400px" width="100%" name="name" />
							</StackItem>
							<StackItem width="50%">
								<Override slot="StackItemContent" flex-direction="column" />
								<Text font="--base" margin="0 0 4px 0">
									Email
								</Text>
								<Input max-width="400px" width="100%" type="email" name="email" />
							</StackItem>
							<StackItem width="100%">
								<Override slot="StackItemContent" flex-direction="column" />
								<Text font="--base" margin="0 0 4px 0">
									Сообщение
								</Text>
								<Input as="textarea" rows="4" width="100%" name="message" />
							</StackItem>
							<StackItem width="100%">
								<Button>
									Send
								</Button>
							</StackItem>
						</Stack>
					</Formspree>
				</StackItem>
			</Stack>
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0">
			<SocialMedia whatsapp="https://api.whatsapp.com/send?phone=79069543999" margin="0px 0px 10px 0px">
				<Override slot="link" />
			</SocialMedia>
			<Link
				href="mailto:hello@company.com"
				text-decoration-line="none"
				variant="--base"
				color="--grey"
				hover-color="--primary"
			>
				«Школа-студия Галич» (с) +7 906 954 3999
			</Link>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});