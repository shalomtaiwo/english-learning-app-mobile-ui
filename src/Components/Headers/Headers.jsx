import { ActionIcon, Flex, Text } from '@mantine/core'
import React from 'react'

const Section = ({ children, title, icon }) => {
    return (
        <div>
            <Flex justify={'space-between'}>
                <Text fw={'700'} size={18}>{title}</Text>
                <ActionIcon>
                    {icon}
                </ActionIcon>
            </Flex>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Section