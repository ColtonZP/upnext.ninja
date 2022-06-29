import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { Auth } from 'aws-amplify'

export type UnconfirmedUser = { userConfirmed: boolean }
export type ConfirmedUser = { attributes: { email_verified: boolean } }
export type User = UnconfirmedUser | ConfirmedUser

export type UserStore = {
  user: User | null
  authenticationError: { name: string; code: string }

  getUser: () => void
  signUp: (username: string, password: string) => void
  signIn: (username: string, password: string) => void
  signOut: () => void
  confirmAccount: (username: string, code: string) => void
  resendCode: (username: string) => void
}

export const userStore = create<UserStore>()(
  devtools(set => ({
    user: null,
    authenticationError: { name: '', code: '' },

    getUser: () => {
      Auth.currentAuthenticatedUser()
        .then(res => set({ user: res }))
        .catch(() => set({ user: null }))
    },

    signUp: (username, password) => {
      Auth.signUp({
        username,
        password,
      })
        .then((res: unknown) => set({ user: res as User }))
        .catch(err => {
          set({ authenticationError: err })
        })
    },

    signIn: (username, password) => {
      Auth.signIn({
        username,
        password,
      })
        .then(res => set({ user: res as User }))
        .catch(err => {
          set({ authenticationError: err })
        })
    },

    signOut: () => {
      Auth.signOut()
        .then(() => set({ user: null }))
        .catch(err => {
          set({ authenticationError: err })
        })
    },

    confirmAccount: (username, code) => {
      Auth.confirmSignUp(username, code)
        .then(() => {
          set(state => ({
            user: { ...state.user, userConfirmed: true },
            authenticationError: { name: '', code: '' },
          }))
        })
        .catch(err => {
          set({ authenticationError: err })
        })
    },

    resendCode: username => {
      Auth.resendSignUp(username).catch(err => {
        set({ authenticationError: err })
      })
    },
  })),
)
