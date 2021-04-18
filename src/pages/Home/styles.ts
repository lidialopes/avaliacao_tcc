import styled from 'styled-components/native';
import { Title } from 'react-native-paper';
import { FlatList } from 'react-native';
import { Tcc } from '../../types/Types';

const Content = styled.View`
  padding: 0 40px;
`

const AppTitle = styled(Title)`
  text-align: center;
	font-weight: bold;
	margin: 20px 0;
`

const TccItem = styled.Text`
	margin: 15px 0;
	font-size: 15px;
`
	
	const TccItemSelected = styled.Text`
	padding: 10px 5px;
	margin: 5px 0;
	background-color: #6200ee;
	color: white;
	border-radius: 5px;
	font-size: 15px;
`

const TccList = styled(FlatList as new () => FlatList<Tcc>)`
  margin: 10px 0 15px;
  flex-grow: 0;
`

export {
	Content,
	AppTitle,
	TccItem,
	TccItemSelected,
	TccList
}