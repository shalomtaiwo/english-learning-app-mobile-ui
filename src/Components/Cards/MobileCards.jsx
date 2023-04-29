import { Card, CardBody } from '@chakra-ui/react'
import { Flex } from '@mantine/core'
import React from 'react'

const MobileCards = ({ children, img, style, radius, direction }) => {
    return (
        <Card
            backgroundColor={'white'}
            variant={'unstyled'}
            borderRadius={radius ||'18px'}
            color={'black'}
            style={style}
        >
            <CardBody>
                {
                    img ?
                        <Flex direction={direction} align={'center'} justify={'center'} padding={'5px'}>
                            {children}
                        </Flex>
                        :
                        <>{children}</>
                }
            </CardBody>
        </Card>
    )
}

export default MobileCards