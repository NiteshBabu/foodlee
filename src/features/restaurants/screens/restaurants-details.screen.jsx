import React from 'react'
import { RestaurantInfo } from '../components/restaurant-info.component';
import { List } from 'react-native-paper';
import { ScrollView } from 'react-native';

export default function RestaurantDetails({ navigation, route }) {
  const { restaurant } = route.params
  return (
    <>
      <RestaurantInfo restaurant={restaurant} />
      <ScrollView>

        <List.Accordion
          title="Breakfast"
          left={props => <List.Icon {...props} icon="food-apple" />}
        >
          <List.Item title="Egg Sandwich" />
          <List.Item title="Egg Sandwich" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={props => <List.Icon {...props} icon="glass-tulip" />}
        >
          <List.Item title="Mango Smoothie" />
          <List.Item title="Banana Smoothie"/>
          <List.Item title="Pineapple Smoothie"/>
          <List.Item title="Mojito"/>
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={props => <List.Icon {...props} icon="food" />}
          >
          <List.Item title="Pulse, Rice, Sabji" />
          <List.Item title="Chapatis, Two Sabjis, Lassi" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={props => <List.Icon {...props} icon="food-fork-drink" />}
        >
          <List.Item title="Chapatis, Two Sabjis, Lassi" />
          <List.Item title="Pulse, Rice, Sabji" />
        </List.Accordion>
      </ScrollView>
    </>
  )
}
