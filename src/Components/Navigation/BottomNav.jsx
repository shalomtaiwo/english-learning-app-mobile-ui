import { ActionIcon } from '@mantine/core'
import { IconChartBar, IconHome, IconSettings, IconUsers } from '@tabler/icons-react'
import React from 'react'

const BottomNav = () => {
    const item = [
        {
            label: 'Home',
            icon: <IconHome />,
            slug: '/',
        },
        {
            label: 'Activity',
            icon: <IconChartBar />,
            slug: '/activity',
        },
        {
            label: 'Community',
            icon: <IconUsers />,
            slug: '/',
        },
        {
            label: 'Settings',
            icon: <IconSettings />,
            slug: '/',
        }
    ]
    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%',
                alignItems: 'center',
                padding: '0px !important',
                backgroundColor: 'white',
                position: 'absolute',
                bottom: 1,
                right: 0,
                height: '50px',
                borderRadius: '35px'
            }}>
                {
                    item?.map((items) => {
                        return <ActionIcon size={21}>
                            {items?.icon}
                        </ActionIcon>
                    })
                }
            </div>
        </div>
    )
}

export default BottomNav