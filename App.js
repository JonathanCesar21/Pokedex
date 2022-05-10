import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App() {
  

    const [ pokemons, setPokemons ] = useState([]);

    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        setPokemons(data.results)
      })
      
    }, [])
  
    
    return (
      <View>
        <Text>Pokedex</Text>
        <View>
         <FlatList
            horizontal={false}
            data={pokemons}
            keyExtractor={(pokemon) => pokemon.name}
            renderItem={PokemonCards}
            numColumns={3}
         />
        </View>
      </View>
    )
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function PokemonCards(item){

  //acessa o 'name' dentro do ITEM do OBJETO
  const {name} = item.item
  
  const {index} = item

  const num = index + 1;

  return(
    <View>
      <Text>{index + 1}</Text>
      <Image source={{uri:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ num + '.png'}}
      style={{width: 100, height: 100, resizeMode: 'cover', margin: 15,}}
      ></Image>
      <Text>{name}</Text>
    </View>
  )
}
