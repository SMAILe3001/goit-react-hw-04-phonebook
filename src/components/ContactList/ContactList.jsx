import PropTypes from 'prop-types';
import { List, Item, Button } from './ContactList.styled';

export function ContactList({ contactList, onDeleted }) {
  return (
    <List>
      {contactList.map(contact => (
        <Item key={contact.id}>
          <span>
            {contact.name}: {contact.number}
          </span>
          <Button type="button" onClick={() => onDeleted(contact.id)}>
            delete
          </Button>
        </Item>
      ))}
    </List>
  );
}

ContactList.propType = {
  contactList: PropTypes.array.isRequired,
  onDeleted: PropTypes.func.isRequired,
};
