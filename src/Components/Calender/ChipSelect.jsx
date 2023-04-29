import { Chip, Text } from '@mantine/core';
import React from 'react'

const ChipSelect = ({ item, day }) => {
    const [checked, setChecked] = React.useState(false);

    return (
        <Chip
            checked={checked}
            variant="filled"
            color={day === 'Thu' && "orange"}
            onChange={() => setChecked((v) => !v)}>
            {!checked && <Text size={13} color={day !== 'Thu' && "#6472ba"}>{item}</Text>}
        </Chip>
    )
}

export default ChipSelect