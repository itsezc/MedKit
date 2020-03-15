import * as React from 'react'
import { Text, View, Image } from 'react-native'
import { Button } from '../../../components/Login/Button'
import Modal from 'react-native-modal'


//{ visible, handleClose } : { visible: boolean, handleClose: any }
export function Action({ visible, handleChange }): JSX.Element {

	if (visible) {
		return (
			<Modal
				animationIn='slideInUp'
				animationOut='slideOutDown'
				isVisible={true}
			>
				<View
					style={{
						backgroundColor: '#ffffff',
						paddingVertical: 30,
						paddingHorizontal: 10,
						borderRadius: 20,
						width: 300,
						alignSelf: 'center',
						alignItems: 'center',
					}}
				>
					<Image
						style={{
							width: 120,
							height: 120,
							position: 'absolute',
							marginTop: -60,
							borderWidth: 8,
							borderColor: '#ffffff',
							borderRadius: 60,
						}}
						source={{ uri: 'https://cdn3.iconfinder.com/data/icons/round-icons-vol-1-2/120/weight-512.png' }}
					/>
					<Text
						style={{ fontSize: 20, marginTop: 40, marginBottom: 10, fontFamily: 'circular-std' }}
					>
						Your 20 daily pushups
				</Text>
					<Text style={{ width: '80%', textAlign: 'center', fontFamily: 'circular-std' }}>
						Be sure to keep up with your daily routine, or you'll lose motivation.
				</Text>
					<Button
						style={{
							backgroundColor: '#363946',
							width: '70%',
							marginTop: 20,
						}}
					>
						Workout
				</Button>
					<Button
						onPress={() => handleChange(false)}
						style={{
							width: '70%',
							marginTop: 10
						}}
					>
						Back
				</Button>
				</View>
			</Modal>
		)
	} else {
		return null
	}
}