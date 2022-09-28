import {NavBar} from "../components/NavBar";
import ListSection from "react-native-paper/src/components/List/ListSection";
import {ListItem} from "@react-native-material/core";
import ListSubheader from "react-native-paper/src/components/List/ListSubheader";

export const Settings = ({navigation}) => {
	return (
			<>
				<NavBar title='Configuración' help={true} back={true} navigation={navigation}/>

				<ListSection>
					<ListSubheader>Conexión WiFi</ListSubheader>
					<ListItem title={"Nombre"}/>
					<ListItem title={"Contraseña"}/>
				</ListSection>
				<ListSection>
					<ListSubheader>Bebidas</ListSubheader>
					<ListItem title={"Bebida 1"}/>
					<ListItem title={"Bebida 2"}/>
					<ListItem title={"Bebida 3"}/>
					<ListItem title={"Bebida 4"}/>
				</ListSection>
			</>
	)
}