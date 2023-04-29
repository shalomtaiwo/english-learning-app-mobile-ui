import React from 'react'
import HCalender from '../Components/Calender/HCalender'
import Section from '../Components/Headers/Headers'
import { Button, Grid, Space, Text, Title } from '@mantine/core'
import { IconBook, IconDots, IconHeadset, IconNotebook, IconVolume } from '@tabler/icons-react'
import MobileCards from '../Components/Cards/MobileCards'

export const PageActivity = () => {

    const skills = [
        {
            title: 'Reading',
            icon: <IconBook color='white' size={25} />,
            status: 100
        },
        {
            title: 'Writing',
            icon: <IconNotebook color='white' size={25} />,
            status: 85
        },
        {
            title: 'Speaking',
            icon: <IconVolume color='white' size={25} />,
            status: 100
        },
        {
            title: 'Listening',
            icon: <IconHeadset color='white' size={25} />,
            status: 70
        }
    ]

    return (
        <div>
            <HCalender />
            <Space h={'xl'} />
            <Section
                title={"Skills"}
                icon={<IconDots />}
            >
                <Space h={'xl'} />
                <Grid>
                    {
                        skills?.map((items, index) => {
                            return (
                                <Grid.Col span={6} key={index}>
                                    <MobileCards img
                                        direction={'column'}
                                        style={{
                                            padding: '15px 10px'
                                        }}>
                                        <div style={{
                                            backgroundColor: '#6472ba',
                                            borderRadius: '100%',
                                            padding: '13px'
                                        }}>
                                            {items?.icon}
                                        </div>
                                        <Space h={12} />
                                        <Title order={6}>
                                            {items?.title}
                                        </Title>
                                        <Space h={3} />
                                        <Text size={13} color='dimmed'>
                                            {items?.status}%
                                        </Text>
                                        <Space h={'sm'} />
                                        <Button
                                        color='orange'
                                        radius="xl"
                                        compact
                                        size="xs"
                                        variant={
                                            items.status === 100
                                                ?
                                                'filled'
                                                :
                                                'outline'
                                        }
                                        >
                                            {
                                                items.status === 100
                                                    ?
                                                    'Completed'
                                                    :
                                                    'Good work'
                                            }
                                        </Button>
                                    </MobileCards>
                                </Grid.Col>
                            )
                        })
                    }
                </Grid>
            </Section>
        </div>
    )
}
