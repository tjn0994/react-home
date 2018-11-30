import React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { selector } from '../../selectors/authSelector';
import { logout } from '../../actions/authAction';

const ProfileComponent = (props) => {
  const {handleLogout} = props;

  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Options
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>
          Option 1
        </DropdownItem>
        <DropdownItem>
          Option 2
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={handleLogout}>
          Logout
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

export default compose(
  connect(selector, { logout }),
  withHandlers({
    handleLogout: props => () => {
      props.logout();
    },
  }),
)(ProfileComponent);
