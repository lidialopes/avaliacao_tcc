import styled from 'styled-components/native';
import { Text, TextInput } from 'react-native-paper';

const Content = styled.ScrollView`
  padding: 0 40px;
`

const ContentTitle = styled.View`
  align-items: center;
  padding: 30px 0 20px;
`

const AppTitle = styled.Text`
  font-family: Sans-Serif;
  font-size: 20px;
  color: #1d1d1d;
  text-align: center;
  font-weight: 700;
`

const ListTitle = styled(Text)`
  font-size: 18px;
  margin: 13px 0;
`

const TextTitle = styled(Text)`
  font-weight: bold;
  color: #333333;
`

const TccTitle = styled(Text)`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0;
  color: #333333;
`

const TextInfo = styled(Text)`
`

const TextArea = styled(TextInput)`
  max-height: 85px;
  margin: 10px 0;
`

const Header = styled.View`
  background-color: #eee;
  margin-bottom: 10px;
  padding: 14px;
  border-radius: 5px;
`

export {
  Content,
  ContentTitle,
  AppTitle,
  ListTitle,
  TextTitle,
  TccTitle,
  TextInfo,
  TextArea,
  Header
}