import React from "react";
import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Input } from "../../components/Form/Input";
import Link from "next/link";
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type SignUpFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}
  
  const signUpFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),  
    email: yup.string().required('e-mail obrigatório').email('Insira um e-mail válido'),
    password: yup.string().required('senha obrigatória').min(6, 'Mínimo de 6 caracteres'),
    password_confirmation: yup.string().oneOf([
        null, yup.ref('password')
    ], 'as senhas precisam ser iguais'),
  })
  
export default function CreateUser() {
      // o useForm tambem nos retorna outros valores como o formState para saber se é valido, se está em processo de submit, quantas vezes deu o submit, etc...
    const { register, handleSubmit, formState: { errors, isSubmitting }  } = useForm({
        resolver: yupResolver(signUpFormSchema)
    });
    
    // tipar a função pois essa função tem 2 parametros, os valores e os events, assim vamos ter acesso as props do event
    const handleSignUp: SubmitHandler<SignUpFormData> = async (values) => {
        await new Promise(resolve => setTimeout(() => resolve(true), 2000))
    }
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth="1480" mx="auto" px="6">
                <Sidebar />

                <Box
                  as="form"
                  flex="1"
                  borderRadius={8}
                  bg="gray.800"
                  p={["6", "8"]}
                  onSubmit={handleSubmit(handleSignUp)}
                >
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input
                              name="name"
                              label="Nome Completo"
                              {...register('name')}
                              error={errors.name} 
                            />

                            <Input
                              name="email"
                              type="email"
                              label="E-mail"
                              {...register('email')}
                              error={errors.email} 
                              />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input
                              name="password"
                              type="password"
                              label="Senha"
                              {...register('password')}
                              error={errors.password} 
                            />
                            
                            <Input
                              name="password_confirmation"
                              type="password"
                              label="Confirmação da Senha"
                              {...register('password_confirmation')}
                              error={errors.password_confirmation}
                            />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>

                            <Button
                              type="submit"
                              colorScheme="pink"
                              isLoading={isSubmitting}>
                                Salvar
                            </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}