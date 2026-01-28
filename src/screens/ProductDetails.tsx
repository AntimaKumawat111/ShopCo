import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BaseLayout from '../components/BaseLayout';
import Header from '../components/header';
import {useTheme} from '../helper/color';

function ProductDetails() {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <>
      <BaseLayout>
        <Header title="Product Details" />
        <View style={styles.container}>
          <Text> Product Details</Text>
        </View>
      </BaseLayout>
    </>
  );
}

export default ProductDetails;

const createStyles = (theme: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
  });
};
