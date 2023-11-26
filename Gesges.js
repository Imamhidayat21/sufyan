import React from "react";
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import NavigationContainer from "@react-navigation/native/lib/typescript/src/NavigationContainer";
// import MainContainer from "../MainContainer";
import { NativeViewGestureHandler } from "react-native-gesture-handler";
// import { PanGestureHandler } from "react-native-gesture-handler";

export default function App() {
    return(        
            <GestureHandlerRootView style={{ flex: 1 }}>
                <NativeViewGestureHandler>
                    <BottomSheet
                        ref={bottomSheetRef}
                        index={0}
                        snapPoints={snapPoints}
                        onChange={handleSheetChanges}
                        >
                   <View style={styles.contentContainer}>
                       <Text>Awesome 🎉</Text>
                   </View>
                   </BottomSheet>
                </NativeViewGestureHandler>
            </GestureHandlerRootView>
    );
}
/* <GestureHandlerRootView style={{ flex: 1 }}>
<BottomSheet
  ref={bottomSheetRef}
  index={0}
  snapPoints={snapPoints}
  onChange={handleSheetChanges}
>
  <View style={styles.contentContainer}>
    <Text>Awesome 🎉</Text>
  </View>
</BottomSheet>
</GestureHandlerRootView> */