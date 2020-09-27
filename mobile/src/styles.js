import styled from 'styled-components/native'

export const Container = styled.ScrollView`
    flex:1;
    background-color: #111;
`

export const Header = styled.View`
    height: 150px;
`

export const HeaderBox = styled.View`
    position: absolute;
    bottom: 0;
    padding: 25px;
`

export const HeaderText = styled.Text`
    color: #fff;
    font-size: 40px;
    position: absolute;
    bottom: 60px;
    left: 20px;
`

export const HeaderLabel = styled.Text`
    font-size: 14px;
    color: #b3b3b3;
    background-color: #666666;
    padding: 4px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 100px;
    position: absolute;
    bottom: 0;
    margin: 20px;
`

export const HeaderLabelBoxItem = styled.Text`
    font-size: 14px;
    color: #f1f1f1;
    background-color: #666666;
    padding: 4px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 100px;
    margin: 20px;
    margin-right: 5px;
    margin-left: 0px;
`

export const HeaderLabelBox = styled.View`
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 0;
    padding-left: 20px;
`

export const HeaderBoxLabel = styled.Text`
    font-size: 14px;
    color: #b3b3b3;
    background-color: #666666;
    padding: 4px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 100px;
    margin: 20px;
`

export const HeaderImage = styled.Image`
    height: 150px;
    width: 250px;
    position: absolute;
    right: -20px;
    top: 0;
    z-index: -99;
`

export const Content = styled.View`
    flex: 1;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    background-color: #fff;
`

export const Label = styled.Text`
    padding: 20px;
    text-transform: uppercase;
    font-weight: bold;
`

export const Details = styled.Text`
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 10px;
    color: #999;
`

export const ActivityAlert = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 30px;
    padding-bottom: 20px;
`

export const ActivityAlertText = styled.Text`
    color: #999;
    padding-left: 20px;
    flex: 1;
`

export const Divider = styled.View`
    height: 2px;
    background-color: #f1f1f1;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 20px;
    margin-right: 20px;
`

export const ActivityCard = styled.TouchableOpacity`
    height: 105px;
    background-color: #555;
    margin: 10px;
    margin-left: 20px;
    margin-right: 20px;
    padding: 20px;
    border-radius: 10px;
`

export const ActivityCardImage = styled.Image`
    height: 105px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;
    z-index: -1;
`

export const ActivityCardName = styled.Text`
    color: #f1f1f1;
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
`

export const CategoryBox = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`

export const ActivityCardCategory = styled.Text`
    font-size: 14px;
    color: #b3b3b3;
    background-color: #666666;
    padding: 4px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 100px;
    margin-right: 5px;
`

export const SearchBox = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-top: 5px;
    padding-right: 15px;
`

export const SearchInput = styled.TextInput`
    padding-left: 20px;
    padding-right: 20px;
    height: 50px;
    border-radius: 25px;
    color: #555555;
    background-color: #f1f1f1;
    flex: 1;
`

export const SearchIcon = styled.TouchableOpacity`
    position: absolute;
    right: 20px;
    top: 10px;
    padding: 15px;
`

export const MessageBox = styled.View`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 30px;
`

export const MessageText = styled.Text`
    font-size: 16px;
    color: #999999;
    font-weight: bold
`

export const PlusDot = styled.TouchableOpacity`
    height: 35px;
    width: 35px;
    background-color: #dddddd;
    border-radius: 30px;
    border-color: #f1f1f1;
    border-width: 8px;
    margin: 20px;
`

export const CenteredContent = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StartButtonLoading = styled.View`
    height: 50px;
    background-color: #111;
    margin: 20px;
    border-radius: 25px;
    opacity: 0.2;
`

export const StartButton = styled.TouchableOpacity`
    height: 50px;
    background-color: #111;
    margin: 20px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const StartButtonText = styled.Text`
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
`

export const MoveCard = styled.TouchableOpacity`
    background-color: #f1f1f1;
    margin: 10px;
    margin-left: 20px;
    margin-right: 20px;
    padding: 20px;
    border-radius: 10px;
    height: 60px;
`

export const MoveCardName = styled.Text`
    position: absolute;
    left: 100px;
    bottom: 20px;
`

export const MoveCardRepetitions = styled.Text`
    font-weight: bold;
    position: absolute;
    left: 75px;
    bottom: 20px;
`

