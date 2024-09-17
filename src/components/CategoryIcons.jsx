import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMobile, faDesktop, faWatch, faHome, faHeadphones, faGamepad } from '@fortawesome/free-solid-svg-icons';

const CategoryIcons = () => {
  return (
    <View style={styles.categoryIconsContainer}>
      <TouchableOpacity style={styles.categoryIcon}>
        <FontAwesomeIcon icon={faMobile} size={20} />
        <Text>Phones</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryIcon}>
        <FontAwesomeIcon icon={faDesktop} size={20} />
        <Text>Computers</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryIcon}>
        <FontAwesomeIcon icon={faWatch} size={20} />
        <Text>Smart Watches</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryIcon}>
        <FontAwesomeIcon icon={faHome} size={20} />
        <Text>Cameras</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryIcon}>
        <FontAwesomeIcon icon={faHeadphones} size={20} />
        <Text>Headphones</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryIcon}>
        <FontAwesomeIcon icon={faGamepad} size={20} />
        <Text>Gaming</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // ... your styling here
});

export default CategoryIcons;