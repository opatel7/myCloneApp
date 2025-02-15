import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";

const ProfileScreen = () => {
  const handleAlert = () => {
    Alert.alert("Alert Button pressed");
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "black" }}>
      <View>
        <View>
          <Image
            source={require("../myCloneApp/assets/photos/instgram.jpg")}
            style={{
              width: "30%",
              height: 20,
              marginLeft: 10,
              marginTop: 10,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.username}>
            <TouchableOpacity>
              <Image
                source={{
                  uri: "data:image/png;base64,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",
                }}
                style={styles.backbutton}
              />
            </TouchableOpacity>
            _react0705_
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <Image
                style={{ height: 40, width: 40 }}
                source={require("../myCloneApp/assets/photos/addpost.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{
                  height: 25,
                  width: 25,
                  marginRight: 10,
                  marginLeft: 5,
                }}
                source={require("../myCloneApp/assets/photos/threeline.jpg")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.profileSection}>
        <TouchableOpacity>
          <Image
            source={require("../myCloneApp/assets/photos/groupphoto.jpg")}
            style={styles.profilePic}
          />
        </TouchableOpacity>

        <View>
          <TouchableOpacity>
            <Text style={styles.stats}>9</Text>
            <Text style={styles.stats}>posts</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.stats}>600k</Text>
            <Text style={styles.stats}>followers</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.stats}>0</Text>
            <Text style={styles.stats}>following</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <TouchableOpacity><Text style={styles.subText}>myCloneApp, React-native application</Text></TouchableOpacity>
        <View style={styles.profileContainer}>
          <Button
            title="@_react0705_"
            onPress={() => console.log("Instagram link pressed")}
            color={"white"}
          ></Button>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 10,
        }}
      >
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
          <Text style={[styles.buttonText, styles.secondaryButtonText]}>
            Share profile
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.icons}>
        <Image
          source={require("../myCloneApp/assets/photos/photo.jpg")}
          style={styles.iconImage}
        />
        <Image
          source={require("../myCloneApp/assets/photos/reel.png")}
          style={styles.iconImage}
        />
        <Image
          source={require("../myCloneApp/assets/photos/saved.png")}
          style={styles.iconImage}
        />
      </View>

      <View style={styles.imageGrid}>
        <Image
          source={{
            uri: "https://www.shutterstock.com/image-photo/motivational-quotes-never-give-on-600w-2240387883.jpg",
          }}
          style={styles.gridImage}
        />
        <Image
          source={{
            uri: "https://wallpapersok.com/images/hd/do-it-now-black-and-white-quotes-en7gkn3mjx4plytk.jpg",
          }}
          style={styles.gridImage}
        />
        <Image
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/006/490/793/non_2x/a-modern-typography-quotes-if-you-never-try-you-never-know-inspirational-design-calligraphy-motivational-good-quotes-in-white-background-free-vector.jpg",
          }}
          style={styles.gridImage}
        />
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfj0r7OpwPaUo3ybQFjntMUZjudpW4qhPJEw&s",
          }}
          style={styles.gridImage}
        />
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS480HYLkKXl0hFGYiOeE4pU2to2vk5lHJj1w&s",
          }}
          style={styles.gridImage}
        />
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/8f/16/b3/8f16b39b57c6d26691f06d7eea4a0c3d.jpg",
          }}
          style={styles.gridImage}
        />
        <Image
          source={{
            uri: "https://www.shutterstock.com/image-photo/motivational-quotes-never-give-on-600w-2240387883.jpg",
          }}
          style={styles.gridImage}
        />
        <Image
          source={{
            uri: "https://wallpapersok.com/images/hd/do-it-now-black-and-white-quotes-en7gkn3mjx4plytk.jpg",
          }}
          style={styles.gridImage}
        />
        <Image
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/006/490/793/non_2x/a-modern-typography-quotes-if-you-never-try-you-never-know-inspirational-design-calligraphy-motivational-good-quotes-in-white-background-free-vector.jpg",
          }}
          style={styles.gridImage}
        />
      </View>

      <View style={styles.alertButton}>
        <Button title="Alert" onPress={handleAlert} color="red" />
      </View>


      <View>
        <TouchableOpacity>
          <Image
            source={require("../myCloneApp/assets/photos/bottombar.jpg")}
            style={{
              width: "100%",
              height: 50,
              position: "absolute",
              marginTop: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  icon: {
    width: 20,
    height: 20,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    justifyContent: "space-around",
  },
  backbutton: {
    width: 30,
    height: 15,
    borderRadius: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 10,
  },
  username: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 10,
  },
  subText: {
    marginTop: 10,
    color: "gray",
    fontSize: 16,
    marginLeft: 25,
  },
  stats: {
    color: "white",
    fontSize: 18,
    marginVertical: 5,
    fontWeight: "400",
  },
  name: {
    color: "gray",
    fontSize: 16,
    marginVertical: 5,
  },
  profileContainer: {
    flexDirection: "row",
    marginLeft: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 1,
  },
  icons: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
  },
  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  iconImage: {
    width: "32%",
    height: 30,
    marginBottom: 5,
    resizeMode: "contain",
  },
  gridImage: {
    width: "32%",
    height: 120,
    marginBottom: 5,
  },
  alertButton: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 0,
    borderRadius: 50,
    marginVertical: 10,
    width: "100%",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginVertical: 10,
    width: "50%",
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  secondaryButton: {
    marginLeft: 10,
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 1,
  },
  secondaryButtonText: {
    color: "white",
  },
});

export default ProfileScreen;
