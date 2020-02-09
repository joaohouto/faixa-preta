import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions, Linking } from 'react-native';
import { Icon } from 'react-native-elements'

import * as rssParser from 'react-native-rss-parser';

export default class Activity extends Component {

  state = {
    wkfPosts: [],
    fkmsPosts: [], 
    cbkPosts: []
  }

  componentDidMount() {
    this.loadPostsFKMS();
    this.loadPostsCBK();
    this.loadPostsWKF();
  }

  loadPostsFKMS = async () => {
    var feedPosts = [];

    return fetch('http://fetchrss.com/rss/5e3f443f8a93f8dc158b45675e3f43d48a93f895118b4567.xml')
      .then(response => response.text())
      .then(responseData => rssParser.parse(responseData))
      .then(rss => {
                
        rss.items.forEach(item => {
            if(feedPosts.length <= 5){
                feedPosts.push({ item }) 
            }
        });
        
        this.setState({ postFKMS: feedPosts });
        console.log(feedPosts);

      });
  }

  loadPostsCBK = async () => {
    var feedPosts = [];

    return fetch('https://cbkarate.blogspot.com/feeds/posts/default')
      .then(response => response.text())
      .then(responseData => rssParser.parse(responseData))
      .then(rss => {
                
        rss.items.forEach(item => {
            if(feedPosts.length <= 5){
                feedPosts.push({ id: item.url, title: item.title, link: item.url, date: item.published }) 
            }
        });
        
        this.setState({ cbkPosts: feedPosts });

      });
  }

  loadPostsWKF = async () => {
    var feedPosts = [];

    return fetch('https://www.youtube.com/feeds/videos.xml?user=WKFKarateWorldChamps')
      .then(response => response.text())
      .then(responseData => rssParser.parse(responseData))
      .then(rss => {
                
        rss.items.forEach(item => {
            if(feedPosts.length <= 3){
                feedPosts.push({ item }) 
            }
        });
        
        this.setState({ wkfPosts: feedPosts });
      });
  }
  render() {

    const { cbkPosts } = this.state;
    const { wkfPosts } = this.state;
    const { fkmsPosts } = this.state;

    return (
      <ScrollView style={styles.container}>
          <View style={styles.header}>
            
            <View style={styles.headerBox}>
              <Text style={styles.headerText}>Notícias</Text>
              <View style={styles.categoryBox}>
                <Text style={styles.headerLabel}>WKF</Text>
                <Text style={styles.headerLabel}>CBK</Text>
                <Text style={styles.headerLabel}>FKMS</Text>
              </View>
            </View>

          </View>
          <View style={styles.content}>
            
            <Text style={styles.label}>WFK</Text>

              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.carousel}>

                {wkfPosts.map(post => (
                  <TouchableOpacity onPress={() => Linking.openURL("https://www.youtube.com/watch?v=" + post.item.id.replace('yt:video:', ''))} key={post.item.id} style={styles.carouselItem}>
                    <View style={styles.carouselItemIcon}>
                      <Icon name='youtube' type='material-community' size={25} color='#fff' />
                    </View>
                    
                    <Text style={styles.carouselDate}>{post.item.published.slice(0, -15)}</Text>
                    <Text style={styles.carouselTitle}>{post.item.title}</Text>

                    <Image style={styles.carouselImage} source={{ uri: "https://img.youtube.com/vi/"+ post.item.id.replace('yt:video:', '') +"/0.jpg" }} />
                  </TouchableOpacity>
                ))}          

                <View style={{ height: 150, display: 'flex', justifyContent: 'center' }}>
                  <TouchableOpacity onPress={() => Linking.openURL("https://www.youtube.com/user/WKFKarateWorldChamps")} style={styles.plusDot} />
                </View>

              </ScrollView>

              <Text style={styles.label}>FKMS</Text>

              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.carousel}>

                {fkmsPosts.map(post => (
                  <TouchableOpacity onPress={() => Linking.openURL("")} key={post.item.id} style={styles.carouselItem}>
                    <View style={styles.carouselItemIcon}>
                      <Icon name='youtube' type='material-community' size={25} color='#fff' />
                    </View>
                    
                    <Text style={styles.carouselDate}>{post.item.published.slice(0, -15)}</Text>
                    <Text style={styles.carouselTitle}>{post.item.title}</Text>

                    <Image style={styles.carouselImage} source={{ uri: "https://img.youtube.com/vi/"+ post.item.id.replace('yt:video:', '') +"/0.jpg" }} />
                  </TouchableOpacity>
                ))}          

                <View style={{ height: 150, display: 'flex', justifyContent: 'center' }}>
                  <TouchableOpacity onPress={() => Linking.openURL("https://www.youtube.com/user/WKFKarateWorldChamps")} style={styles.plusDot} />
                </View>

              </ScrollView>

              <Text style={styles.label}>CBK</Text>

              <View>
                {cbkPosts.map(post => (
                  <TouchableOpacity onPress={() => Linking.openURL(post.url)} style={styles.postItem}>
                    <Icon name='link' type='material-community' size={20} color='#ccc' />
                    <Text style={styles.postItemTitle}>{post.title}</Text>
                  </TouchableOpacity>
                ))}

                <View style={{ height: 150, display: 'flex', alignItems: 'center' }}>
                  <TouchableOpacity onPress={() => Linking.openURL("https://cbkarate.blogspot.com/")} style={styles.plusDot} />
                </View>
              </View>

          </View>
      </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#111',
    },

    header: {
      height: 150,
    },

    headerBox: {
      position: 'absolute',
      bottom: 0,
      padding: 25
    },

    headerText: {
      color: "#fff",
      fontSize: 40,
      marginBottom: 10
    },

    categoryBox: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start'
    },

    headerLabel: {
      fontSize: 14,
      color: '#b3b3b3',
      backgroundColor: '#666666',
      padding: 4,
      paddingHorizontal: 15,
      borderRadius: 100,
      marginRight: 5
    },

    content: {
      flex: 1,
      minHeight: Dimensions.get('window').height - 230,
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
      backgroundColor: '#fff',
    },

    label: {
      padding: 20,
      textTransform: 'uppercase',
      fontWeight: 'bold'
    },

    divider: {
      height: 2,
      backgroundColor: '#f1f1f1',
      margin: 20,
      marginBottom: 0      
    },

    carousel: {
      marginHorizontal: 10,
      maxHeight: 150, 
    },

    carouselItem: {
      height: 150,
      width: 250,
      backgroundColor: '#000',
      borderRadius: 10,
      marginHorizontal: 10,
      display: 'flex',
      justifyContent: 'flex-end', 
      alignItems: 'flex-start',
      padding: 20
    },

    carouselTitle: {
      color: '#fff',
      fontSize: 20
    },

    carouselDate: {
      color: '#fff'
    },
    carouselImage:{
      height: 150,
      width: 250,
      borderRadius: 10,
      padding: 20,
      position: 'absolute', 
      zIndex: -1,
      opacity: 0.5
    }, 

    carouselItemIcon: {
      position: 'absolute',
      right: 20, 
      top: 20
    },

    plusDot: {
      height: 30,
      width: 30,
      backgroundColor: '#ddd',
      borderRadius: 30,
      borderColor: '#f1f1f1',
      borderWidth: 5,
      margin: 20
    },

    postItem: {
      margin: 5,
      marginHorizontal: 20,
      padding: 10,
      backgroundColor: '#f1f1f1',
      borderRadius: 10, 
      display: 'flex',
      flexDirection: 'row'
    }, 

    postItemTitle: {
      margin: 4,
      
    }

  });
