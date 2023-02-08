import React from "react";
import { View, FlatList, StyleSheet, Text, Pressable } from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

const DATA = [
  {
    id: "2927BF2B-A18B-1A44-E5E8-8E115D9405E4",
    name: "Chaim Wade",
  },
  {
    id: "51157765-CDAB-3F11-31C6-45FD28B5D4E4",
    name: "Jonas Alexander",
  },
  {
    id: "581B37E7-0B49-1596-81DE-34477EDD3A4E",
    name: "Ezekiel Miles",
  },
  {
    id: "4CA88AB9-5DF9-4CA8-8BDC-20FA11E92FA8",
    name: "Rashad Roman",
  },
  {
    id: "B2834114-1892-D1CC-F580-26ECFBDEA932",
    name: "Emily Cash",
  },
  {
    id: "03E535B7-77CD-6C7B-7B40-1202118D9E8C",
    name: "Ryder Oliver",
  },
  {
    id: "1A837CE8-2E5E-1C2C-77B6-A1594DCB6DD7",
    name: "Alan Hunter",
  },
  {
    id: "C7CBB352-79BA-C1A3-73A0-5E8AC195535C",
    name: "Merrill Garza",
  },
  {
    id: "C2476144-71B4-FB98-8FD9-E8AE8BEC7281",
    name: "Stella Kim",
  },
  {
    id: "8B3B1C2C-9DB8-6344-CD14-5EFF093B8889",
    name: "Willow Rich",
  },
  {
    id: "CEDB532B-7E79-0406-8978-248CCA847AC5",
    name: "Dane Mcdonald",
  },
  {
    id: "4D74B246-52B4-CB4F-2616-27966889AA96",
    name: "Belle Hines",
  },
  {
    id: "2FDC43B8-3461-485E-1B4D-23BDEAEDA7AE",
    name: "Phillip Parsons",
  },
  {
    id: "8B2F1E4E-362B-065A-E5BE-69C7CA9D113D",
    name: "Clark Horne",
  },
  {
    id: "B823CBB4-7AB0-2A9A-0CCD-DBFC768F384E",
    name: "Wayne Coffey",
  },
  {
    id: "CEDB532B-7E79-0406-8978-248CCA847AC6",
    name: "Dane Mcdonald",
  },
  {
    id: "4D74B246-52B4-CB4F-2616-27966889AA97",
    name: "Belle Hines",
  },
  {
    id: "2FDC43B8-3461-485E-1B4D-23BDEAEDA7AF",
    name: "Phillip Parsons",
  },
  {
    id: "8B2F1E4E-362B-065A-E5BE-69C7CA9D113E",
    name: "Clark Horne",
  },
  {
    id: "B823CBB4-7AB0-2A9A-0CCD-DBFC768F384F",
    name: "Wayne Coffey",
  },
];

const Music = () => {
  const [modalIsVisible, setModalIsVisible] = React.useState(false);
  const [courseGoals, setCourseGoals] = React.useState(DATA);

  // function loadData() {
  //   DATA.map((model) => {
  //     console.log(model);
  //     addGoalHandler(model.name);
  //   });
  // }
  // loadData();

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(true);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { name: enteredGoalText, id: (new Date()).getTime().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    addGoalHandler("Arief Siswanto");
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  const Item = ({ data }) => (
    <View style={styles.item}>
      <Pressable
        onPress={deleteGoalHandler.bind(this, data.id)}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.5 : 1,
          },
          styles.wrapperCustom,
        ]}
      >
        <Text style={styles.title}>{data.name}</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={{ width: "100%", height: "100%" }}>
      {/* <AppBar /> */}
      <View>
        <FlatList
          alwaysBounceVertical={true}
          data={courseGoals}
          renderItem={({ item }) => <Item data={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#8250df",
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 16,
    color: "#ffffff",
  },
});

export default Music;
