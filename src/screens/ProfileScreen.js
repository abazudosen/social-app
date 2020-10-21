import React, {useContext} from 'react'
import styled from 'styled-components'

import Text from '../components/Text'
import { UserContext } from '../context/UserContext'
import { FirebaseContext } from '../context/FirebaseContext'

export default ProfileScreen = () => {
  const [user, setUser] = useContext(UserContext)
  const firebase = useContext(FirebaseContext)

  const logOut = async () => {
    const loggedOut = await firebase.logOut()

    if(loggedOut) {
      setUser((state) => ({...state, isLoggedIn: false}));
    }
  }

  return <Container>
    <ProfilePhotoContainer>
      <ProfilePhoto 
        source={
          user.profilePhotoUrl === 'default' 
            ? require('../../assets/defaultProfilePhoto.jpg') 
            : {uri: user.profilePhotoUrl}
        } 
      />
    </ProfilePhotoContainer>

    <Text medium bold margin='16px 0 32px 0'>
      {user.username}
    </Text>

    <StatsContainer>
      <StatContainer>
        <Text large light>23</Text>
        <Text small bold color='#c2c4cd'>Posts</Text>
      </StatContainer>
      <StatContainer>
        <Text large light>9081</Text>
        <Text small bold color='#c2c4cd'>Followers</Text>
      </StatContainer>
      <StatContainer>
        <Text large light>11</Text>
        <Text small bold color='#c2c4cd'>Following</Text>
      </StatContainer>
    </StatsContainer>

    <Logout onPress={logOut}>
      <Text medium bold color='#23a8d9'>Log out</Text>
    </Logout>
  </Container>
}

const Container = styled.View`
  flex: 1;
  margin-top: 64px;
  align-items: center
`

const ProfilePhotoContainer = styled.View`
  shadow-opacity: 0.8;
  shadow-radius: 30px;
  shadow-color: #222222;
`

const ProfilePhoto = styled.Image`
  width: 128px;
  height: 128px;
  border-radius: 64px
`

const StatsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 32px;
  flex: 1;
`

const StatContainer = styled.View`
  align-items: center;
  flex: 1;
`

const Logout = styled.TouchableOpacity`
  margin-bottom: 32px
`