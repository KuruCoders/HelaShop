import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { FAB, Portal } from 'react-native-paper';
export default function FabCustom({generatePdf,handleAdd}) {

  const [state, setState] = useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;
  return (
    <Portal>
      <FAB.Group
        variant='surface'
        color='white'
        open={open}
        visible
        icon={open ? 'pencil' : 'plus'}
        actions={[
          {
            icon: 'plus',
            label: 'Add New',
            onPress: handleAdd
          },
          {
            icon: 'share',
            label: 'Share PDF',
            onPress: generatePdf
          },
        ]}
        onStateChange={onStateChange}
        onPress={() => {
          if (open) {
            // do something if the speed dial is open
          }
        }}
      />
    </Portal>
  )
}