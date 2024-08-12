"use client"
import React from 'react'
import { useInboxNotifications } from "@liveblocks/react/suspense";
import {
  InboxNotification,
  InboxNotificationList,
} from "@liveblocks/react-ui";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../components/ui/popover"

function NotificationBox({children}) {
  const { inboxNotifications } = useInboxNotifications();
  return (
    <div>
      <Popover>
        <PopoverTrigger>{children}</PopoverTrigger>
        <PopoverContent>
        <InboxNotificationList>
      {inboxNotifications.map((inboxNotification) => (
        <InboxNotification
          key={inboxNotification.id}
          inboxNotification={inboxNotification}
        />
      ))}
    </InboxNotificationList>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default NotificationBox