import React from 'react'
import { useForm, useToggle, upperFirst } from '@mantine/hooks'
import { Container, TextInput, PasswordInput, Text, Paper, Group, Button, Anchor } from '@mantine/core'

import { UnconfirmedUser, userStore } from '../lib/user.store'

export const Authentication = () => {
  const { user, signUp, signIn, confirmAccount, resendCode, authenticationError } = userStore()

  const [type, toggle] = useToggle('login', ['login', 'register'])

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      code: '',
    },

    validationRules: {
      email: val => /^\S+@\S+$/.test(val),
      password: val => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(val),
    },
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (type === 'register') signUp(form.values.email, form.values.password)
    if (type === 'login') signIn(form.values.email, form.values.password)
  }

  const handleConfirmation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    confirmAccount(form.values.email, form.values.code)
  }

  return (
    <Container size={450} my={40}>
      <Paper radius="md" p="xl" withBorder>
        {(user && !(user as UnconfirmedUser)?.userConfirmed) ||
        authenticationError.code === 'UserNotConfirmedException' ||
        authenticationError.code === 'CodeMismatchException' ? (
          <>
            <Text size="lg" weight={500} align="center">
              Confirm Account
            </Text>

            <form onSubmit={handleConfirmation}>
              <TextInput
                required
                label={`Confirmation Code sent to ${form.values.email}`}
                placeholder="######"
                value={form.values.code}
                onChange={event => form.setFieldValue('code', event.currentTarget.value)}
                error={authenticationError.code === 'CodeMismatchException' && 'Incorrect confirmation code'}
              />

              <Group position="right" mt="xl">
                <Button variant="subtle" onClick={() => resendCode(form.values.email)}>
                  Resend Code
                </Button>
                <Button type="submit">Confirm Account</Button>
              </Group>
            </form>
          </>
        ) : (
          <>
            <Text size="lg" weight={500} align="center">
              {type === 'login' ? 'Log in' : 'Register'}
            </Text>

            <form onSubmit={handleSubmit}>
              <Group direction="column" grow>
                <TextInput
                  required
                  label="Email"
                  placeholder="user@domain.com"
                  type="email"
                  value={form.values.email}
                  onChange={event => form.setFieldValue('email', event.currentTarget.value)}
                  error={
                    (form.errors.email && 'Invalid email') ||
                    (authenticationError.code === 'UsernameExistsException' && 'User name taken') ||
                    (authenticationError.code === 'UserNotFoundException' && 'User not found')
                  }
                />

                <PasswordInput
                  required
                  label="Password"
                  placeholder="Your password"
                  value={form.values.password}
                  onChange={event => form.setFieldValue('password', event.currentTarget.value)}
                  error={
                    (form.errors.password &&
                      'Password should include at least 8 characters, 1 lower case letter, 1 upper case, 1 number and 1 special character') ||
                    (authenticationError.code === 'NotAuthorizedException' && 'Password incorrect')
                  }
                />
              </Group>

              <Group position="apart" mt="xl">
                <Anchor component="button" type="button" color="gray" onClick={() => toggle()} size="xs">
                  {type === 'register' ? 'Already have an account? Login' : "Don't have an account? Register"}
                </Anchor>
                <Button type="submit">{upperFirst(type)}</Button>
              </Group>
            </form>
          </>
        )}
      </Paper>
    </Container>
  )
}
