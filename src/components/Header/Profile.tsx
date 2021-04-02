import { Avatar, Box, Text, Flex } from "@chakra-ui/react";
import React from "react";

export function Profile() {
    return (
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
    )
}