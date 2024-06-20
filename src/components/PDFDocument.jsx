import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
// import logo from "../../assets/first.png"; // Adjust the path to your logo
import logo from "../assets/first.png";

const styles = StyleSheet.create({
  page: {
    paddingTop: 50,
    paddingBottom: 60,
    paddingHorizontal: 30,
    position: "relative",
  },
  header: {
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    textAlign: "center",
  },
  logo: {
    width: 100,
    marginVertical: 10,
  },
  content: {
    marginTop: 100,
    fontSize: 12,
    lineHeight: 1.5,
  },
});

const PDFDocument = ({ content }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Image src={logo} style={styles.logo} />
      </View>
      <View style={styles.content}>
        <Text>{content}</Text>
      </View>
    </Page>
  </Document>
);

export default PDFDocument;
