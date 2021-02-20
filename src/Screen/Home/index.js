import React,{Component} from 'react'
import { Dimensions,View,FlatList} from 'react-native'
import Posts from '../../Components/Posts'
import {fakeServer} from '../../FakeServer/FakeServer'
import {RecyclerListView ,DataProvider,LayoutProvider} from 'recyclerlistview';


class Home extends Component {
   constructor(props) {
       super(props);
       this.state={
           pageNo:0,
           dataProvider:new DataProvider((r1,r2)=>r1!==r2),
           Data:''
       }
      
   }
   layoutProvider=new LayoutProvider((index)=>{
       console.log(index)
        return index;
   },(type,dim)=>{
        dim.width =Dimensions.get('window').height;
        dim.height =Dimensions.get('window').height; 
   });
   rowRenderer=(type,item)=>{
       return(
                <Posts post={item}/>
            )
   }
    fetchData = async (pageNo) =>{
        const Res= await fakeServer(pageNo);
        if(Res==='No Data') return;
        this.setState({
            ...this.state,
            dataProvider:this.state.dataProvider.cloneWithRows([...this.state.Data,...Res]),
            Data:[...this.state.Data,...Res]
        })
    }
    componentDidMount(){
        this.fetchData(this.state.pageNo)
    }
    HandleEndReached=async ()=>{
        await this.fetchData(this.state.pageNo+1)
        this.setState({pageNo:this.state.pageNo+1})
    }
   
    render(){
        return (
            <View style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height}}>
                <RecyclerListView
                dataProvider={this.state.dataProvider}
                layoutProvider={this.layoutProvider}
                rowRenderer={this.rowRenderer}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height}
                snapToAlign={"start"}
                decelerationRate={"fast"}
                onEndReached={this.HandleEndReached}
                onEndReachedThreshold={0.5}
               
                />
            </View>
        )
    }
}

export default Home
