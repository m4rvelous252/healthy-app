import React, { ReactNode } from 'react';

const NotificationIconWrapper = ({
  children,
  notificationNumber,
}: {
  children: ReactNode;
  notificationNumber?: number;
}) => {
  return notificationNumber ? (
    <div className="relative">
      <span className="absolute right-0 top-0 h-4 w-4 translate-x-2 rounded-full bg-primary-500 text-center text-[10px] leading-4">
        {notificationNumber > 9 ? '9+' : notificationNumber}
      </span>
      {children}
    </div>
  ) : (
    <>{children}</>
  );
};

export default NotificationIconWrapper;
