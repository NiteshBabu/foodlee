import React from 'react'
import styled from 'styled-components/native'
import MiniRestaurantInfo from '../../../components/mini-restaurant-info/mini-restaurant-info.component'

const MapCalloutContainer = styled.View`
  height : 100px;
  width : 100px;
`
function MapCallout ({restaurant}) {
return (
    <MapCalloutContainer>
        <MiniRestaurantInfo restaurant={restaurant} isMap />
    </MapCalloutContainer>
    )
}

export default MapCallout
