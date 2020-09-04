import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Main,
} from './styles';

// => Components
import TypeButton from '../../../components/controllers/TypeButton';

// => icons
import Graph from '../../../icons/Graph';
import Goal from '../../../icons/Goal';
import Header from '../../../components/views/Header';

const SelectType: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <Container>
      <Header
        title="Escolha um tipo"
        goBackButton
      />
      <Main>
        <TypeButton
          name="Controle Financeiro"
          icon={Graph}
          style={{ marginBottom: 15 }}
          onPress={() => {
            navigate('create-finance');
          }}
        />
        <TypeButton
          name="Meta Financeira"
          icon={Goal}
          onPress={() => {
            navigate('create-goal');
          }}
        />
      </Main>
    </Container>
  );
};

export default SelectType;
