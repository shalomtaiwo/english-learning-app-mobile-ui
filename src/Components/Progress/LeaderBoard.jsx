import React from 'react'
import MobileCards from '../Cards/MobileCards';
import { ActionIcon, Avatar, Group, Skeleton, Text } from '@mantine/core';
import { IconArrowNarrowUp } from '@tabler/icons-react';
import fire from '../../Assets/Icon/fire.png'

const LeaderBoard = ({ loading }) => {
    const [users, setUsers] = React.useState();

    const getApiData = async () => {
        const response = await fetch(
            "https://dummyjson.com/users?limit=3"
        ).then((response) => response.json());
        setUsers(response);
    };

    React.useEffect(() => {
        getApiData()
    }, [])


    return (
        <div
            style={{
                overflowY: 'scroll'
            }}
        >
            {
                users?.users?.map((user, index) => {
                    return (

                        <MobileCards
                            key={index}
                            style={{
                                marginBottom: '15px',
                                padding: '8px 8px 5px 8px'
                            }}
                            radius={'12px'}
                        ><Skeleton visible={loading} height={42}  radius="md">
                                <Group>
                                    <div style={{
                                        borderWidth: '2px',
                                        borderColor: '#e8c7b5',
                                        borderRadius: '30px'
                                    }}>
                                        <Avatar size="sm" src={user?.image} radius="xl" variant="outline" />
                                    </div>

                                    <div style={{ flex: 1 }}>
                                        <Text size={13} weight={600}>
                                            {user?.firstName}{` ${user?.lastName}`}
                                        </Text>

                                        <Text color="dimmed" size={10}>
                                            {user?.address?.city}
                                        </Text>
                                    </div>

                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        <ActionIcon size={18} variant='transparent' color='green'>
                                            <IconArrowNarrowUp />
                                        </ActionIcon>
                                        <ActionIcon color='orange' variant='transparent'>
                                            <img src={fire} width={11} alt='fire_icon' /> <Text size={10} fw={500}>
                                                {user?.height}
                                            </Text>
                                        </ActionIcon>
                                    </div>
                                </Group>
                            </Skeleton>
                        </MobileCards>

                    )
                })
            }
        </div>
    )
}

export default LeaderBoard