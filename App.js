import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import Testimonios from './Componentes/Testimonios';

const testimoniosData = [
  {
    nombre: 'Shawn Wang',
    pais: 'Singapur',
    cargo: 'Ingeniero de Software en Amazon',
    texto: 'Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida',
    imagen: require('./Imagenes/chino.png'),
  },
  {
    nombre: 'Sarah Chima',
    pais: 'Nigeria',
    cargo: 'Ingeniera de Software en ChatDesk',
    texto: 'FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble',
    imagen: require('./Imagenes/negra.png'),
  },
  {
    nombre: 'Emma Bostian',
    pais: 'Suecia',
    cargo: 'Ingeniera de Software en Spotify',
    texto: 'Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify',
    imagen: require('./Imagenes/blanca.png'),
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.imagen} source={require('./Imagenes/FreeCodeCamp_logo.png')} accessible={true} accessibilityLabel="Logo de FreeCodeCamp" />
      
      <Text style={styles.tituloText}>
        Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:
      </Text>
      
      <ScrollView contentContainerStyle={styles.scrollView}>
        {testimoniosData.map((testimonio, index) => (
          <Testimonios
            key={index}
            nombre={testimonio.nombre}
            pais={testimonio.pais}
            cargo={testimonio.cargo}
            texto={testimonio.texto}
            imagen={testimonio.imagen}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  imagen: {
    height: 90,
    width: '100%',

  },
  tituloText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  scrollView: {
    paddingBottom: 20,
  },
});
