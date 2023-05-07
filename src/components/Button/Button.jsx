import { ButtonStyle } from './Button.styled';

export function Button({ onClick, text }) {
  return (
    <ButtonStyle type="button" onClick={onClick}>
      {text}
    </ButtonStyle>
  );
}
