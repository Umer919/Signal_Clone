import React from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import CustomListitem from '../components/CustomListitem'

const HomeScreen = () => {
    return (
        <SafeAreaView> 
            <ScrollView>
                <CustomListitem />
            </ScrollView>
        </SafeAreaView>
            
        
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
