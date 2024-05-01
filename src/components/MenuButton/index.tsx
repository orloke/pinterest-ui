import { theme } from '@/theme'
import { FontAwesome } from '@expo/vector-icons'
import { Text, TouchableOpacity } from 'react-native'
import { MenuButtonProps } from './menuButton'
import { styles } from './styles'

export function MenuButton({ title, icon }: MenuButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <FontAwesome
        name={icon}
        size={32}
        color={theme.colors.white}
        style={styles.icon}
      />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}
