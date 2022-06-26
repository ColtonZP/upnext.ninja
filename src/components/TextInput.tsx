import { ChangeEvent, Dispatch, FormEvent, ReactNode, SetStateAction } from 'react'
import { CloseButton, Tooltip, TextInput as MantineTextInput } from '@mantine/core'

type Props = {
  placeholder: string
  inputValue: string
  updateInputValue: Dispatch<SetStateAction<string>>
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  closeButton?: boolean
  listInput?: boolean
  toggleClose?: () => void
  icon?: ReactNode
}

export const TextInput = ({
  placeholder,
  inputValue,
  updateInputValue,
  handleSubmit,
  closeButton,
  listInput,
  toggleClose,
  icon,
}: Props) => {
  return (
    <form onSubmit={handleSubmit}>
      <MantineTextInput
        required
        placeholder={placeholder}
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => updateInputValue(e.target.value)}
        icon={icon && icon}
        rightSection={
          closeButton && (
            <Tooltip label="Cancel" withArrow position="right">
              <CloseButton onClick={toggleClose} />
            </Tooltip>
          )
        }
        mb={listInput ? 'xs' : 0}
        px="xs"
        size={listInput ? 'lg' : 'sm'}
      />
    </form>
  )
}

TextInput.defaultProps = {
  closeButton: false,
  listInput: false,
  toggleClose: () => null,
  icon: null,
}
