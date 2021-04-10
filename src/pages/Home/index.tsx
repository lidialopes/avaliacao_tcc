import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container } from '../../components/Container';
import { AppButton } from '../../components/AppButton';
import { Separator } from '../../components/Separator';

import { tccData } from '../../database/data';
import { Tcc } from '../../types/Types';

import {
	AppTitle,
	TccItem,
	TccItemSelected,
	TccList
} from './styles';

const Home: React.FC = () => {
	const navigation = useNavigation();
	const [tcc, setTcc] = useState<Tcc>();

	const handleNavigateToAvaliacao = () => {
		navigation.navigate('Avaliacao', tcc);
	}

	return (
		<Container>
			<AppTitle>Avaliação de TCC</AppTitle>
			<View style={{ justifyContent: 'space-between', flex: 1 }}>
				<TccList
					keyExtractor={(item: Tcc) => item.id}
					data={tccData}
					ItemSeparatorComponent={Separator}
					renderItem={({ item }: { item: Tcc }) => (
						<TouchableOpacity activeOpacity={0.7} onPress={() => setTcc(item)}>
							{item.id == tcc?.id
								? <TccItemSelected>{item.tema}</TccItemSelected>
								: <TccItem>{item.tema}</TccItem>
							}
						</TouchableOpacity>
					)} />
				{tcc &&
					<AppButton mode='contained' 
					onPress={() => handleNavigateToAvaliacao()}>
						Iniciar avaliação
					</AppButton>
				}
			</View>
		</Container >
	)
}

export default Home;