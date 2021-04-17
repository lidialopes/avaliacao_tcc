import React, { useState } from 'react';

import { useRoute } from '@react-navigation/native';
import { AppButton } from '../../components/AppButton';
import { Container } from '../../components/Container';
import { Separator } from '../../components/Separator';
import { Content } from '../../components/Content';

import {
	ContentTitle,
	AppTitle,
	ListTitle,
	TextTitle,
	TccTitle,
	TextInfo,
	TextArea,
	Header
} from './styles';

import { List } from 'react-native-paper';

import { Tcc, Aluno, Professor } from '../../types/Types';
import { alunoData, professorData } from '../../database/data';

const Avaliacao: React.FC = () => {
	const tcc = useRoute().params as Tcc;
	const aluno = alunoData[0] as Aluno;
	const professor = professorData[0] as Professor;

	const [nConteudo, setNConteudo] = useState(0);
	const [nRedacao, setNRedacao] = useState(0);
	const [nNormalizacao, setNNormalizacao] = useState(0);
	const [nCapacitacao, setNCapacitacao] = useState(0);
	const [nResposta, setNResposta] = useState(0);
	const [nPrevisao, setNPrevisao] = useState(0);
	const [nota, setNota] = useState(0);

	const calcAvg = () => {
		setNota(((nConteudo +
			nRedacao +
			nNormalizacao +
			nCapacitacao +
			nResposta +
			nPrevisao) / 2));
	}

	return (
		<Container>
			<ContentTitle>
				<AppTitle>Avaliação de Defesa</AppTitle>
				<TextInfo>Nota: {nota}</TextInfo>
			</ContentTitle>
			<Content>
				<Header>
					<TccTitle>{tcc.tema}</TccTitle>
					<TextInfo><TextTitle>Aluno: </TextTitle>{aluno.nome}</TextInfo>
					<TextInfo><TextTitle>Matrícula: </TextTitle>{aluno.matricula}</TextInfo>
					<TextInfo><TextTitle>Curso: </TextTitle>{aluno.curso}</TextInfo>
					<TextInfo><TextTitle>Professor: </TextTitle>{professor.nome}</TextInfo>
				</Header>

				<ListTitle>Apresentação Escrita</ListTitle>
				<Separator/>
				<List.Item title="Conteúdo (0 a 5)" />
				<TextArea label="Pontos" keyboardType="number-pad"
					onChangeText={(e) => setNConteudo(Number(e))}
					onEndEditing={() => calcAvg()}
				/>
				<TextArea
					label="Comentários"
					multiline={true}
					numberOfLines={1}
					scrollEnabled={true}
				/>
				<List.Item title="Redação (0 a 3)" />
				<TextArea label="Pontos" keyboardType="number-pad"
					onChangeText={(e) => setNRedacao(Number(e))}
					onEndEditing={() => calcAvg()}
				/>
				<TextArea
					label="Comentários"
					multiline={true}
					numberOfLines={1}
					scrollEnabled={true}
				/>
				<List.Item title="Normalização (0 a 2)" />
				<TextArea label="Pontos" keyboardType="number-pad"
					onChangeText={(e) => setNNormalizacao(Number(e))}
					onEndEditing={() => calcAvg()}
				/>
				<TextArea
					label="Comentários"
					multiline={true}
					numberOfLines={1}
					scrollEnabled={true}
				/>

				<ListTitle>Apresentação Oral</ListTitle>
				<Separator/>
				<List.Item title="Capacitação de Exposição (0 a 5)" />
				<TextArea label="Pontos" keyboardType="number-pad"
					onChangeText={(e) => setNCapacitacao(Number(e))}
					onEndEditing={() => calcAvg()}
				/>
				<TextArea
					label="Comentários"
					multiline={true}
					numberOfLines={1}
					scrollEnabled={true}
				/>
				<List.Item title="Respostas às Arguições (0 a 4)" />
				<TextArea label="Pontos" keyboardType="number-pad"
					onChangeText={(e) => setNResposta(Number(e))}
					onEndEditing={() => calcAvg()}
				/>
				<TextArea
					label="Comentários"
					multiline={true}
					numberOfLines={1}
					scrollEnabled={true}
				/>
				<List.Item title="Previsão do Tempo (0 a 1)" />
				<TextArea label="Pontos" keyboardType="number-pad"
					onChangeText={(e) => setNPrevisao(Number(e))}
					onEndEditing={() => calcAvg()}
				/>
				<TextArea
					label="Comentários"
					multiline={true}
					numberOfLines={1}
					scrollEnabled={true}
				/>
			</Content>
			
			<AppButton mode="contained">Enviar</AppButton>
		</Container>
	);
}

export default Avaliacao;