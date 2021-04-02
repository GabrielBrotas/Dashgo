
import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react';
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export function Header() {
  return (
    <Flex
        as="header"
        w="100%"
        maxWidth={1480}
        h="20"
        mx="auto"
        mt="4"
        px="6"
        align="center"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        dashgo
        <Text as="span" ml="1" color="pink.500">.</Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={600}
        alignSelf="center"
        color="gray.200"
        bg="gray.800"
        borderRadius="full"
        position="relative"
      >
        <Input 
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          _placeholder={{color: 'gray.400'}}
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>
    
      <Flex
        align="center"
        ml="auto"
      >
        <HStack
          spacing="4"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"  
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>
      
        <Flex align="center">
            <Box mr="2">
              <Text>Gabriel Brotas</Text>
              <Text
                color="gray.300"
                fontSize="small"
              >
                gabrielbrotas22@gmail.com
              </Text>
            </Box>

            <Avatar size="md" name="Gabriel Brotas" src="https://github.com/GabrielBrotas.png" />
        </Flex>
      </Flex>
    </Flex>
  )
}