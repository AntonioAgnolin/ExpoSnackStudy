import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Linking,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Card from '../components/Card';
import PokemonImage from '../components/PokemonImage';
import { Pokemon } from '../types/pokemon';
import Squirtle1 from './Squirtle1';
import Wartortle2 from './Wartortle2';
import Blastoise3 from './Blastoise3';

const Squirtle = () => {
  const [squirtleData, setSquirtleData] = React.useState<Pokemon | null>(null);
  const [loading, setLoading] = React.useState(true);

  const fetchSquirtleData = async () => {
    try {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon/squirtle/'
      );
      const data = await response.json();
      setSquirtleData(data);
    } catch (error) {
      console.error('Erro ao buscar dados do Squirtle:', error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchSquirtleData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        <Card title="Informações sobre Squirtle" style={styles.info}>
          <>
            {loading && (
              <View>
                <ActivityIndicator size="large" color="#007bff" />
              </View>
            )}
            {squirtleData && (
              <>
                <PokemonImage uri={squirtleData.sprites.front_default} />
                <Text>{`Squirtle é um Pokémon do tipo ${squirtleData.types[0].type.name}.`}</Text>
                <Text>É o Pokémon inicial da região de Kanto e evolui para Wartortle.</Text>
              </>
            )}
          </>
        </Card>

        <Card title="Características">
          <Text>
            Squirtle é conhecido por sua concha nas costas, que oferece proteção
            adicional. Ele possui ataques de água poderosos, como Water Gun e
            Hydro Pump.
          </Text>
        </Card>

        <Card title="Curiosidades">
          <Text>• Squirtle é um dos Pokémon mais populares e adoráveis.</Text>
          <Text>
            • Seu nome deriva das palavras "squirrel" (esquilo) e "turtle"
            (tartaruga).
          </Text>
          <Text>
            • Squirtle é frequentemente escolhido por treinadores para começar
            sua jornada Pokémon.
          </Text>
        </Card>

        <Card title="Squirtle: O Amigo Aquático">
          <Text>
            Squirtle, com sua aparência simpática e sua habilidade em controlar
            a água, conquistou o coração de treinadores Pokémon ao redor do
            mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma
            escolha popular para aqueles que buscam equilíbrio e versatilidade
            em suas equipes.
          </Text>
          <Text>
            Sua concha nas costas não apenas oferece proteção, mas também é um
            símbolo de resistência. Ao evoluir para Wartortle e, posteriormente,
            para Blastoise, Squirtle se transforma em uma força formidável,
            dominando ataques aquáticos que podem surpreender adversários em
            batalhas.
          </Text>
          <Text>
            Além de suas habilidades de batalha, Squirtle é conhecido por seu
            carisma. Treinadores muitas vezes descrevem a relação com seu
            Squirtle como uma amizade profunda, tornando-o não apenas um
            companheiro de lutas, mas um amigo leal ao longo de suas jornadas.
          </Text>
        </Card>

        <Card title="Recursos Adicionais">
          <Text>
            •{' '}
            <Text
              style={styles.link}
              onPress={async () =>
                await Linking.openURL(
                  'https://www.pokemon.com/br/pokedex/squirtle'
                )
              }>
              Pokédex - Squirtle
            </Text>
          </Text>
          <Text>
            •{' '}
            <Text
              style={styles.link}
              onPress={async () =>
                await Linking.openURL(
                  'https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)'
                )
              }>
              Bulbapedia - Squirtle
            </Text>
          </Text>
        </Card>

        <Card title="Evolução" style={[styles.section, styles.evolution]}>
          <View style={styles.evolutionImages}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Squirtle1')
              }>
              <PokemonImage uri="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png" />
              <Text style={styles.evolutionDescription}>1. Squirtle</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Wartortle2')
              }>
              <PokemonImage uri="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png" />
              <Text style={styles.evolutionDescription}>2. Wartortle</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Blastoise3')
              }>
              <PokemonImage uri="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png" />
              <Text style={styles.evolutionDescription}>3. Blastoise</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>

      <View style={styles.footer}>
        <Text>
          <Text
            style={styles.link}
            onPress={async () =>
              await Linking.openURL('mailto:contato@squirtlepage.com')
            }>
            Contato via e-mail
          </Text>
        </Text>
        <Text>
          <Text
            style={styles.link}
            onPress={async () => await Linking.openURL('tel:+123456789')}>
            Telefone: (55) 5555-5555
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'lightgrey',
  },
  main: {
    width: '80%',
    marginLeft: '10%',
  },
  info: {
    alignItems: 'center',
    borderTopStartRadius: 0,
    borderTopEndRadius: 0,
  },
  link: {
    color: '#4592c4',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  section: {
    backgroundColor: '#f4f4f4',
    marginBottom: 20,
    padding: 20,
    borderRadius: 5,
  },
  evolution: {
    alignItems: 'center',
  },
  evolutionImages: {
    justifyContent: 'space-around',
  },
  evolutionDescription: {
    textAlign: 'center',
    fontWeight: '700',
  },
  footer: {
    backgroundColor: '#343a40',
    color: '#fff',
    padding: 20,
    alignItems: 'center',
  },
});

export default Squirtle;