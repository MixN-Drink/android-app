import {StatusBar, StyleSheet, ToastAndroid} from 'react-native';
import React from "react";
import {fetch} from "react-native/Libraries/Network/fetch";
import {Home} from "./src/pages/Home";
import {Settings} from "./src/pages/Settings";
import {Help} from "./src/pages/Help";
import {MD2Colors, MD3LightTheme as DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

export default function App() {
	const [prepareResp, setPrepareResp] = React.useState();

	const postPrepare = async (slots, order) => {
		try {
			const response = await fetch(`http://192.168.0.50:8000/prepare`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					slots: slots,
					order: order,
				})
			})
			const jsonResp = await response.json()
			setPrepareResp(jsonResp);
		} catch(e) {
			console.error(e)
		}
	}

	const onPressButton = (e) => {
		postPrepare([30,0,0,70], [1,0,0,2])

		console.log(`Response:`);
		console.log(prepareResp);

		ToastAndroid.show(prepareResp.status, ToastAndroid.SHORT);
	}

	const Stack = createNativeStackNavigator();

	const theme = {
		...DefaultTheme,
		colors: {
			...DefaultTheme.colors,
			primary: MD2Colors.indigoA700,
		},
	};

	return (
			<PaperProvider theme={theme}>
				<StatusBar/>
				<NavigationContainer>
					<Stack.Navigator screenOptions={{headerShown: false}}>
						<Stack.Screen name="settings" component={Settings}/>


						<Stack.Screen name="home" component={Home}/>

						<Stack.Screen name="help" component={Help}/>
					</Stack.Navigator>
				</NavigationContainer>
			</PaperProvider>
	);
}
