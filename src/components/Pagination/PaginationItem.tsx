import { Button } from "@chakra-ui/react"
import React from "react"

interface PaginationItemProps {
    isCurrent?: boolean;
    pageNumber: number;
}

export function PaginationItem({ isCurrent = false, pageNumber }: PaginationItemProps) {
    if(isCurrent) {
        return (
            <Button
                size="sm"
                fontSize="xs"
                width="4"
                colorScheme="pink"
                disabled
                _disabled={{bgColor:
                'pink.500',
                cursor:
                'default'}}
            >
                {pageNumber}
            </Button>
        )
    }

    return (
        <Button
            size="sm"
            fontSize="xs"
            width="4"
            bg="gray.500"
            _hover={{
                bg: 'gray.500'
            }}
        >
            {pageNumber}
        </Button>
    )
    
}