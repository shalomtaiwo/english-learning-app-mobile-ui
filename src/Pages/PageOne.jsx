import React from 'react'
import { ActionIcon, Flex, RingProgress, Skeleton, Space, Text, Title } from '@mantine/core'
import fire from '../Assets/Icon/fire.png'
import MobileButton from '../Components/Buttons/MobileButton'
import { Card, CardBody } from '@chakra-ui/react'
import Section from '../Components/Headers/Headers'
import { IconSquareRoundedChevronRight } from '@tabler/icons-react'
import Lesson from '../Components/Progress/Lesson'
import LeaderBoard from '../Components/Progress/LeaderBoard'

const PageOne = () => {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2500);
    }, [])


    return (
        <>
            <Flex className='first_head'>
                <div style={{
                    width: 'calc(100% - 50px)'
                }}>
                    <Skeleton visible={loading} height={8} mt={4} width="70%" radius="xl">
                        <Text size={13}>Hello Rachel,</Text>
                    </Skeleton>
                    <Space h={5} />
                    <Skeleton visible={loading} height={8} mt={6} width="70%" radius="xl">
                        <Title order={6} size={13}>
                            <span style={{
                                color: '#6472ba'
                            }}>Ready to</span>
                            <span style={{
                                color: 'orange'
                            }}> play English?</span></Title>
                    </Skeleton>
                </div>
                <Skeleton visible={loading} height={30} circle mb="xl">
                    <div style={{
                        width: '50px',
                        display: 'inline-flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        height: 'fit-content',
                        padding: '4px 5px',
                        borderRadius: '20px'
                    }}>
                        <MobileButton action>
                            <img src={fire} alt='fire_icon' width={13} />
                        </MobileButton>
                        <Text size={11} fw={700}>65</Text>
                    </div>
                </Skeleton>
            </Flex>
            <Space h={6} />
            <Skeleton visible={loading} height={100} mt={6} width="100%" radius="md">
                <Card
                    backgroundColor={'white'}
                    variant={'outline'}
                    borderWidth={'2px'}
                    borderColor={'#6472ba'}
                    borderRadius={'18px'}
                    color={'black'}
                >
                    <CardBody padding={'10px 10px 5px !important'}
                    >
                        <Flex direction={'column'} align={'left'}>
                            <Text size={10} fw={600} style={{
                                marginLeft: '12%',
                                color: '#6472ba'
                            }}>Today's goal</Text>
                            <Flex justify={'space-evenly'}>
                                <RingProgress
                                    size={95}
                                    thickness={9}
                                    rootColor='#fed4be'
                                    sections={[{ value: 40, color: 'orange' }]}
                                    label={
                                        <Text color="black" weight={700} align="center" size="sm">
                                            40%
                                        </Text>
                                    }
                                />
                                <div>
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
            </Skeleton>
            <Space h={45} />
            <Section
                title={'Your lesson'}
                icon={<IconSquareRoundedChevronRight color='#6472ba' />}
            >
                <Space h={8} />
                <Lesson loading={loading} />
            </Section>
            <Space h={35} />
            <Section
                title={'Leaderboard'}
                icon={<IconSquareRoundedChevronRight color='#6472ba' />}
            >
                <Space h={'md'} />
                <LeaderBoard loading={loading} />
            </Section>
        </>
    )
}

export default PageOne