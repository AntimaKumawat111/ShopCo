import React from 'react';
import BaseLayout from '../../components/BaseLayout';
import Header from '../../components/header';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../../helper/color';

function Checkout() {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <>
      <BaseLayout>
        <Header title="Cart" />
        <ScrollView>
          <View style={styles.container}>
            <Text>hello</Text>
          </View>
        </ScrollView>
      </BaseLayout>
    </>
  );
}

export default Checkout;

const createStyles = (theme: any) => {
  return StyleSheet.create({
    container: {},
  });
};
