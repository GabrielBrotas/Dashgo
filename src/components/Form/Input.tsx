import { FormControl, FormErrorMessage, FormLabel, Input as CharkaInput, InputProps as CharkaInputProps } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { FieldError } from 'react-hook-form'

interface InputProps extends CharkaInputProps {
    name: string;
    label?: string;
    error?: FieldError;
}

// tipar o ref
const InputBase: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error = null, ...rest }: InputProps, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            { !!label && <FormLabel htmlFor="email">{label}</FormLabel>}
            
            <CharkaInput
                id={name}
                name={name}
                focusBorderColor="pink.500" 
                bgColor="gray.900"
                variant="filled"
                _hover={{bgColor: 'gray.900'}}
                size="lg" 
                ref={ref}
                {...rest}
            />

            { !! error && (
                <FormErrorMessage>{error.message}</FormErrorMessage>
            )}
        </FormControl>
    )
}

// encaminhar ref
export const Input = forwardRef(InputBase)