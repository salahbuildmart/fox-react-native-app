import {StyleSheet} from 'react-native';
import { COLORS } from '../../../utility/style/colors';

 const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      elevation: 3,
      backgroundColor: COLORS.primary,
    },
    title: {
      color: "#3d3220",
      fontSize: 16,
    },
  });

  export default styles