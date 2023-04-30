import React from 'react'
import { Device } from 'react-mobile-device-frames'
import { Outlet } from 'react-router-dom'
import BottomNav from '../Navigation/BottomNav'
import { useMediaQuery } from '@mantine/hooks';
const MobileApp = () => {
    const matches = useMediaQuery('(max-width: 414px)');

    if (matches) {
        return (
            <div style={{
                backgroundColor: "#f6f8fe",
                height: '100vh',
                margin: '0 auto',
                maxWidth: '414px',
                padding: '25px 20px',
                color: 'black'
            }}>
                <div>
                    <Outlet />
                </div>
                <BottomNav matches={matches} />
            </div>
        )
    }

    return (
        <Device device="galaxy-s22">
            <div style={{
                backgroundColor: "#f6f8fe",
                height: '100%',
                width: '100%',
                borderRadius: '30px',
                padding: '25px 20px',
                color: 'black'
            }}>
                <div>
                    <Outlet />
                </div>
                <BottomNav />
            </div>
        </Device>
    )
}

export default MobileApp