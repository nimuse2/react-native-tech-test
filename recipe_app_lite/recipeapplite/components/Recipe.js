import React, { Component } from 'react';
import { View,
         Text, 
         TextInput, 
         FlatList,
         Button,
         ActivityIndicator,
         Image,
         TouchableOpacity,
         TouchableHighlight,
         LayoutAnimation, 
       } from 'react-native';

import styles from '../styles/Styles.js';
// import Icon from "react-native-vector-icons/MaterialIcons";
// import IonIcon from 'react-native-vector-icons/Ionicons';
import { imageFormat, timeFormat, isImage } from '../utilities/utility.js';


class Recipe extends Component {
  //INIT///////////
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
      expanded : false,
      expandedIndexId : 0,
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  //GET DATA///////////

  makeRemoteRequest = () => {

    fetch('https://next.riverford.co.uk/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: '{ recipe_search { hits { recipe { id name short_description ingredients { ingredients } cook_time media { master_uri } }} } }'}),
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        data: res.data.recipe_search.hits,
        error: res.error || null,
        loading: false,
      });
      this.arrayholder = res.data.recipe_search.hits;
      console.log("state ", this.state.data)
    })
    .catch(error => {
      this.setState({ error, loading: false });
    });

  };
  

  //MANIPULATE DATA//////////////////
  
  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {

      const textData = text;
      const itemData = item.recipe.name;

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  //RENDER DATA///////////////////////
  
  renderHeader = () => {
    return (
      <View>
        <TextInput
            style={styles.textInput}
            onChangeText={text => this.searchFilterFunction(text)}
            value={this.state.value}
            placeholder="Search Here"
          />
      </View>
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={styles.seperator}
      />
    );
  };

  toggleExpand=(item)=>{
    var _i = 0;
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded : !this.state.expanded})
    this.setState({expandedIndexId : item.recipe.id});
  }

  render() {
    
    if (this.state.loading) {
      return (
        <View style={styles.activity}>
          <ActivityIndicator />
        </View>
      );
    }
    const Item = ({ title }) => (
      <View >
        <Text >{title}</Text>
      </View>
    );
    const renderItem = ({ item }) => (
      <View>
        <TouchableOpacity 
          style={styles.row} 
          onPress={()=>this.toggleExpand(item)}>
            <Image 
              source={{ uri: imageFormat(item.recipe.media[0]) }} 
              style={styles.profileImg}
              resizeMode={isImage(item.recipe.media[0]) ? 'contain': 'stretch'}
            />
            <Text style={[
              styles.rowTitle, 
              styles.font
            ]}>
              {item.recipe.name}
            </Text>
            {/* <Icon name={(item.recipe.id == this.state.expandedIndexId) && this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30}  /> */}
        </TouchableOpacity>
        <View style={styles.parentHr}/>
        {
            (item.recipe.id == this.state.expandedIndexId) && this.state.expanded &&
            <View style={styles.child}>
                {!isImage(item.recipe.media[0]) && (
                    <Image 
                      source={{ uri: imageFormat(item.recipe.media[0]) }} 
                      style={styles.mainImg}
                      sizeMode="cover"
                    />
                  )
                }
                <Text style={styles.bodyTitle}>{item.recipe.name}</Text>
                <Text>{item.recipe.short_description}</Text>
                <Text style={styles.heavyTxt}>Ingredients:</Text>
                  <FlatList 
                    data={item.recipe.ingredients[0].ingredients}
                    renderItem={({ item }) => (
                      <Text>
                        {/*<Icon name='keyboard-arrow-right' />*/}<Item title={item} />
                      </Text>
                      )}
                    keyExtractor = {(item, index) => 'key'+index}
                  />  
                <Text style={styles.heavyTxt}>Duration:</Text>
                <Text> {timeFormat(item.recipe.cook_time)}</Text>
                <TouchableHighlight 
                  style ={styles.buttonColor}>
                  <Button 
                    title={'Order'}
                    color='#ffffff'
                  />
                </TouchableHighlight>
            </View>
        }
      </View>
      
    );
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={renderItem}
          keyExtractor = {(item, index) => 'key'+index}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}


export default Recipe;