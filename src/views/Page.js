import React from 'react';
import PropTypes from 'prop-types';
import './Page.css';

const Page = ({ children }) => <section className="page">{children}</section>;

Page.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Page;
