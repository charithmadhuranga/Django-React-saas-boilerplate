import React, { useEffect } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { useQueryLoader } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { useOpenState } from '../../hooks/useOpenState';
import { notificationsListQuery } from '../../../__generated__/notificationsListQuery.graphql';
import { NotificationsButton } from './notificationsButton';
import { NotificationsList } from './notificationsList';

export const Notifications = () => {
  const notifications = useOpenState(false);

  const [listQueryRef, loadListQuery] = useQueryLoader<notificationsListQuery>(
    graphql`
      query notificationsListQuery {
        ...notificationsListContent
      }
    `
  );

  useEffect(() => {
    loadListQuery({});
  }, [loadListQuery]);

  return (
    <>
      <NotificationsButton onClick={notifications.toggle} />
      {listQueryRef && (
        <ClickAwayListener onClickAway={notifications.clickAway}>
          <NotificationsList isOpen={notifications.isOpen} listQueryRef={listQueryRef} />
        </ClickAwayListener>
      )}
    </>
  );
};
