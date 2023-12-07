import ListItem from './components/UI/ListItem';
import PropTypes from 'prop-types';

export default function Nav({ links }) {
    return (
      <nav className="">
        <div className="">
          <div className="" id="navbarSupportedContent">
          {links.map((link, index) => (
              <ListItem key={index}> {/* Add a unique key */}
                {link}
              </ListItem>
            ))}
          </div>
        </div>
      </nav>
    );
  }
  Nav.propTypes = {
    links: PropTypes.array.isRequired // Assuming links is an array and is required
  };