import RemixIcon from './RemixIcon'
import Colors from '../constants/Colors'

export const Icon = ({ name, size, focused }) => {

	return(
		<RemixIcon
			name={name}
			size={size || 20}
			style={{ marginBottom: -3 }}
			color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
		/>
	)
}