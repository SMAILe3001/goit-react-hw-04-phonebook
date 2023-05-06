import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  LabelContain,
  Label,
  Button,
  LabelTitle,
  Input,
} from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handelInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  addContactPhonebook = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.addContactPhonebook}>
        <LabelContain>
          <Label>
            <LabelTitle>Name</LabelTitle>
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handelInputChange}
            />
          </Label>
          <Label>
            <LabelTitle>Phonebook</LabelTitle>
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handelInputChange}
            />
          </Label>
        </LabelContain>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

ContactForm.propType = {
  onSubmit: PropTypes.func.isRequired,
};
