import React from 'react'
import { MixedDrink } from './MixedDrink';
import { ScrollView } from "react-native";
import {Button} from "react-native-paper";

const isAvailable = (selectedDrinks, drinks)=>{
	if(selectedDrinks===null){
		return false
	}
	for (let i = 0; i < drinks.length; i++) {
		const drink = drinks[i];
		const exists = selectedDrinks.filter(selectedDrink=>selectedDrink.id===drink.id);
		if(exists.length===0){
			return false
		}
	}
	return true
}

export const MixedDrinksList = ({mixedDrinks}) => {
	let selectedDrinks = null; // TODO: GET /drinks/selected
	if(selectedDrinks!==null){
		selectedDrinks=JSON.parse(selectedDrinks);
	}



	let availableMixedDrinks = [];
	let notAvailableMixedDrinks = [];
	for(let i=0; i<mixedDrinks.length; i++){
		const md = mixedDrinks[i]
		if(isAvailable(selectedDrinks, md.drinks)){
			availableMixedDrinks.push(<MixedDrink key={md.id} img={md.img} name={md.name} drinks={md.drinks}/>)
		} else {
			notAvailableMixedDrinks.push(<MixedDrink key={md.id} img={md.img} name={md.name} drinks={md.drinks} disabled={true}/>)
		}
	}

	return (
			<ScrollView>
				{
					availableMixedDrinks.map((mixedDrink)=>{
						return (mixedDrink)
					})
				}
				{
					notAvailableMixedDrinks.map((mixedDrink)=>{
						return mixedDrink
					})
				}
				<Button></Button>
			</ScrollView>
	)
}