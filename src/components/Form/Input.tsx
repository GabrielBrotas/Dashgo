import { FormControl, FormLabel, Input as CharkaInput, InputProps as CharkaInputProps } from "@chakra-ui/react";
import React from "react";

interface InputProps extends CharkaInputProps {
    name: string;
    label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
    return (
        <FormControl>
            { !!label && <FormLabel htmlFor="email">{label}</FormLabel>}
            
            <CharkaInput
                id={name}
                name={name}
                type="email"
                focusBorderColor="pink.500" 
                bgColor="gray.900"
                variant="filled"
                _hover={{bgColor: 'gray.900'}}
                size="lg" 
                {...rest}
            />
        </FormControl>
    )
}