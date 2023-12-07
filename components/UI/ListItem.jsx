import PropTypes from 'prop-types';

export default function ListItem({ children, ...props }) {
  return (
    <li
      className="list-group-item pt-4 d-flex justify-content-center align-items-center"
      {...props}
    >
      {children}
    </li>
  );
}

ListItem.propTypes = {
  children: PropTypes.node,
  props: PropTypes.object
};

/*
PropTypes - is a way to enforce the types of props a component should receive.  it helps catch bugs and improves code readability.

**npm install prop-types
**import PropTypes from 'prop-types';

// Define PropTypes for Nav component
Nav.propTypes = {
  links: PropTypes.array.isRequired // Assuming links is an array and is required
};
*/