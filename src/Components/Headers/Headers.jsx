import { ActionIcon, Flex, Title } from '@mantine/core'
import React from 'react'

const Section = ({ children, title, icon }) => {
    return (
        <div>
            <Flex justify={'space-between'}>
                <Title order={5}>{title}</Title>
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