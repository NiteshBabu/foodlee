import React from "react";
import { FavouriteIcon } from "../../../components/favourites/favourite-icon.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component"

import { RestaurantContainer, RestaurantCard, RatingSection, Icon, InfoSection, StatusSection, SectionContainer } from "./restaurant.styles";

export const RestaurantInfo = ({ restaurant = {} }) => {
	
	const {
		name ,
		photos ,
		businessStatus,
		isOpenNow ,
		icon,
		rating ,
		location ,
	} = restaurant;

	const ratingList = Array.from(new Array(Math.ceil(rating)));
	return (
		<RestaurantContainer>
			<RestaurantCard elevation={5}>
				<FavouriteIcon restaurant={restaurant} />
				<RestaurantCard.Cover source={{ uri: photos[0] }} />
				<RestaurantCard.Content>
					<SectionContainer>
						<InfoSection>
							<Text type="title">{name}</Text>
							<RatingSection>
								{ratingList.map((item, index) => (
									<Icon
										key={index}
										source={require("./star.png")}
										height='15px'
										width='15px'
									/>
								))}
							</RatingSection>
							<Text type="caption">{location}</Text>
						</InfoSection>
						<StatusSection>
							<Text type={businessStatus === "OPERATIONAL" ? "success" : "danger"}>{businessStatus}</Text>
							<Spacer type="right" pixels="20" />
							{
								isOpenNow ?
									<Icon source={require("./open.png")} height='30px' width='30px' />
									:
									<Icon source={require("./close.png")} height='30px' width='30px' />
							}
							<Spacer type="right" pixels="20"/>
							<Icon source={{uri : icon}} height="20px" width="20px"/>
						</StatusSection>
					</SectionContainer>
				</RestaurantCard.Content>
			</RestaurantCard>
		</RestaurantContainer>
	);
};
