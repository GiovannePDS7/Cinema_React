import React, { useState } from "react";
import { Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

import Luca from "../../assets/imgs/filmes1/luca.png";
import Soul from "../../assets/imgs/filmes1/soul.jpg";
import ToyStory from "../../assets/imgs/filmes1/toyStory.jpeg";
import Carros from "../../assets/imgs/filmes1/carros.jpg"
import Coco from "../../assets/imgs/filmes1/coco.png"
import MonstrosSa from "../../assets/imgs/filmes1/monstrosSa.jpg"
import Up from "../../assets/imgs/filmes1/up.jpg"
import Wall from "../../assets/imgs/filmes1/wall.png"
import LogoWhite from "../../assets/imgs/logos/Logo2.png"

const HomeScreen = ({navigation}) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const toggleDescription = (movie) => {
    if (selectedMovie === movie) {
      setSelectedMovie(null);
    } else {
      setSelectedMovie(movie);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={LogoWhite} style={styles.logo} />
      <TouchableOpacity onPress={() => toggleDescription("Luca")}>
        <Image source={Luca} style={styles.image} />
        {selectedMovie === "Luca" && (
          <Text style={styles.description}>
            A história se passa em uma pitoresca cidade costeira italiana, onde um garoto chamado Luca vive
            um verão inesquecível, fazendo amizade com um novo amigo. No entanto, há um segredo: ele e seu
            amigo são, na verdade, monstros marinhos que se transformam em humanos quando estão fora d'água.
          </Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleDescription("Soul")}>
        <Image source={Soul} style={styles.image} />
        {selectedMovie === "Soul" && (
          <Text style={styles.description}>
            Um músico de jazz chamado Joe Gardner tem sua alma separada de seu corpo após um acidente.
            Ele embarca em uma jornada na Terra antes de reencontrar seu corpo, refletindo sobre a importância
            da vida, paixão e o que significa ter uma "alma".
          </Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleDescription("ToyStory")}>
        <Image source={ToyStory} style={styles.image} />
        {selectedMovie === "ToyStory" && (
          <Text style={styles.description}>
            Os brinquedos do quarto de Andy ganham vida quando ele não está por perto. O filme segue Woody,
            um cowboy de brinquedo, e Buzz Lightyear, um astronauta espacial, enquanto eles embarcam em uma
            aventura para voltar para casa depois de serem separados de Andy.
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => toggleDescription("Carros")}>
        <Image source={Carros} style={styles.image} />
        {selectedMovie === "Carros" && (
          <Text style={styles.description}>
            Relâmpago McQueen, uma estrela das corridas de carros, se perde em uma cidadezinha na Rota 66.
            Ele aprende lições importantes sobre amizade e humildade enquanto ajuda os moradores da cidade.
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => toggleDescription("MonstrosSa")}>
        <Image source={MonstrosSa} style={styles.image} />
        {selectedMovie === "MonstrosSa" && (
          <Text style={styles.description}>
            Monstros que vivem em um mundo paralelo ao nosso geram energia assustando crianças humanas.
            Dois monstros, Sulley e Mike, encontram uma criança em seu mundo e precisam levá-la de volta
            antes que isso cause o caos.
          </Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleDescription("Up")}>
        <Image source={Up} style={styles.image} />
        {selectedMovie === "Up" && (
          <Text style={styles.description}>
            Um viúvo idoso chamado Carl Fredricksen realiza seu sonho de aventura ao amarrar balões em sua
            casa e voar para a América do Sul. No entanto, ele acidentalmente leva um jovem explorador com
            ele em uma jornada incrível.
          </Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleDescription("Coco")}>
        <Image source={Coco} style={styles.image} />
        {selectedMovie === "Coco" && (
          <Text style={styles.description}>
            Miguel, um jovem mexicano que aspira a ser músico, acidentalmente entra no mundo dos mortos durante
            o Dia dos Mortos. Ele parte em uma jornada para descobrir a verdade sobre sua família e sua paixão
            pela música.
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => toggleDescription("Wall")}>
        <Image source={Wall} style={styles.image} />
        {selectedMovie === "Wall" && (
          <Text style={styles.description}>
            No futuro, a Terra está coberta de lixo e abandonada pelos humanos. Wall-E, um pequeno robô de limpeza,
            é o último habitante do planeta e descobre uma planta que pode mudar o destino da Terra, desencadeando
            uma série de eventos.
          </Text>
        )}
      </TouchableOpacity>
      <Image source={LogoWhite} style={styles.logoFim} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000220',
  },
  logo: {
    width: 250,
    height: 150,
    alignSelf: 'center',
  },
  image: {
    width: 210,
    height: 270,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 10
  },
  description: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    width: 250,
    alignSelf: 'center',
    marginBottom: 30
  },
  logoFim: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  }
});

export default HomeScreen;
