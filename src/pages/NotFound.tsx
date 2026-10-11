import { Icon } from '@iconify/react';

export const NotFound = () => {
  return (
    <div>
      <h2>404</h2>
      <span>Ooops! Looks like this page or resource doesn't exist.</span>
      <button>
        <Icon icon="mdi:home" />
        Go Home
      </button>
    </div>
  );
};
