import React, { useContext, useEffect, useState } from "react"
import MapView from 'react-native-maps';

import styled from "styled-components/native"
import LoadingIcon from "../../../components/LoadingIcon";
import { LocationContext } from "../../../context/location.context";
import { RestaurantsContext } from "../../../context/restaurants.context";
import MapCallout from "../components/map-callout.component";
import { Search } from "../components/Search/Search.component";

const Map = styled(MapView)`
  height : 100%;
  width : 100%;
`

export const MapScreen = ({ navigation }) => {
  const { restaurants } = useContext(RestaurantsContext)
  const { location } = useContext(LocationContext)
  const [latitudeDelta, setLatitudeDelta] = useState(100)
  const longitudeDelta = 0.03

  useEffect(() => {
    if (location) {
      setLatitudeDelta(location.viewport.northeast.lat - location.viewport.southwest.lat)
    }
  }, [location])

  if (!location) return <LoadingIcon />
  return (
    <>
      <Search />
      <Map
        region={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: latitudeDelta,
          longitudeDelta: longitudeDelta,
        }}
      >
        {
          restaurants.map(restaurant =>
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{ latitude: restaurant.geometry.location.lat, longitude: restaurant.geometry.location.lng }}
            >
              <MapView.Callout
                onPress={() => navigation.navigate("RestaurantDetails", {restaurant})}
              >
                <MapCallout restaurant={restaurant}/>
              </MapView.Callout>
            </MapView.Marker>
          )
        }
      </Map>
    </>
  )
}