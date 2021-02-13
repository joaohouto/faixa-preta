import React, { useEffect } from 'react';
import { View, Dimensions } from 'react-native';

import BottomSheet from 'reanimated-bottom-sheet';

import { Row } from '../../components/Global';
import { DragLine } from './styles';

const BottomDrawer = ({ children }) => {

    const renderContent = () => {
        return (
            <View style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#111',
                paddingHorizontal: 30,
                borderTopRightRadius: 40,
                borderTopLeftRadius: 40,
            }}>
                <Row>
                    <View style={{ height: 42 }} >
                        <DragLine />
                    </View>
                </Row>
                
                    {children}
                
            </View>
        );
    }

    const sheetRef = React.useRef(null);

    useEffect(() => {
        sheetRef.current.snapTo(1);
    }, []);

    return (
        <BottomSheet
        ref={sheetRef}
        snapPoints={[Dimensions.get('window').height - 200, 260]}
        borderRadius={0}
        renderContent={renderContent}
      />
    );
}



export default BottomDrawer;