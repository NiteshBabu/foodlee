import styled from "styled-components/native";
import { Card } from "react-native-paper";


export const RestaurantContainer = styled.View``;

export const RestaurantCard = styled(Card)`
	margin: 10px;
	padding: 5px;
`;

export const RatingSection = styled.View`
	flex-direction: row;
`;

export const Icon = styled.Image` 
  height: ${({height})=>height};
  width: ${({width})=>width};
  margin : 5px 2px;
`;

export const InfoSection = styled.View`
	max-width : 50%;
	flex-direction: column;
	justify-content: space-between;
`;

export const StatusSection = styled.View`
	margin-left: 8px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const SectionContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	margin: 15px 0 0 0;
`;
