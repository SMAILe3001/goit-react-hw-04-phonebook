import PropTypes from 'prop-types';
import { ButtonStyle } from './Button.styled';

export function Button({ onClick, text }) {
  return (
    <ButtonStyle type="button" onClick={onClick}>
      {text}
    </ButtonStyle>
  );
}

Button.propType = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};
