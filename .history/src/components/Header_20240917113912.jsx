import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.header}>
      <View style={styles.searchBar}>
        <FontAwesomeIcon icon={faSearch} size={16} style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
          style={styles.searchInput}
        />
      </View>
      <View style={styles.navLinks}>
        <TouchableOpacity style={styles.navLink}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navLink}>
          <Text>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navLink}>
          <Text>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navLink}>
          <Text>Blog</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.icons}>
        <FontAwesomeIcon icon={faShoppingCart} size={20} />
        <FontAwesomeIcon icon={faHeart} size={20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // ... your styling here
});

export default Header;