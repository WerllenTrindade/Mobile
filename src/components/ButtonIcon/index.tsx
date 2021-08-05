import React from 'react'
import {
    Text,
    TouchableOpacity, //elemento de click
    TouchableOpacityProps, // para dar o TouchableOpacity na tipagem
} from 'react-native'

import { styles } from './styles';

// dar uma tipagem e criar uma prop para o button
// para futuramente poder mudar o texto nele pela prop
// forma de invocar por parametro {title} : Props
type Props = TouchableOpacityProps & {
    title: string;
}

export function ButtonIcon({title, ...rest} : Props){
    return(
    <TouchableOpacity 
    style={styles.container}
    {...rest } // deixar o click suave com opacity
    >
        <Text style={styles.title}>
            {title}
        </Text>
    </TouchableOpacity>
    )
}