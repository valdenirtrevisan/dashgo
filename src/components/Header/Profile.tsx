import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData &&
        <Box mr="4" textAlign="right">
          <Text>Valdenir Trevisan</Text>
          <Text color="gray.300" fontSize="small">
            valdenir@gmail.com
          </Text>
        </Box>
      }

      <Avatar size="md" name="Valdenir Trevisan"  src="http://github.com/valdenirtrevisan.png"/>
    </Flex>
  )
}