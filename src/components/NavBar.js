import React from 'react'
import {Appbar, useTheme} from "react-native-paper";

export const NavBar = ({title, back, config, help, navigation}) => {
	return (
			<Appbar.Header statusBarHeight={0} style={{backgroundColor: useTheme().colors.primary}}>
				{back?<Appbar.BackAction onPress={() => navigation.navigate('home')} iconColor={useTheme().colors.onPrimary}/>:null}
				<Appbar.Content title={title} titleStyle={{color: useTheme().colors.onPrimary}}/>
				{config?<Appbar.Action icon="cog" onPress={() => navigation.navigate('settings')} iconColor={useTheme().colors.onPrimary}/>:null}
				{help?<Appbar.Action icon="help-circle" onPress={() => navigation.navigate('help')} iconColor={useTheme().colors.onPrimary}/>:null}
			</Appbar.Header>
	)
}