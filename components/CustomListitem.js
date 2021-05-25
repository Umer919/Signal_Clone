import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar } from "react-native-elements";

const CustomListitem = () => {
    return (
        <ListItem>
            <Avatar
                rounded
                activeOpacity={0.7}
                source={{
                    uri:

                        "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",

                }}


            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: 800 }}></ListItem.Title>
                <Text> Youtube Chat </Text>
                <ListItem.Subtitle
                    numberOfLines={1} ellipsizeMode="tail">
                    Hello, Welcome to your First chat
</ListItem.Subtitle>

            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListitem

const styles = StyleSheet.create({})
