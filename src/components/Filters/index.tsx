import { Filter } from '@/components/Filter'
import { FlatList } from 'react-native'
import { FiltersProps } from './filters'
import { styles } from './styles'

export function Filters({ filters, filter, onChange }: FiltersProps) {
  return (
    <FlatList
      data={filters}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Filter
          filter={item}
          selected={item === filter}
          onPress={() => onChange(item)}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.list}
      contentContainerStyle={styles.content}
    />
  )
}
