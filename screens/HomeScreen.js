import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  ScrollView,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import { db } from "../firebase";

const HomeScreen = ({ navigation }) => {
  const [post, setPosts] = useState([]);
  useEffect(() => {
    db.collectionGroup("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((post) => ({
            id: post.id,
            ...post.data(),
          }))
        );
      });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {post.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});
export default HomeScreen;
