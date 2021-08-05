import React from 'react'
import { View,Text, } from 'react-native'
import { styles } from './styles'

type Props = {
    title: string;
}

export function LingSignIn({title} : Props){
    return(
        <View>
            <Text style={styles.ling}>{''}</Text>
                <Text >
                {title}
                </Text>
            <Text style={styles.ling}>{''}</Text>
        </View>
    )
}