import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Flex, Button, Stack, } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('e-mail obrigatório').email('Insira um e-mail válido'),
  password: yup.string().required('senha obrigatória'),
})

export default function Home() {
  // o useForm tambem nos retorna outros valores como o formState para saber se é valido, se está em processo de submit, quantas vezes deu o submit, etc...
  const { register, handleSubmit, formState: { errors }  } = useForm({
    resolver: yupResolver(signInFormSchema)
  });
  
  // tipar a função pois essa função tem 2 parametros, os valores e os events, assim vamos ter acesso as props do event
  const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
    
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      >
        <Flex
          as="form"
          width="100%"
          maxWidth={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDir="column"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="4">
            <Input
              type="email"
              name="email"
              label="E-mail"
              {...register('email')} 
              error={errors.email}
            />
            <Input
              type="password"
              name="password"
              label="Password"
              {...register('password')} 
              error={errors.password}
            />
          </Stack>

          <Button type="submit" mt="6" colorScheme="pink">Entrar</Button>
        </Flex>
      </Flex> 
  )
}
