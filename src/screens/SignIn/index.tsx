import React from 'react'
import { 
  View, 
  Text, 
  Image,
  StatusBar // personalizar barra de status
 } from 'react-native'

 import { ButtonIcon } from '../../components/ButtonIcon';
 import { LingSignIn } from '../../components/LingSignIn/LingSignIn';


 import backgroundImg from '../../assets/backgroundImg.png';
  import { styles } from './styles'

export function SignIn() {

  return(
    <View style={styles.container}>
      <StatusBar barStyle="light-content" // white
      backgroundColor="transparent" 
      translucent // fazer o conteudo colar em cima e deixar a barra de status
      // sobre o app {{ Importante }}
      />
      
      <Image 
      style={styles.image}
      source={backgroundImg} />

      <View  style={styles.content}>
        <Text style={styles.title}>
          
         Venha ser um {`\n`} {/*dar quebra de linha*/}
         programador {`\n`}
         de sucesso
        </Text>

        <Text style={styles.subTitle}>
        90% do sucesso se baseia em {`\n`}
          NUNCA DESISTIR ! {`\n`}
        </Text>


        <LingSignIn title='Acredite no seu potencial' />

        <ButtonIcon 
        title="Acessar"
        activeOpacity={0.7}
        />
        
        <ButtonIcon 
        title="Criar conta"
        activeOpacity={0.7}
        />

      </View>
    </View>
  )
}