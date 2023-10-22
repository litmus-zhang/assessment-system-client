import { Button } from '@chakra-ui/react'
import React from 'react'


interface IButton {
    text: string
    variant: 'solid' | 'outline' | 'ghost' | 'link'
    size?: 'md' | "lg" | "sm" | "xs"
}
export default function CustomButton(props: IButton) {
    return (
        <Button size={props.size} colorScheme='green' variant={props.variant}>
            {props.text}
        </Button>
    )
}
