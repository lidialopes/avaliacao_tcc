import styled from 'styled-components/native';
import { Text, TextInput } from 'react-native-paper';

const AppTitle = styled.Text`
  font-family: Sans-Serif;
  font-size: 20px;
  color: #1d1d1d;
  text-align: center;
  font-weight: 700;
  margin-bottom: 20px;
`

const ListTitle = styled(Text)`
  font-size: 18px;
  margin: 13px 0;
`

const TextTitle = styled(Text)`
  font-weight: bold;
`

const TccTitle = styled(Text)`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0;
`

const TextInfo = styled(Text)`
`

const TextArea = styled(TextInput)`
  max-height: 85px;
  margin-bottom: 10px;
`

const Header = styled.View`
  background-color: #eee;
  margin-bottom: 10px;
  padding: 14px;
  border-radius: 5px;
`


const Content = styled.ScrollView`
  padding-right: 10px;
`

export {
  AppTitle,
  ListTitle,
  TextTitle,
  TccTitle,
  TextInfo,
  TextArea,
  Header,
  Content
}