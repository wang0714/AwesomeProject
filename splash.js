/**
 * Created by kenny on 16/3/4.
 */
'use strict';

import React,{
    Component,
    StyleSheet,
    Image,
} from 'react-native';

import FramePage from './rootController';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        var {navigator} = props;
        setTimeout(()=> {
            navigator.replace({name: 'FramePage', component: FramePage})
        }, 1000);
    }

    render() {
        return (
            <Image source={require('./images/LaunchImage.png')} style={styles.backgroundImage}/>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 414,
        height: 735,
        resizeMode: 'cover'
    }
});
