import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, FlatList, ActivityIndicator, Dimensions, StyleSheet } from 'react-native'

import { pageLoaded } from 'actions/ui'
import { getLoading } from 'selectors/ui'
import { getError } from 'selectors/users'
import { getUsers } from 'selectors/users'

const SCREEN_HEIGHT = Dimensions.get("window").height

const ListUsersScreen = () => {
  const dispatch = useDispatch()
  const loading = useSelector(getLoading)
  const error = useSelector(getError)
  const users = useSelector(getUsers)

  useEffect(() => {
    dispatch(pageLoaded)
  }, [dispatch])

  return (
    <View style={styles.container}>
      {
        loading ?
          <View style={styles.activityIndicator}><ActivityIndicator size="large" color="#00ff00" /></View>
          : <View>
            <FlatList
              keyExtractor={(user, index) => index.toString()}
              data={users}
              renderItem={user =>
                <View style={{ flex: 1, padding: 10 }}>
                  <Text>{'Name: ' + user.item.name}</Text>
                  <Text>{'Username: ' + user.item.username}</Text>
                  <Text>{'Email: ' + user.item.email}</Text>
                </View>
              }
              ListEmptyComponent={() => {
                return (
                  <View style={{ justifyContent: "center", alignItems: "center", height: SCREEN_HEIGHT }}>
                    <Text>The list is empty</Text>
                    {error === null ? null : <Text>{error}</Text>}
                  </View>
                )
              }}
            />
          </View>
      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default ListUsersScreen