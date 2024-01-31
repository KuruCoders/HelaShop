import { View, Text, StyleSheet } from 'react-native'
import React, { forwardRef, useCallback, useEffect, useMemo, useRef } from 'react'
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'

export default ProductBottomSheet = forwardRef(( props,ref ) =>{
    // renders
    const renderBackdrop = useCallback(
        (props) => (
            <BottomSheetBackdrop
                {...props}
                appearsOnIndex={0}
                disappearsOnIndex={-1}
            />
        ),
        []
    );
    const snapPoints = useMemo(() => ['50%', '75%'], [])
    return (
        <BottomSheet
            index={-1}
            ref={ref}
            backdropComponent={renderBackdrop}
            enablePanDownToClose={true}
            enableOverDrag
            snapPoints={snapPoints}
        >
            <Text>helloooooooo</Text>
            <Text>helloooooooo</Text>
            <Text>helloooooooo</Text>
            <Text>helloooooooo</Text>
            <Text>helloooooooo</Text>
            <Text>helloooooooo</Text>
            <Text>helloooooooo</Text>
            <Text>helloooooooo</Text>
            <Text>helloooooooo</Text>
        </BottomSheet>
    )
})
