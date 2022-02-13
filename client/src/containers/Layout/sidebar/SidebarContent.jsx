import React from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';

const SidebarContent = ({ onClick, changeToDark, changeToLight }) => {
  const handleHideSidebar = () => {
    onClick();
  };

  return (
    <div className="sidebar__content">
      <ul className="sidebar__block">
        <SidebarCategory title="Customers" icon="diamond">
          <SidebarLink title="Add Customers" route="/customers/add" onClick={handleHideSidebar} />
          <SidebarLink title="Customers" route="/customers/all" onClick={handleHideSidebar} />
        </SidebarCategory>
      </ul>
      <ul className="sidebar__block">
        <SidebarCategory title="Layout" icon="layers">
          <button type="button" className="sidebar__link" onClick={changeToLight}>
            <p className="sidebar__link-title">Light Theme</p>
          </button>
          <button type="button" className="sidebar__link" onClick={changeToDark}>
            <p className="sidebar__link-title">Dark Theme</p>
          </button>
        </SidebarCategory>
      </ul>
    </div>
  );
};

SidebarContent.propTypes = {
  changeToDark: PropTypes.func.isRequired,
  changeToLight: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SidebarContent;
