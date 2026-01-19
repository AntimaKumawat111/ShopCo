import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  DimensionValue
} from 'react-native';
import UseTheme from '../helper/color';
import LinearGradient from 'react-native-linear-gradient';

type ButtonGradientProps = {
  title: string;
  onPress: () => void;

  width?: DimensionValue;
  height?: DimensionValue;
  borderRadius?: number;

  // Styles
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  gradientStyle?: StyleProp<ViewStyle>;

  // Gradient override
  gradientColors?: string[];
};

export default function ButtonGradient({
  title,
  onPress,
  width = '100%',
  height = 48,
  borderRadius = 12,
  containerStyle,
  textStyle,
  gradientStyle,
  gradientColors,
}: ButtonGradientProps) {
  const theme = UseTheme();
  const styles = createStyle(theme, height, borderRadius);

  return (
    <LinearGradient
      colors={gradientColors ?? theme.buttonGradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[
        styles.linearGradient,
        { width },
        gradientStyle,
      ]}
    >
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.container,
          pressed && styles.pressed,
          containerStyle,
        ]}
      >
        <Text style={[styles.title, textStyle]}>
          {title}
        </Text>
      </Pressable>
    </LinearGradient>
  );
}
const createStyle = (
  theme: any,
  height: DimensionValue,
  borderRadius: number
) =>
  StyleSheet.create({
    linearGradient: {
      borderRadius,
      overflow: 'hidden',
    },
    container: {
      height,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 16,
    },
    pressed: {
      opacity: 0.85,
    },
    title: {
      color: theme.white,
      fontSize: 16,
      fontWeight: '600',
    },
  });

