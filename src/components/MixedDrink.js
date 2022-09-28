import React from 'react'
import {Alert} from "react-native";
import {Divider, List} from 'react-native-paper';
import AvatarImage from "react-native-paper/src/components/Avatar/AvatarImage";

export const MixedDrink = ({img,name,drinks,disabled}) => {
	let drinksString = "";
	drinks.forEach((item)=>{
		drinksString += item.name + ", ";
	})
	drinksString = drinksString.slice(0, -2);

	let titleStyle = null;
	let descriptionStyle = null;
	let avatarStyle = {backgroundColor: 'white'};

	if(disabled){
		titleStyle = {opacity: 0.38}
		descriptionStyle = {opacity: 0.38}
		avatarStyle.opacity = 0.38
	}

	return (
			<>
				<List.Item
						left={ _ => <AvatarImage source={{ uri: img }} style={avatarStyle}/>}
						title={name}
						description={drinksString}
						onPress={() => {Alert.alert(`Preparando ${name}`);}}
						disabled={disabled}
						titleStyle={titleStyle}
						descriptionStyle={descriptionStyle}
				/>
				<Divider/>
			</>
	)
}
