import React, { useState } from 'react';

import { useRoute } from '@react-navigation/native';
import { AppButton } from '../../components/AppButton';
import { Container } from '../../components/Container';
import { Separator } from '../../components/Separator';

import {
	Content,
	ContentTitle,
	AppTitle,
	ListTitle,
	TextTitle,
	TccTitle,
	TextInfo,
	TextArea,
	Header
} from './styles';

import { List, HelperText } from 'react-native-paper';

import { Tcc, Aluno, Professor } from '../../types/Types';
import { alunoData, professorData } from '../../database/data';
import { View } from 'react-native';

const Avaliacao: React.FC = () => {
	const tcc = useRoute().params as Tcc;
	const aluno = alunoData[0] as Aluno;
	const professor = professorData[0] as Professor;

	const [nConteudo, setNConteudo] = useState("");
	const [nRedacao, setNRedacao] = useState("");
	const [nNormalizacao, setNNormalizacao] = useState("");
	const [nCapacitacao, setNCapacitacao] = useState("");
	const [nResposta, setNResposta] = useState("");
	const [nPrevisao, setNPrevisao] = useState("");

	const [nota, setNota] = useState(0);

	const [nConteudoError, setNConteudoError] = useState(true);
	const [nRedacaoError, setNRedacaoError] = useState(true);
	const [nNormalizacaoError, setNNormalizacaoError] = useState(true);
	const [nCapacitacaoError, setNCapacitacaoError] = useState(true);
	const [nRespostaError, setNRespostaError] = useState(true);
	const [nPrevisaoError, setNPrevisaoError] = useState(true);

	const calcAvg = () => {
		setNota(
			(Number(nConteudo) +
				Number(nRedacao) +
				Number(nNormalizacao) +
				Number(nCapacitacao) +
				Number(nResposta) +
				Number(nPrevisao)) / 2
		);
	}

	const hasErrorsWithLimits = (num: number, to: number, value: string): boolean => {
		if (value === "") return false;
		return !(num <= Number(value) && to >= Number(value));
	}


	const allInputsValidated = () => 
		!nConteudoError &&
		!nRedacaoError &&
		!nNormalizacaoError &&
		!nCapacitacaoError &&
		!nRespostaError &&
		!nPrevisaoError

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
				<Separator />
				<View>
					<List.Item title="Conteúdo (0 a 5)" />

					<TextArea label="Pontos" keyboardType="number-pad"
						onChangeText={(e) => {
							setNConteudo(e);
							setNConteudoError(hasErrorsWithLimits(0, 5, e));
						}}
						onEndEditing={() => calcAvg()}
					/>

					<HelperText type="error" visible={nConteudoError}>Erro: Nota entre 0 a 5</HelperText>
					<TextArea
						label="Comentários"
						multiline={true}
						numberOfLines={1}
						scrollEnabled={true}
					/>
				</View>

				<View>
					<List.Item title="Redação (0 a 3)" />
					<TextArea label="Pontos" keyboardType="number-pad"
						onChangeText={(e) => {
							setNRedacao(e);
							setNRedacaoError(hasErrorsWithLimits(0, 3, e));
						}}
						onEndEditing={() => calcAvg()}
					/>
					<HelperText type="error" visible={nRedacaoError}>Erro: Nota entre 0 a 3</HelperText>

					<TextArea
						label="Comentários"
						multiline={true}
						numberOfLines={1}
						scrollEnabled={true}
					/>
				</View>

				<View>
					<List.Item title="Normalização (0 a 2)" />
					<TextArea label="Pontos" keyboardType="number-pad"
						onChangeText={(e) => {
							setNNormalizacao(e)
							setNNormalizacaoError(hasErrorsWithLimits(0, 2, e));
						}}
						onEndEditing={() => calcAvg()}
					/>
					<HelperText type="error" visible={nNormalizacaoError}>Erro: Nota entre 0 a 2</HelperText>

					<TextArea
						label="Comentários"
						multiline={true}
						numberOfLines={1}
						scrollEnabled={true}
					/>
				</View>

				<ListTitle>Apresentação Oral</ListTitle>
				<Separator />
				<View>
					<List.Item title="Capacitação de Exposição (0 a 5)" />
					<TextArea label="Pontos" keyboardType="number-pad"
						onChangeText={(e) => {
							setNCapacitacao(e);
							setNCapacitacaoError(hasErrorsWithLimits(0, 5, e));
						}}
						onEndEditing={() => calcAvg()}
					/>
					<HelperText type="error" visible={nCapacitacaoError}>Erro: Nota entre 0 a 5</HelperText>

					<TextArea
						label="Comentários"
						multiline={true}
						numberOfLines={1}
						scrollEnabled={true}
					/>
				</View>

				<View>
					<List.Item title="Respostas às Arguições (0 a 4)" />
					<TextArea label="Pontos" keyboardType="number-pad"
						onChangeText={(e) => {
							setNResposta(e);
							setNRespostaError(hasErrorsWithLimits(0, 4, e));
						}}
						onEndEditing={() => calcAvg()}
					/>
					<HelperText type="error" visible={nRedacaoError}>Erro: Nota entre 0 a 4</HelperText>

					<TextArea
						label="Comentários"
						multiline={true}
						numberOfLines={1}
						scrollEnabled={true}
					/>
				</View>
				<View>
					<List.Item title="Previsão do Tempo (0 a 1)" />
					<TextArea label="Pontos" keyboardType="number-pad"
						onChangeText={(e) => {
							setNPrevisao(e);
							setNPrevisaoError(hasErrorsWithLimits(0, 1, e));
						}}
						onEndEditing={() => calcAvg()}
					/>
					<HelperText type="error" visible={nPrevisaoError}>Erro: Nota entre 0 a 1</HelperText>
					<TextArea
						label="Comentários"
						multiline={true}
						numberOfLines={1}
						scrollEnabled={true}
					/>
				</View>
			</Content>

			<AppButton mode="contained" disabled={!allInputsValidated()}>Enviar</AppButton>
		</Container>
	);
}

export default Avaliacao;