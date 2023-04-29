import { ActionIcon, Button } from '@mantine/core'
import React from 'react'

const MobileButton = ({ children, action }) => {
    if (action) {
        return (
            <ActionIcon radius="xl" variant="outline" color="orange" size={20}>
                {children}
            </ActionIcon>
        )
    }
    return (
        <Button>
            {children}
        </Button>
    )
}

export default MobileButton