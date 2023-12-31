import { createErrorHandler } from "expo/build/errors/ExpoErrorManager";
import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function List(props){

    function carregaIcone(likeada){
        return likeada ? require('../img/likeada.png') : require('../img/like.png');
    }

    function mostraLikes(likers){
        if(likers === 0){
            return;
        }

        return(
            <Text style={styles.likes}>{likers} {likers > 1 ? 'Like' : 'Likes' }</Text>
        );
    }

    return(
        <View>
            <View style={styles.viewPerfil}>
                <Image
                source={{uri: props.data.imgperfil}}
                style={styles.fotoPerfil}
                />
                <Text style={styles.nomeUsuario}>{props.data.nome}</Text>
            </View>

            <Image
            resizeMode="cover"
            source={{uri: props.data.imgPublicacao}}
            style={styles.fotoPublicacao}
            />

            <View style={styles.areaBtn}>
                <TouchableOpacity>
                    <Image
                    source={carregaIcone(props.data.likeada)}
                    style={styles.iconeLike}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnsend}>
                    <Image
                    source={require('../img/comment.png')}
                    style={styles.iconeLike}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnsend}>
                    <Image
                    source={require('../img/send.png')}
                    style={styles.iconeLike}
                    />
                </TouchableOpacity>
            </View>

            {mostraLikes(props.data.likers)}

            <Text style={styles.nomeRodape}>{props.data.nome}</Text>
            <Text style={styles.descRodape}>{props.data.descricao}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    viewPerfil:{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8,
    },
    fotoPerfil:{
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    nomeUsuario:{
        paddingLeft: 10,
        fontSize: 18,
        color: '#000'
    },
    fotoPublicacao:{
        height: 400,
        alignItems: 'center'
    },
    areaBtn:{
        flexDirection: 'row',
        padding: 5,
    },
    iconeLike:{
        width: 25,
        height: 25
    },
    btnsend:{
        paddingLeft: 6
    },
    likes:{
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 8
    },
    nomeRodape:{
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 8
    },
    descRodape:{
        paddingLeft: 8,
        paddingBottom: 10,
    }
})