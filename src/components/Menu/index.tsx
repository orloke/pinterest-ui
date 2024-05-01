import { theme } from '@/theme'
import { FontAwesome } from '@expo/vector-icons'
import BottomSheet from '@gorhom/bottom-sheet'
import { forwardRef } from 'react'
import { Text, View } from 'react-native'
import { MenuButton } from '../MenuButton'
import { MenuProps } from './menu'
import { styles } from './styles'

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClosed }, ref) => {
  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={[0.00001, 230]}
      backgroundStyle={styles.container}
      handleComponent={() => null}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <FontAwesome
            name="close"
            size={24}
            onPress={onClosed}
            color={theme.colors.white}
          />
          <Text style={styles.title}>Comece a criar</Text>
        </View>
        <View style={styles.options}>
          <MenuButton title="Pin" icon="home" />
          <MenuButton title="Colagem" icon="paste" />
          <MenuButton title="Pasta" icon="folder" />
        </View>
      </View>
    </BottomSheet>
  )
})
