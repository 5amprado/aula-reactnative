
import { Pressable, Linking, StatusBar, Image, StyleSheet, Text, View, SafeAreaView } from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const urlToMyGithub = 'https://github.com/Sam0Prado';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/82275077?v=4';

export default function App() {

  const goToGithub = async () => {
    const res = await Linking.canOpenURL(urlToMyGithub);
    if(res){
      await Linking.openURL(urlToMyGithub);
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content"/>
      <View style={styles.container}>
        <Image accessibilityLabel='foto de perfil'
        style={styles.avatar} source={{uri: imageProfileGithub}}/>

        <Text style={[styles.texto, styles.name]}
        accessibilityLabel='nome: sam prado'>Sam Prado</Text>

        <Text accessibilityLabel='nick: Sam0prado' style={[styles.texto, styles.nickname]}> Sam0Prado </Text>

        <Text accessibilityLabel='descrição'
        style={[styles.texto, styles.description]}>dev under construction</Text>

        <Pressable onPress={goToGithub}>
          <View style={styles.button}>
            <Text style={[styles.texto, styles.textButton]}>Open in Github</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //expande para tela inteira
    backgroundColor: colorGithub,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },

  texto: {
    color: colorFontGithub
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGithub,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
