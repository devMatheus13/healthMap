import React from 'react';

import {Container,Header,Body,Footer,HeaderText,BodyText,Imagem,BodyHeader,Button,ButtonText,ButtonHeader,FooterHeader,FooterText,FooterTextBold
} from './styles';
import { MaterialIcons, FontAwesome5, AntDesign } from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
const Home: React.FC = () => {

  const navigation = useNavigation()

  function handleNavigationMap(){
    navigation.navigate("Map")
  }

  return (
    <Container>
      <Header>
        <MaterialIcons name="location-on" size={27} color="#fff" />
        <HeaderText>
          HealthMap
        </HeaderText>
      </Header>
      <Body>
        <BodyHeader>
          <HeaderText>
            Encotre orgãos de saúde
          </HeaderText>
          <BodyText>
            proximos a você.
          </BodyText>
        </BodyHeader>

        <Imagem source={require('../../assets/map.png')} resizeMode="contain" />
      </Body>
      <Footer>
        <FooterHeader>
        <FooterTextBold>
                Orgãos de Saúde
        </FooterTextBold>
        <FooterText>
           Escolha um dos orgãos a baixo e veja os mais proximos de você.
        </FooterText>
        </FooterHeader>
        <Button activeOpacity={0.7} onPress={handleNavigationMap}>
          <ButtonHeader>
            <FontAwesome5 name="hospital-alt" size={27} color="#fff" />

            <ButtonText>Hospitais</ButtonText>
          </ButtonHeader>
          <AntDesign name="arrowright" size={27} color="#fff" />
        </Button>
        <Button activeOpacity={0.7} onPress={handleNavigationMap}>
          <ButtonHeader>
            <FontAwesome5 name="hospital-alt" size={27} color="#fff" />

            <ButtonText>Posto de saúde</ButtonText>
          </ButtonHeader>
          <AntDesign name="arrowright" size={27} color="#fff" />
        </Button>
        <Button activeOpacity={0.7} onPress={handleNavigationMap}>
          <ButtonHeader>
            <FontAwesome5 name="hospital-alt" size={27} color="#fff" />

            <ButtonText>SAMU</ButtonText>
          </ButtonHeader>
          <AntDesign name="arrowright" size={27} color="#fff" />
        </Button>
      </Footer>
    </Container>
  );
}

export default Home;