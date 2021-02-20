import React,{useState} from 'react'
import { Text, View,StyleSheet, Dimensions, TouchableWithoutFeedback,Image } from 'react-native';
import Video from 'react-native-video';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



const Posts = ({post}) => {
    const [isPaused,setIsPaused]=useState(false);
    const handlePress = () =>{
        console.log('pressED');
        setIsPaused(!isPaused); 
    }
    return (
        <View style={style.container} >
            <TouchableWithoutFeedback onPress={handlePress}>
            <View>
                <Video
                source={{uri:post.videoUri}}
                style={style.video}
                resizeMode="cover"
                onError={(e)=>console.log(e)}
                repeat={true}
                paused={isPaused}
                onViewportEnter={() => console.log("entered")}
                onViewportLeave={() => console.log("left")}
                />
            
            <View style={style.bottomContainer}>
                <View style={style.rightArea} >
                    <View style={style.profilePictureContainer}>
                        <Image style={style.profilePicture} source={{uri:post.user.profilePicture}}/>
                    </View>
                    <View style={style.iconContainer}>
                        <AntDesign name={'heart'} size={38} color='white'/>
                        <Text style={style.count}>{post.likeCount}</Text>
                    </View>
                    <View style={style.iconContainer}>
                        <FontAwesome name={'commenting'} size={38} color='white'/>
                        <Text style={style.count}>{post.commentCount}</Text>
                    </View>
                    <View style={style.iconContainer}>
                        <MaterialCommunityIcons name={'share'} size={40} color='white'/>
                        <Text style={style.count}>{post.shareCount}</Text>
                    </View>
                </View>
                <View style={style.bottomArea}>
                    <View>
                        <Text style={style.name}>@{post.user.username}</Text>
                        <Text style={style.description}>{post.description}</Text>
                            <View style={style.songRow}>
                                {/*icon*/}
                                <Entypo name={'beamed-note'} size={24} color='white'/>
                                {/*name*/}
                                <Text style={style.songName}>{post.songName}</Text>
                            </View>
                    </View>
                    <Image style={style.songPic} source={{uri:post.songPic}}/>
                </View>
            </View>
            </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const style =StyleSheet.create({
    container:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height-18 ,
    },
    video:{
        position:'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0,
    },
    bottomContainer:{
        height:'100%',
        justifyContent:'flex-end',
    },
    bottomArea:{
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'flex-end'
    },
    name:{
        color:'white',
        fontSize:16,
        fontWeight:'700',
        marginBottom:5
    },
    description:{
        color:'white',
        fontSize:13,
        fontWeight:'300',
        marginBottom:8
    },
    songRow:{
        flexDirection:'row',
        alignItems:'center'
    },
    songName:{
        color:'white',
        fontSize:16,
        marginLeft:5
    },
    rightArea:{
        alignSelf:'flex-end',
        height:300,
        justifyContent: 'space-between',
        marginRight:5
    },
    profilePictureContainer:{
        borderRadius:500,
        width:50,
        height:50
    },
    profilePicture:{
        width:50,
        height:50,
        borderRadius:25,
        borderWidth:2,
        borderColor:'white'
    },
    count:{
        color:'white',
        fontSize:16,
        fontWeight:'500',
        marginTop:1
    },
    iconContainer:{
        alignItems:'center'
    },
    videoPlayButton:{
        position:'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0,
    },
    songPic:{
        width:45,
        height:45,
        borderRadius:25,
        borderWidth:3,
        borderColor:'#4c4c4c'
    }
})

export default Posts
