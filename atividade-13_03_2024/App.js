import React from 'react';
import { Text, View, Image, SafeAreaView, ScrollView, StyleSheet, Linking, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

export default function Squirtle() {
  
  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Squirtle</Text>
      </View>

      {/* Conteúdo */}
      <ScrollView style={styles.content}>
        {/* Sessão de informações sobre Squirtle */}
        <View style={styles.section} nativeID="info-squirtle">
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.sectionTitle}>Informações sobre Squirtle</Text>
              <Image style={styles.image} source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' }} />
              <Text>
                Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle.
              </Text>
            </Card.Content>
          </Card>
        </View>
        {/* Sessão de características sobre Squirtle */}
        <View style={styles.section} nativeID="caracteristicas">
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.sectionTitle}>Características</Text>
              <Text>
                Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump.
              </Text>
            </Card.Content>
          </Card>
        </View>
        {/* Sessão de curiosidades sobre Squirtle */}
        <View style={styles.section} nativeID="curiosidades">
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.sectionTitle}>Curiosidades</Text>
              <Text>Squirtle é um dos Pokémon mais populares e adoráveis.</Text>
              <Text>Seu nome deriva das palavras "squirrel" (esquilo) e "turtle" (tartaruga).</Text>
              <Text>Squirtle é frequentemente escolhido por treinadores para começar sua jornada Pokémon.</Text>
            </Card.Content>
          </Card>
        </View>
        {/* Sessão do artigo sobre Squirtle */}
        <View style={styles.section} nativeID="artigo-squirtle">
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.sectionTitle}>Squirtle: O Amigo Aquático</Text>
              <Text>
                Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes.
              </Text>
              <Text>
                Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas.
              </Text>
              <Text>
                Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas.
              </Text>
            </Card.Content>
          </Card>
        </View>
        {/* Sessão de recursos */}
        <View style={styles.section} nativeID="recursos">
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.sectionTitle}>Recursos Adicionais</Text>
              <Text>
                <Text style={styles.link} onPress={() => Linking.openURL("https://www.pokemon.com/br/pokedex/squirtle")}>Pokédex - Squirtle</Text>
              </Text>
              <Text>
                <Text style={styles.link} onPress={() => Linking.openURL("https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)")}>Bulbapedia - Squirtle</Text>
              </Text>
            </Card.Content>
          </Card>
        </View>
        {/* Sessão de evoluções do Squirtle */}
        <View style={styles.section} nativeID="evolucao">
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.sectionTitle}>Evoluções</Text>
              <View style={styles.evolutionContainer}>
                <View style={styles.evolution}>
                  <Image style={styles.evolutionImage} source={{ uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png' }} />
                  <Text>1. Squirtle</Text>
                </View>
                <View style={styles.evolution}>
                  <Image style={styles.evolutionImage} source={{ uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png' }} />
                  <Text>2. Wartortle</Text>
                </View>
                <View style={styles.evolution}>
                  <Image style={styles.evolutionImage} source={{ uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png' }} />
                  <Text>3. Blastoise</Text>
                </View>
              </View>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>

      {/* Rodapé */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Página do Pokémon Squirtle. Todos os direitos reservados.</Text>
        {/* Outros elementos do rodapé */}
        <TouchableOpacity onPress={() => scrollToSection("header")}>
          <Text style={styles.footerText}>Voltar para o topo</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL("mailto:contato@squirtlepage.com")}>
          <Text style={styles.footerText}>Contato via e-mail</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL("tel:+5555555555")}>
          <Text style={styles.footerText}>Telefone: (55) 5555-5555</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

// Estilos
const styles = StyleSheet.create({
  // Definição dos estilos
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    padding: 8,
  },
  header: {
    backgroundColor: '#007bff',
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  link: {
    color: '#4592c4',
  },
  evolutionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  evolution: {
    alignItems: 'center',
  },
  evolutionImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  footer: {
    backgroundColor: '#343a40',
    paddingVertical: 10,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    marginBottom: 5,
  },
  card: {
    backgroundColor: '#f4f4f4',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 10,
  },
});
