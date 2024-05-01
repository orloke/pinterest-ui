import BottomSheet from '@gorhom/bottom-sheet'
import { forwardRef } from 'react'
import { Text, View } from 'react-native'
import { MenuProps } from './menu'

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClosed }, ref) => {
  return (
    <BottomSheet ref={ref} index={0} snapPoints={[0.00001, 230]}>
      <View>
        <Text>Comece a criar</Text>
      </View>
    </BottomSheet>
  )
})
