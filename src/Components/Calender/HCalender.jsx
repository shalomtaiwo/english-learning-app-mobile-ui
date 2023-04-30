import React from 'react'
import { Flex, Group, Space, Text } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import ChipSelect from './ChipSelect';


const HCalender = () => {

    const hDate = [
        {
            day: 'mon',
            num: 1
        },
        {
            day: 'Tue',
            num: 2
        },
        {
            day: 'Wed',
            num: 3
        }, {
            day: 'Thu',
            num: 4
        },
        {
            day: 'fri',
            num: 5
        },
        {
            day: 'sat',
            num: 6
        },
        {
            day: 'sun',
            num: 7
        },
        {
            day: 'mon',
            num: 8
        },
        {
            day: 'Tue',
            num: 9
        },
        {
            day: 'Wed',
            num: 10
        }, {
            day: 'Thu',
            num: 11
        },
        {
            day: 'fri',
            num: 12
        },
        {
            day: 'sat',
            num: 13
        },
        {
            day: 'sun',
            num: 14
        },
        {
            day: 'mon',
            num: 15
        },
        {
            day: 'Tue',
            num: 16
        },
        {
            day: 'Wed',
            num: 17
        }, {
            day: 'Thu',
            num: 18
        },
        {
            day: 'fri',
            num: 19
        },
        {
            day: 'sat',
            num: 20
        },
        {
            day: 'sun',
            num: 21
        },
        {
            day: 'mon',
            num: 22
        },
        {
            day: 'Tue',
            num: 23
        },
        {
            day: 'Wed',
            num: 24
        }, {
            day: 'Thu',
            num: 25
        },
        {
            day: 'fri',
            num: 26
        },
        {
            day: 'sat',
            num: 27
        },
        {
            day: 'sun',
            num: 28
        },
        {
            day: 'mon',
            num: 29
        },
        {
            day: 'Tue',
            num: 30
        },
        {
            day: 'Wed',
            num: 31
        },
    ]
    const hMonth = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    return (
        <div style={{
            width: '100%',
            position: 'relative'
        }}>

            <Carousel
                slidesToScroll={1}
                slideGap="sm"
                withIndicators={false}
                withControls={true}
                slideSize="100%"
            >
                {
                    hMonth?.map((item, index) => {
                        return (
                            <Carousel.Slide key={index}>
                                <Group position='center'>
                                    <Text fw={'700'}>{item}</Text>
                                </Group>
                            </Carousel.Slide>
                        )
                    })
                }
            </Carousel>
            <Space h={25} />
            <Carousel
                slidesToScroll={7}
                slideGap="sm"
                withIndicators={false}
                withControls={false}
                align="start"
                slideSize="0%"
            >
                {
                    hDate?.map((item, index) => {
                        return (
                            <Carousel.Slide key={index}>
                                <Flex direction={'column'} align={'center'}>
                                    <ChipSelect item={item?.num} day={item?.day} />
                                    <Text
                                        size={12}
                                        transform={'capitalize'}
                                        color={item?.day === "Thu" && "orange"}>{item?.day}</Text>
                                </Flex>
                            </Carousel.Slide>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default HCalender