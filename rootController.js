
import React,{
  Component,
    Dimensions,
    Image,
    View,
    Platform,
    StyleSheet,
    Text,
} from 'react-native';

let HOME_TAB = 'homeTab';
let HOME_NORMAL = require('./images/home.png');
let HOME_SELECT = require('./images/home_select.png');

let CAR_TAB = 'carTab';
let CAR_NORMAL = require('./images/car.png');
let CAR_SELECT = require('./images/car_select.png');

let ORDER_TAB = 'orderTab';
let ORDER_NORMAL = require('./images/order.png');
let ORDER_SELECT = require('./images/order_select.png');

let ME_TAB = 'meTab';
let ME_NORMAL = require('./images/me.png');
let ME_SELECT = require('./images/me_select.png');

import TabNavigator from 'react-native-tab-navigator';
import Home from './routehome';
import Car from './routecar';
import Order from './routeorder';
import Me from './routeme';


export default class RootController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab:HOME_TAB,
      tabBarShow:true
    };
    console.log('----0----');
  }

  _renderBadge(badgeCount){
    if (!badgeCount) {
        return null;
    }
    return (
      <View>
      </View>
    );
  }

  _renderTabItem(Img,selectImg,tag,title,badgeCount,childView){
    return(
      <TabNavigator.Item
          select={this.state.selected===tag}
          rederIcon={()=><Image style={styles.tabIcon} source={img}/>}
          title={title}
          selectedTitleStyle={styles.selectedTitleStyle}
          renderBadge={()=>this._renderBadge(badgeCount)}
          rederSelectedIcon={()=><Image style={styles.tabIcon} source={selectedImg}/>}
          onPress={()=>this.setState({selectedTab:tag})}>
          {childView}
      </TabNavigator.Item>
    );
  }

  _createChildView(tag){
    let renderView;
    switch (tag) {
      case HOME_TAB:
        renderView = <Home/>;
        break;
      case CAR_TAB:
        renderView = <Car/>;
        break;
      case ORDER_TAB:
        renderView = <Order/>;
        break;
      case ME_TAB:
        renderView = <Me/>;
        break;
      default:
    }
    return (<View style={styles.container}>{renderView}</View>)
  }

  componentWillMount() {
          console.log("3.FramePage-componentWillMount()");
      }

  render(){
    console.log("4.FramePage-render");
    let {tabBarShow} = this.state;
    console.log(tabBarShow);
    return(
      <View style={styles.container}>
        <TabNavigator
        hidesTabTouch={false}
        sceneStyle={{paddingBottom:0}}
        tabBarStyle={tabBarShow ? styles.tabNav : styles.tabNavHide}>
        {this._renderTabItem(HOME_NORMAL,HOME_SELECT,HOME_TAB,'首页',0,this._createChildView(HOME_TAB))}
        {this._renderTabItem(CAR_NORMAL,CAR_SELECT,CAR_TAB,'分类',0,this._createChildView(CAR_TAB))}
        {this._renderTabItem(CAR_NORMAL,CAR_SELECT,CAR_TAB,'购物车',0,this._createChildView(CAR_TAB))}
        {this._renderTabItem(ORDER_NORMAL,ORDER_SELECT,ORDER_TAB,'订单',0,this._createChildView(ORDER_TAB))}
        {this._renderTabItem(ME_NORMAL,ME_SELECT,ME_TAB,'我',0,this._createChildView(ME_TAB))}
        </TabNavigator>
      </View>
    )
  }

  componentDidMount() {
        console.log("5.FramePage-componentDidMount()");
    }

    componentWillReceiveProps() {
        console.log("6.FramePage-componentWillReceiveProps()");
    }

    shouldComponentUpdate() {
        console.log("7.FramePage-shouldComponentUpdate()");
        return false;
    }

    componentWillUpdate() {
        console.log("8.FramePage-componentWillUpdate");
    }

    componentDidUpdate() {
        console.log("9.FramePage-componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("10.FramePage-componentWillUnmount");
        //tabBarHidden = true;
    }
}


const styles = StyleSheet.create({
  container:{
    flex:1
  },
  tabNav:{
    height:60,
    backgroundColor:'#FFF',
    alignItems:'center',
    borderTopWidth:0.5,
    borderTopColor:'#E8E8E8'
  },
  tabNavHide: {
        position: 'absolute',
        top: Dimensions.get('window').height,
        height: 0
    },
    selectedTitleStyle: {
        color: '#FF0000'
    },
    badgeBg: {
        width: 14,
        height: 14,
        marginTop: 6
    },
    badgeText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 10,
        backgroundColor: Platform.OS === 'android' ? null : 'transparent'
    },
    tabIcon: {
        height: 30,
        width: 30,
        resizeMode: 'cover'
    }
});
