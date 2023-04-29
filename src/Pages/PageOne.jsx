import React from 'react'
import { ActionIcon, Flex, RingProgress, Space, Text, Title } from '@mantine/core'
import fire from '../Assets/Icon/fire.png'
import MobileButton from '../Components/Buttons/MobileButton'
import { Card, CardBody } from '@chakra-ui/react'
import Section from '../Components/Headers/Headers'
import { IconSquareRoundedChevronRight } from '@tabler/icons-react'
import Lesson from '../Components/Progress/Lesson'
import LeaderBoard from '../Components/Progress/LeaderBoard'

const PageOne = () => {
    return (
        <>
            <Flex className='first_head'>
                <div style={{
                    width: '80%'
                }}>
                    <Text size={13}>Hello Rachel,</Text>
                    <Title order={6}>Ready to play English?</Title>
                </div>
                <div style={{
                    width: '50px',
                    display: 'inline-flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    height: 'fit-content',
                    padding: '5px',
                    borderRadius: '20px'
                }}>
                    <MobileButton action>
                        <img src={fire} alt='fire_icon' width={14} />
                    </MobileButton>
                    <Text>65</Text>
                </div>
            </Flex>
            <Space h={'xl'} />
            <Card
                backgroundColor={'white'}
                variant={'outline'}
                borderWidth={'2px'}
                borderColor={'#6472ba'}
                borderRadius={'18px'}
                color={'black'}
            >
                <CardBody padding={'5px 10px !important'}
                >
                    <Flex direction={'column'} align={'left'}>
                        <Text size={12}>Today's goal</Text>
                        <Flex justify={'space-between'}>
                            <RingProgress
                                size={85}
                                thickness={9}
                                rootColor='#fed4be'
                                sections={[{ value: 40, color: 'orange' }]}
                                label={
                                    <Text color="orange" weight={700} align="center" size="sm">
                                        40%
                                    </Text>
                                }
                            />
                            <div style={{
                            }}>
                                <Title order={5}>Excellent!</Title>
                                <Text size={12}>You're almost there.</Text>
                                <Text size={12}>Finish the goal to achieve</Text>
                                <ActionIcon color='orange' variant='transparent'>
                                    <img src={fire} width={13} alt='fire_icon' /> <Text size={12}>10</Text>
                                </ActionIcon>
                            </div>
                        </Flex>
                    </Flex>
                </CardBody>
            </Card>
            <Space h={'xl'} />
            <Section
                title={'Your lesson'}
                icon={<IconSquareRoundedChevronRight color='#6472ba' />}
            >
                <Space h={'md'} />
                <Lesson />
            </Section>
            <Space h={'xl'} />
            <Section
                title={'Leaderboard'}
                icon={<IconSquareRoundedChevronRight color='#6472ba' />}
            >

                <Space h={'md'} />
                <LeaderBoard></LeaderBoard>
            </Section>
        </>
    )
}

export default PageOne