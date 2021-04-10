import styled from 'styled-components/native';
import { Title } from 'react-native-paper';
import { FlatList } from 'react-native';
import { Tcc } from '../../types/Types';

const AppTitle = styled(Title)`
  text-align: center;
`

const TccItem = styled.Text`
	margin: 15px 0;
	font-size: 15px;
`
	
	const TccItemSelected = styled.Text`
	padding: 10px 5px;
	margin: 5px 0;
	background-color: #eee;
	border-radius: 5px;
	font-size: 15px;
`

const TccList = styled(FlatList as new () => FlatList<Tcc>)`
  margin: 10px 0 15px;
  flex-grow: 0;
`

export {
	AppTitle,
	TccItem,
	TccItemSelected,
	TccList
}