export const MoveCardImage = styled.Image`
    height: 50px;
    width: 50px;
    position: absolute;
    left: 5px;
    top: 5px;
    border-radius: 10px;
`

export const MoveCardBackground = styled.View`
    background-color: #111;
    height: 60px;
    width: 60px;
    position: absolute;
    left: 0px;
    top: 0px;
    border-radius: 10px;
    z-index: -1;
`

export const HeaderThumbnail = styled.Image`
    height: 150px;
    position: absolute;
    top: 0;
    z-index: -99;
`

//ActivityRunning
export const ActivityRunningHeader = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ActivityRunningHeaderImage = styled.Image`
    height: 200px;
    width: 200px;
    margin: 20px;
`
export const ActivityRunningMoveName = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #f1f1f1;
    padding: 20px;
    text-align: center;
`
export const ActivityRunningMoveRepetitions = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: #ccc;
    padding: 20px;
    padding-top: 0;
`

export const ActivityRunningContent = styled.View`
    min-height: 230px;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    background-color: #fff;
`

export const BottomButtons = styled.View`
    display: flex;
    flex-direction: row;
`

export const NextButton = styled.TouchableOpacity`
    height: 50px;
    width: 50px;
    margin: 20px;
    margin-left: 0;
    background-color: #111;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const EndButton = styled.TouchableOpacity`
    flex: 1;
    height: 50px;
    margin: 20px;
    margin-right: 10px;
    background-color: #ccc;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const EndButtonDark = styled.TouchableOpacity`
    flex: 1;
    height: 50px;
    margin: 20px;
    margin-left: 10px;
    background-color: #111;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const EndButtonText = styled.Text`
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
`

export const OverlayTitle = styled.Text`
    margin: 20px;
    font-weight: bold;
    font-size: 30px;
`

export const OverlayText = styled.Text`
    margin: 20px;
    margin-bottom: 30px;
    margin-top: 0;
`

export const PlayButton = styled.TouchableOpacity`
    height: 50px;
    margin: 20px;
    margin-top: 30px
    background-color: #111;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PlayButtonText = styled.Text`
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
`

export const AlmostText = styled.Text`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
`

export const FinalizedActivityText = styled.Text`
    font-size: 30px;
    font-weight: bold;
    margin: 20px;
`

export const ProgressBar = styled.View`
    height: 5px;
    border-radius: 3px;
    background-color: #333;
    width: 300px;
    margin: 20px;
`

export const ProgressBarFill = styled.View`
    height: 5px;
    border-radius: 3px;
    background-color: #999;
    flex: 1;
`

//Profile
export const ProfileCard = styled.View`
    padding: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const ProfileCardTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
`

export const ProfileCardSubtitle = styled.Text`
    color: #999;
    margin-left: 5px;
`


export const BasicButton = styled.TouchableOpacity`
    background-color: #111;
    padding: 12px;
    border-radius: 25px;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
`

export const BasicButtonText = styled.Text`
    font-size: 15px;
    color: #fff;
`

//Settings
export const SimpleInput = styled.TextInput`
    margin: 10px 0 0 0;
    padding-left: 20px;
    padding-right: 20px;
    height: 50px;
    border-radius: 3px;
    color: #f1f1f1;
    background-color: #333;
    text-align: right;
    flex: 1;
`
export const SimpleInputLabel = styled.Text`
    font-weight: bold;
    padding: 20px 20px 15px;
    width: 150px;
    border-radius: 3px;
    color: #f1f1f1;
    background-color: #333;
    position: absolute;
    top: 10px;
    left: 0;
    z-index: 1;
`

// Finished Activities List
export const Badge = styled.Text`
    color: #fff;
    background-color: #777;
    padding: 5px;
    border-radius: 50px;
    margin-left: 20px;
    width: 130px;
    text-align: center;
`

export const FinishedActivityCard = styled.View`
    background-color: #f1f1f1;
    margin: 10px;
    margin-left: 20px;
    margin-right: 20px;
    padding: 20px;
    border-radius: 10px;
    height: 70px;
`

export const FinishedActivityCardName = styled.Text`
    position: absolute;
    bottom: 20px;
    left: 80px;
`

export const FinishedActivityCardDate = styled.Text`
    position: absolute;
    bottom: 40px;
    left: 80px;
    font-size: 11px;
`

export const FinishedActivityCardXp = styled.Text`
    position: absolute;
    bottom: 20px;
    left: 20px;
    font-weight: bold;
    font-size: 20px;
`