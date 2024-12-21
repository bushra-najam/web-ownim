import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const screenWidth = Dimensions.get("window").width;

const DISTANCE_BETWEEN_TABS = 35;

const TabBar = ({
  state,
  descriptors,
  navigation,
  position,
}) => {
  const [widths, setWidths] = useState([]);
  const scrollViewRef = useRef(null);
  const transform = [];
  const inputRange = state.routes.map((_, i) => i);
  const [isServicesFocused, setServiceFocus] = useState(false)
  // keep a ref to easily scroll the tab bar to the focused label
  const outputRangeRef = useRef([]);

  const getTranslateX = (
    position,
    routes,
    widths
  ) => {
    const outputRange = routes.reduce((acc, _, i) => {
      if (i === 0) return [DISTANCE_BETWEEN_TABS / 2 + widths[0] / 2];
      return [
        ...acc,
        acc[i - 1] + widths[i - 1] / 2 + widths[i] / 2 + DISTANCE_BETWEEN_TABS,
      ];
    }, []);
    outputRangeRef.current = outputRange;
    const translateX = position.interpolate({
      inputRange,
      outputRange,
      extrapolate: "clamp",
    });
    return Animated.multiply(translateX, 1);
  };

  // compute translateX and scaleX because we cannot animate width directly
  if (
    state.routes.length > 1 &&
    widths.length === state.routes.length &&
    !widths.includes(undefined)
  ) {
    const translateX = getTranslateX(
      position,
      state.routes,
      widths
    );
    transform.push({
      translateX,
    });
    const outputRange = inputRange.map((_, i) => widths[i]);
    transform.push({
      scaleX:
        state.routes.length > 1
          ? position.interpolate({
            inputRange,
            outputRange,
            extrapolate: "clamp",
          })
          : outputRange[0],
    });
  }

  // scrolls to the active tab label when a new tab is focused
  useEffect(() => {
    if (
      state.routes.length > 1 &&
      widths.length === state.routes.length &&
      !widths.includes(undefined)
    ) {
      if (state.index === 0) {
        scrollViewRef.current.scrollTo({
          x: 0,
        });
      } else {
        // keep the focused label at the center of the screen
        scrollViewRef.current.scrollTo({
          x: (outputRangeRef.current[state.index]) - screenWidth / 2,
        });
      }
    }
  }, [state.index, state.routes.length, widths]);

  // get the label widths on mount
  const onLayout = (event, index) => {
    const { width } = event.nativeEvent.layout;
    const newWidths = [...widths];
    newWidths[index] = width - DISTANCE_BETWEEN_TABS;
    setWidths(newWidths);
  };

  // basic labels as suggested by react navigation
  const labels = state.routes.map((route, index) => {

    const { options } = descriptors[route.key];
    const label = route.name;
    const isFocused = state.index === index;

    const onPress = () => {
      const event = navigation.emit({
        type: "tabPress",
        target: route.key,
        canPreventDefault: true,
      });
      setServiceFocus(false)
      if (!isFocused && !event.defaultPrevented) {
        // The `merge: true` option makes sure that the params inside the tab screen are preserved
        // eslint-disable-next-line
        // @ts-ignore
        navigation.navigate(route.name);
      }
    };

    const onServiceSelect = (serviceName) => {
      navigation.navigate({ name: serviceName, merge: true });
      setServiceFocus(true)
    }

    const onPressServices = () => {
      const event = navigation.emit({
        type: "tabPress",
        target: route.key,
        canPreventDefault: true,
      });

      setServiceFocus(true)
    }

    const inputRange = state.routes.map((_, i) => i);
    const opacity = position.interpolate({
      inputRange,
      outputRange: inputRange.map((i) => (i === index && (!isServicesFocused) ? 1 : 0.5)),
    });

    const ServiceOPacity = position.interpolate({
      inputRange,
      outputRange: inputRange.map((i) => (isServicesFocused ? 1 : 0.5)),
    });

    const icon = options.tabBarIcon({ focused: (isFocused && !isServicesFocused), color: 'hotpink' });
    const headerShown = options.headerShown;

    if (headerShown == false) return (< View key={index}></View>)

    return (label == 'Services') ? (
      <TouchableOpacity
        key={route.key}
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        style={styles.button}
      >
        <Menu name="servidec-menu" key={'nav-menu'} >
          <MenuTrigger key={'nav-menu-trigger'} onPress={() => onPressServices()}
            customStyles={{ triggerWrapper: { height: 33 } }}
          >
            <View
              onLayout={(event) => onLayout(event, index)}
              style={styles.buttonContainer}
            >
              <MaterialIcons
                name={'miscellaneous-services'}
                size={30}
                color={isServicesFocused ? "#e91e63" : "black"}
              />
              <View style={{ flexDirection: 'row' }}>
                <Animated.Text style={[styles.text, { opacity: ServiceOPacity }]} >
                  {label}
                </Animated.Text>
                <MaterialCommunityIcons name="menu-down" size={20} color={(isServicesFocused) ? "#e91e63" : "black"} />
              </View>
            </View>
          </MenuTrigger>
          <MenuOptions key={'nav-menu-options'}>
            <MenuOption key={3} onSelect={() => onServiceSelect('Jenitorials')} text='Jenitorials' />
            <MenuOption key={2} onSelect={() => onServiceSelect('Leather')} text="Leather Products" />
            <MenuOption key={4} onSelect={() => onServiceSelect('StainlessSteel')} text="StainlessSteel Products" />
            <MenuOption key={1} onSelect={() => onServiceSelect('Flexo')} text='Flexo Printing' />
            <MenuOption key={5} onSelect={() => onServiceSelect('Gravure')} text='Gravure Priniting' />
            <MenuOption key={6} onSelect={() => onServiceSelect('Offset')} text="Offset Printing" />
            <MenuOption key={7} onSelect={() => onServiceSelect('Logistics')} text='Logistic Services' />
            <MenuOption key={8} onSelect={() => onServiceSelect('Software')} text='Software & Digital Marketing Solutions' />
          </MenuOptions>
        </Menu>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        key={route.key}
        accessibilityRole="button"
        accessibilityState={(isFocused && !isServicesFocused) ? { selected: true } : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        onPress={onPress}
        style={styles.button}

      >
        <View
          onLayout={(event) => onLayout(event, index)}
          style={styles.buttonContainer}
        >
          {icon}
          <Animated.Text style={[styles.text, { opacity }]}>
            {label}
          </Animated.Text>
        </View>
      </TouchableOpacity>

    )
  });

  return (
    <View style={styles.contentContainer}>
      <Animated.ScrollView
        horizontal
        ref={scrollViewRef}
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      >
        {labels}
        <Animated.View style={[styles.indicator, { transform }]} />
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 27,
  },
  buttonContainer: {
    paddingHorizontal: DISTANCE_BETWEEN_TABS / 2,
    height: 30,
    alignItems: 'center',
  },
  container: {
    backgroundColor: "black",
    flexDirection: "row",
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: StyleSheet.hairlineWidth,
    height: 38
  },
  contentContainer: {
    height: 60,
    marginTop: 16,
    marginBottom: 5
  },
  indicator: {
    backgroundColor: "white",
    bottom: 0,
    height: 3,
    left: 0,
    position: "absolute",
    right: 0,
    width: 1,
  },
  text: {
    color: "black",
    fontSize: 15,
    textAlign: "center",
  },
});

export default TabBar;
