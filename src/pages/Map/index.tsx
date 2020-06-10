import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import MapView, { Marker, Point } from 'react-native-maps'
// import { Container } from './styles';
import Constants from 'expo-constants'
import { Entypo, AntDesign, FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';

import * as Location from 'expo-location'
import api from '../../services/api'
import styleMap from './stylesMap'

interface Points {
  id: number;
  city: string;
  uf: string;
  name: string;
  latitude: number;
  longitude: number;
  phone: number;
}

const Map: React.FC = () => {
  const navigation = useNavigation()
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0,0])
  const [data, setData] = useState<Points[]>([]);
  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestPermissionsAsync();
      if(status != 'granted'){
        return;
      }
      const location = await Location.getCurrentPositionAsync();
      const {latitude, longitude} = location.coords;
      setInitialPosition([
        latitude,
        longitude
      ])
    }
    loadPosition()
  }, []);

  useEffect(() =>{
      async function loadPoint(){
               const response = await api.get('point');
               setData(response.data)
               console.log(response.data)
         }
         loadPoint()
         
  },[])



  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("Home")}>
          <AntDesign name="arrowleft" size={25} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.searchText}>Posto de saúde</Text>

        <FontAwesome5 name="hospital-alt" size={27} color="#6272a4" />
      </View>
      {
         initialPosition[0] !== 0 &&
         <MapView style={styles.map}
         customMapStyle={styleMap}
         initialRegion={{
           latitude: initialPosition[0],
           longitude: initialPosition[1],
           longitudeDelta: 0.014,
           latitudeDelta: 0.014,
         }}>
 
         <Marker
           style={styles.mapMarker}
           coordinate={{
             latitude: initialPosition[0],
             longitude: initialPosition[1]
           }}
         >
           <Entypo name="location-pin" size={60} color="#6272a4" />
 
         </Marker>
 
         {
           data.map(item =>(
            <Marker
            key={String(item.id)}
            style={styles.mapMarker}
            coordinate={{
              latitude: Number(item.latitude),
              longitude: Number(item.longitude)
            }}
          >
            <Entypo name="location-pin" size={45} color="#1fcb70" />
  
          </Marker>
           ))
         }
 
       </MapView>
      }
     
    </View>
  );
}

export default Map;


const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  
  },
  container: {
    flex: 1,
    backgroundColor: '#282a36',
    paddingTop: Constants.statusBarHeight,
    alignItems: "center"

  },
  search: {
    position: "absolute",
    backgroundColor: '#343746',
    height: 50,
    width: '90%',
    top: 45,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 5,
    borderRadius: 30,
    padding: 15
  },
  searchText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff'
  },
  mapMarker: {

  },
  mapMarkerContainer: {

  },
  mapMarkerTitle: {

  }
})