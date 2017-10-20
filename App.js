/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


/**----------- 第一个示例程序 ---------**/
export class App1 extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.innerViewstyle1}>
          <Text> 
          这个是里边的第一个 view 中的 Text 
          </Text>
        </View>

        <View>
          <Text style = {styles.innerViewstyle2}>
          这个是里边的第二个 view 中的 Text 
          </Text>
        </View>
      <View>
        <Text style = {{backgroundColor : 'yellow', width: 60}}>
          这个是里边的第三个 view 中的 Text 
        </Text>
      </View>

      <View>
        <Text style = {styles.innerViewstyle1}>
          这个是里边的第四个 view 中的 Text 
        </Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:40,
    backgroundColor : 'red',
    width : 320,
    height : 480,
    
    // - 设置主轴方向  row, column 
    flexDirection : 'row',

    // - 设置主轴的对其方式 flex-start, flex-end, center, space-between, space-around
    justifyContent:'space-between',

    // - 设置侧抽的对其方式 flex-start, flex-end, center, stretch
    alignItems : 'flex-start',
  },

  innerViewstyle1:{
    width : 40,
    height : 150,
    backgroundColor : 'green',
  },

  innerViewstyle2:{
    height : 60,
    width : 50,
    backgroundColor : 'blue',
  },
});


/**----------- 第二个示例程序 ---------**/
export class App2 extends Component<{}> {
  render() {
    return (
      <View style={style2.container}>
        <View style = {style2.innerViewStyleAPP_2_1}>
          <Text> 
          这个是里边的第一个 view 中的 Text 
          </Text>
        </View>

        <View>
          <Text style = {style2.innerViewStyleAPP_2_2}>
          这个是里边的第二个 view 中的 Text 
          </Text>
        </View>
      <View>
        <Text style = {{backgroundColor : 'orange', width: 100}}>
          这个是里边的第三个 view 中的 Text 
        </Text>
      </View>

      <View>
        <Text style = {style2.innerViewStyleAPP_2_3}>
          这个是里边的第四个 view 中的 Text 
        </Text>
      </View>
      </View>
    );
  }
}

const style2 = StyleSheet.create({

  container : {
    backgroundColor : 'purple',
    marginTop : 20,

    // - 设置主轴方向  row, column 
    flexDirection : 'row',

    // - 设置主轴的对其方式 flex-start, flex-end, center, space-between, space-around
    justifyContent : 'flex-start',

    // - 设置侧抽的对其方式 flex-start, flex-end, center, stretch
    alignItems : 'center',

    // - 一行显示不下面 换一行的设置 wrap, nowrap, 
    flexWrap : 'nowrap',

  },

  innerViewStyleAPP_2_1:{
    width : 100,
    height : 150,
    backgroundColor : 'green',
  },

  innerViewStyleAPP_2_2:{
    height : 100,
    width : 50,
    backgroundColor : 'blue',
  },

  innerViewStyleAPP_2_3 :{
    backgroundColor : 'yellow',
    width : 100,
  },

})

/**----------- 第三个示例程序 ---------**/
export class App3 extends Component<{}> {
  render() {
    return (
      <View style={style3.container}>
        <View style = {style3.innerViewStyleAPP_3_1}>
          <Text> 
          第一个
          </Text>
        </View>

        <View style = {style3.innerViewStyleAPP_3_2}>
          <Text >
          第二个
          </Text>
        </View>
      <View style =  {{backgroundColor : 'blue',  flex : 3, height : 80 , 
    alignSelf : 'flex-end'}}>
        <Text>
          第三个
        </Text>
      </View>

      <View style = {style3.innerViewStyleAPP_3_3}>
        <Text>
          第四个
        </Text>
      </View>
      </View>
    );
  }
}

const style3 = StyleSheet.create({
  container : {
    backgroundColor : 'purple',
    marginTop : 20,

    // - 设置主轴方向  row, column 
    flexDirection : 'row',

    // - 设置主轴的对其方式 flex-start, flex-end, center, space-between, space-around
    justifyContent : 'flex-start',

    // - 设置侧抽的对其方式 flex-start, flex-end, center, stretch
    alignItems : 'center',
  },

  innerViewStyleAPP_3_1:{
    backgroundColor : 'red',

    height : 60,

    // - flex (设置子 view 所占宽度的百分比) 当前这个 view 的宽度 = 当前view的flex/ 将父view的所有flex加在一起
    flex : 1,

    // - 设置这个子view与其他的子view的不同的对其方式 flex-start, flex-end, center, stretch
    alignSelf : 'flex-start',
  },

  innerViewStyleAPP_3_2:{
    backgroundColor : 'green',

    height : 70,

    flex : 2,
  },

  innerViewStyleAPP_3_3 :{
    backgroundColor : 'yellow',

    height : 90,

    flex : 4,
  },
})


/**----------- 第四个示例程序 ---------**/

// - 引入其他模块
var Dimensions = require('Dimensions');

export default class App4 extends Component<{}> {
  render() {
    return (
      <View style={style4.container}>
        <View style = {style4.innerViewStyleAPP_3_1}>
          <Text> 
          当前屏幕的宽是 : {Dimensions.get('window').width}
          </Text>
          <Text>
          当前屏幕的高是 : {Dimensions.get('window').height}
          </Text>
          <Text>
          当前屏幕的分辨率是 : {Dimensions.get('window').scale}
          </Text>
        </View>
      </View>
    );
  }
}

const style4 = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : 'purple',
    marginTop : 20,

    // - 设置主轴方向  row, column 
    flexDirection : 'row',

    // - 设置主轴的对其方式 flex-start, flex-end, center, space-between, space-around
    justifyContent : 'flex-start',

    // - 设置侧抽的对其方式 flex-start, flex-end, center, stretch
    alignItems : 'center',
  },

  innerViewStyleAPP_3_1:{

    backgroundColor : 'red',

    // - flex (设置子 view 所占宽度的百分比) 当前这个 view 的宽度 = 当前view的flex/ 将父view的所有flex加在一起
    flex : 1,

    justifyContent : 'center',

    alignItems : 'center',
  },
})