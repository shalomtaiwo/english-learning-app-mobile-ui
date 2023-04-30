import { ActionIcon } from '@mantine/core'
import { IconChartBar, IconHome, IconSettings, IconUsers } from '@tabler/icons-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const BottomNav = ({ matches }) => {
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
            slug: '/community',
        },
        {
            label: 'Settings',
            icon: <IconSettings />,
            slug: '/settings',
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
                position: `${matches ? 'fixed' : 'absolute'}`,
                bottom: 1,
                right: 0,
                height: '50px',
                borderTopLeftRadius: '35px',
                borderBottomLeftRadius: `${matches ? ' 0px' : '35px'}`,
                borderTopRightRadius: '35px',
                borderBottomRightRadius: `${matches ? ' 0px' : '35px'}`
            }}>
                {
                    item?.map((items, index) => {
                        return (
                            <NavLink
                                to={items?.slug}
                                activeClassName="active"
                                key={index}>
                                <ActionIcon size={21}>
                                    {items?.icon}
                                </ActionIcon>
                            </NavLink>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BottomNav