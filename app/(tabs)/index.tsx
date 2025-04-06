import React, { useState } from 'react';
import { View, Text, ImageBackground, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState('collections');

  return (
    <View style={styles.container}>
      {/* Profile Header with Background Image */}
      <ImageBackground
        source={require('../../assets/Property1.png')}
        style={styles.headerBackground}
        resizeMode="cover"
      >
        <View style={styles.headerOverlay}>
          {/* Top Row with Settings and Share */}
          <View style={styles.headerTopBar}>
            <TouchableOpacity>
              <Ionicons name="share-social-outline" size={28} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="settings" size={28} color="white" />
            </TouchableOpacity>
          </View>

          {/* Profile Info */}
          <View style={styles.profileInfo}>
            <View style={styles.avatarContainer}>
              <Image
                source={require('../../assets/mine.jpg')}
                style={styles.avatarImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.username}>@theo_from_hsr <Ionicons name="checkmark-circle" size={16} color="#00FF99" style={styles.verifiedBadge} /></Text>
              <TouchableOpacity style={styles.editProfileButton}>
                <Text style={styles.editProfileText}>EDIT PROFILE✎</Text>
                <View style={styles.dottedLine} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Location and Bio */}
          <Text style={styles.location}>🇮🇳 INDIA</Text>
          <Text style={styles.bio}>18 y/o with high ambitions. want to build cool stuff!</Text>
          <Text style={styles.following}>✔ 2</Text>
          <Text style={styles.followingLabel}>FOLLOWING</Text>
        </View>
      </ImageBackground>

      {/* Stats Row */}
      <View style={{ marginTop: 20 }}></View>

      {/* Tabs */}
      <View style={styles.tabRow}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'collections' && styles.activeTab]}
          onPress={() => setActiveTab('collections')}
        >
          <Text style={activeTab === 'collections' ? styles.activeTabText : styles.inactiveTabText}>COLLECTIONS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'tags' && styles.activeTab]}
          onPress={() => setActiveTab('tags')}
        >
          <Text style={activeTab === 'tags' ? styles.activeTabText : styles.inactiveTabText}>MANAGE TAGS</Text>
        </TouchableOpacity>
      </View>

      {/* Conditional Content */}
      {activeTab === 'collections' ? <CollectionsTab /> : <ManageTagsScreen />}

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>glitch <Text style={styles.footerHouse}>house</Text></Text>
      </View>
    </View>
  );
}

function CollectionsTab() {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.card}>
        <Image source={require('../../assets/collections.png')} resizeMode="cover" />
      </View>
    </ScrollView>
  );
}

function ManageTagsScreen() {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.card}>
        <Image source={require('../../assets/manage-tags.png')} resizeMode="cover" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    width: "100%"
  },
  headerBackground: {
    width: '100%',
    height: 400,
    backgroundColor: "#2a0045"
  },
  headerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  headerTopBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
    marginTop: 20,
    gap: 20,
  },
  profileInfo: {
    flexDirection: 'column',
    // alignItems: 'center',
    marginBottom: 15,
  },
  avatarContainer: {
    height: 100,  // Reduced from 100
    width: 100,   // Reduced from 100
    overflow: 'hidden',
    marginRight: 15,
    backgroundColor: "yellow",
    paddingBottom: 5,
    paddingRight: 5,
    paddingTop: 1,
    paddingLeft: 1,
    borderRadius: 5
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10
    // flex: 1,
  },
  username: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 5,
  },
  verifiedBadge: {
    marginLeft: 5,
  },
  editProfileButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    letterSpacing: 2
  },
  editProfileText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    opacity: 0.5
  },
  dottedLine: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    borderStyle: 'dotted',
    width: '100%',
    opacity: 0.5
  },
  location: {
    color: 'white',
    fontSize: 18,
    marginBottom: 8,
    fontWeight: 'normal',
  },
  bio: {
    color: 'white',
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 20,
    fontWeight: 'normal', // Remove any bold styling
    marginTop: 20
  },
  following: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 20
  },
  followingLabel: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'normal',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  // headerBackground: {
  //   width: '100%',
  //   height: 200, // Adjust this based on your image
  //   paddingTop: 40,
  // },
  headerContent: {
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
  },
  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  // username: {
  //   color: 'white',
  //   fontWeight: 'bold',
  //   fontSize: 18,
  // },
  editProfile: {
    color: '#ccc',
    fontSize: 12,
  },
  // location: {
  //   color: 'white',
  //   fontSize: 12,
  //   marginBottom: 4,
  // },
  // bio: {
  //   color: 'white',
  //   fontSize: 14,
  //   marginBottom: 4,
  // },
  // following: {
  //   color: 'white',
  //   fontSize: 12,
  // },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#333',
    paddingVertical: 12,
  },
  stat: {
    color: 'white',
    fontSize: 12,
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingBottom: 8,
    width: "100%"
  },
  tab: {
    paddingBottom: 8,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#00FF99',
  },
  activeTabText: {
    color: '#00FF99',
    fontWeight: 'bold',
  },
  inactiveTabText: {
    color: '#aaa',
  },
  scrollContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
    height: "100%",
    width: "100%"
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    marginBottom: 16,
    height: "100%",
    width: "100%"
  },
  footer: {
    alignItems: 'center',
    padding: 16,
  },
  footerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28
  },
  footerHouse: {
    color: '#ccc',
    backgroundColor: '#505050',
    fontSize: 20,
  },
});