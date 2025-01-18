import React from 'react';

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  };

  const username = props.data?.firstName || 'Admin';

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello
        <br />
        <span className="text-3xl font-semibold">
          {username} 👋
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 rounded-sm px-3 py-2 text-white text-lg font-medium"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
