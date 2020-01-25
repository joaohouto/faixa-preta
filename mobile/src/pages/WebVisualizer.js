import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { Icon } from 'react-native-elements';

export default class WebVisualizer extends Component {

  state = {
    url: "http://google.com/"
  }

  componentDidMount() {
    //Get url
    const { navigation } = this.props;  
    var url = JSON.stringify(navigation.getParam('url', '0'));
    url = url.substring(1, (url.length - 1));// remove the ""

    this.setState({ url: url });
  }

  render() {

    return (
      <WebView
        ref={(ref) => { this.webview = ref; }}
        source={{ uri: this.state.url }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        renderLoading={this.ActivityIndicatorLoadingView}
        startInLoadingState={true}
      />
    );
  }
}

const styles = StyleSheet.create({
 
});
	
