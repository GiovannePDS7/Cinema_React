import React, { useState } from "react";
import { Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

import BelaFera from "../../assets/imgs/filmes2/belaFera.jpg";
import BrancaDeNeve from "../../assets/imgs/filmes2/brancaDeNeve.png";
import Cinderela from "../../assets/imgs/filmes2/cinderela.jpg";
import Enrolados from "../../assets/imgs/filmes2/Enrolados.jpg"
import Frozen from "../../assets/imgs/filmes2/frozen.jpg"
import PequenaSereia from "../../assets/imgs/filmes2/PequenaSereia.jpg"
import PrincesaSapo from "../../assets/imgs/filmes2/princesaSapo.jpg"
import Valente from "../../assets/imgs/filmes2/Valente.jpg"
import LogoWhite from "../../assets/imgs/logos/Logo2.png"

const HomeScreen2 = ({navigation}) => {
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
      <TouchableOpacity onPress={() => toggleDescription("BelaFera")}>
        <Image source={BelaFera} style={styles.image} />
        {selectedMovie === "BelaFera" && (
          <Text style={styles.description}>
            Uma jovem chamada Belle se voluntaria para ser prisioneira no castelo de uma Fera amaldiçoada
            para salvar seu pai. Ela logo descobre que por trás da aparência assustadora da Fera, existe
            um príncipe amaldiçoado. Com o tempo, Belle e a Fera desenvolvem um relacionamento especial,
            que pode ser a chave para quebrar o feitiço.
          </Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleDescription("Frozen")}>
        <Image source={Frozen} style={styles.image} />
        {selectedMovie === "Frozen" && (
          <Text style={styles.description}>
            Elsa, a Rainha da Neve, acidentalmente cobre seu reino em um inverno eterno com seus poderes de gelo.
            Sua irmã Anna se une a um aventureiro chamado Kristoff, uma rena chamada Sven e um boneco de neve mágico
            chamado Olaf para desfazer o feitiço e reconciliar a família.
          </Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleDescription("Cinderela")}>
        <Image source={Cinderela} style={styles.image} />
        {selectedMovie === "Cinderela" && (
          <Text style={styles.description}>
            Cinderela é uma jovem maltratada por sua madrasta e suas meias-irmãs. Com a ajuda de sua fada madrinha,
            ela tem a chance de participar do baile real, onde conhece o príncipe encantado. No entanto, ela deve sair
            antes da meia-noite, quando a magia desaparece.
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => toggleDescription("Enrolados ")}>
        <Image source={Enrolados} style={styles.image} />
        {selectedMovie === "Enrolados " && (
          <Text style={styles.description}>
            Rapunzel, uma jovem com cabelos mágicos que a mantiveram trancada em uma torre por toda a sua vida,
            decide fugir com a ajuda de um ladrão chamado Flynn Rider. Juntos, eles embarcam em uma aventura para
            descobrir o segredo de seus cabelos e encontrar seu verdadeiro lar.
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => toggleDescription("Valente ")}>
        <Image source={Valente} style={styles.image} />
        {selectedMovie === "Valente " && (
          <Text style={styles.description}>
            Mérida, uma arqueira habilidosa e princesa escocesa, desafia as tradições de seu reino e acidentalmente
            lança uma maldição. Ela deve lutar contra as adversidades e consertar o erro que cometeu, aprendendo sobre coragem,
            família e amor ao longo do caminho.
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => toggleDescription("BrancaDeNeve")}>
        <Image source={BrancaDeNeve} style={styles.image} />
        {selectedMovie === "BrancaDeNeve" && (
          <Text style={styles.description}>
            Branca de Neve é perseguida por sua madrasta, a Rainha Má, e encontra refúgio com sete anões. Com a ajuda de seus amigos,
            ela enfrenta a malvada rainha para encontrar seu verdadeiro amor e viver feliz para sempre.
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => toggleDescription("PequenaSereia")}>
        <Image source={PequenaSereia} style={styles.image} />
        {selectedMovie === "PequenaSereia" && (
          <Text style={styles.description}>
            Ariel, uma sereia curiosa, sonha em viver na terra e se apaixona por um príncipe humano. Ela faz um acordo com a bruxa
            do mar para se tornar humana, mas isso coloca seu reino submarino em perigo.
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => toggleDescription("PrincesaSapo")}>
        <Image source={PrincesaSapo} style={styles.image} />
        {selectedMovie === "PrincesaSapo" && (
          <Text style={styles.description}>
            Tiana, uma jovem trabalhadora e ambiciosa de Nova Orleans, se transforma em uma sapa depois de um beijo inesperado.
            Ela embarca em uma jornada com um príncipe sapo para reverter o feitiço e descobre o verdadeiro significado de amor e ambição ao longo do caminho.
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

export default HomeScreen2;
