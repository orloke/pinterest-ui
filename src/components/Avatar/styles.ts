import { theme } from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  image: {
    borderRadius: 25,
    height: 30,
    width: 30,
  },
  selected: {
    borderWidth: 3,
    borderColor: theme.colors.white,
  },
})
