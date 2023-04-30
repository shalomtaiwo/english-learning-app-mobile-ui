import { Carousel } from '@mantine/carousel'
import React from 'react'
import MobileCards from '../Cards/MobileCards'
import { ActionIcon, Flex, Progress, Skeleton, Text } from '@mantine/core'
import { IconPointFilled } from '@tabler/icons-react'

const Lesson = ({ loading }) => {
  const items = [
    {
      image: 'https://res.cloudinary.com/dqvxhly4l/image/upload/v1682752442/73d5e7ec8851a7d731952de99996d8d5_lvmfd4.jpg',
      progress: 60,
      title: 'Speaking 101',
      duration: 30
    },
    {
      image: 'https://res.cloudinary.com/dqvxhly4l/image/upload/v1682753114/speech-bubble_wr55y2.svg',
      progress: 60,
      title: 'New Words',
      duration: 90
    },
    {
      image: 'https://res.cloudinary.com/dqvxhly4l/image/upload/v1682752682/microphone-icon-flat-design-illustration-free-vector_gh9zh9.jpg',
      progress: 40,
      title: 'Microphone 600',
      duration: 50
    },
    {
      image: 'https://res.cloudinary.com/dqvxhly4l/image/upload/v1682752442/73d5e7ec8851a7d731952de99996d8d5_lvmfd4.jpg',
      progress: 60,
      title: 'Speaking 101',
      duration: 30
    }
  ]
  return (
    <div>
      <Skeleton visible={loading} height={100} mt={6} mb={6} radius="md">
        <Carousel
          slidesToScroll={2}
          slideGap="md"
          withIndicators={false}
          withControls={false}
          align="start"
          slideSize="130px"
        >
          {
            items?.map((item, index) => {
              return (
                <Carousel.Slide key={index}>
                  <MobileCards img>
                    <img src={item.image} alt={item.title} width={65} />
                  </MobileCards>
                  <div
                    style={{
                      width: '100%',
                      display: 'inline-flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <div style={{
                      width: '75%',
                      marginRight: '5px'
                    }}>
                      <Progress color="indigo" value={item.progress} />
                    </div>
                    <div>
                      <Text size={11}>{item.progress}%</Text>
                    </div>
                  </div>
                  <Text fw={700} size={12}>
                    {item.title}
                  </Text>
                  <Flex align={'center'} justify={'flex-start'}>
                    <Text size={12} color='dimmed'>
                      {item.duration} days
                    </Text>
                    <ActionIcon variant="transparent" size={8}>
                      <IconPointFilled size={7} />
                    </ActionIcon>

                    <Text color='dimmed' size={12}>daily</Text>
                  </Flex>
                </Carousel.Slide>
              )
            })
          }
        </Carousel>
      </Skeleton>
    </div>
  )
}

export default Lesson