import { Button } from '@chakra-ui/react'

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
}

export default function PaginationItem({ number, isCurrent = false }: PaginationItemProps) {

  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{ bgColor: 'pink.500', cursor: 'defualt' }}
      >
        {number}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bgColor="gray.700"
      disabled
      _disabled={{ bgColor: 'gray.500', cursor: 'defualt' }}
    >
      {number}
    </Button>
  )
}