import React, { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import DiscoverScreen from '../Pages/Screens/DiscoverScreen';
import NewsScreen from '../Pages/Screens/NewsScreen';
import TopNavigations from './TopNavigations';

const InshortTabs = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(1)
    const [routes] = useState([
        {key: "first", title:"Discover"},
        {key: "second", title:"News"}
      
    ])
    const renderScene = SceneMap({
        first:DiscoverScreen,
        second:NewsScreen
    })

    return (
        <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
        renderTabBar = {()=> <TopNavigations
        index={index}
        setIndex={setIndex}
        />}
    />
    )
}

export default InshortTabs
