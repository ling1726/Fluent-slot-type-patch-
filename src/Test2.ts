import type * as React from 'react';
import type {
  MenuButton,
  Menu,
  MenuList,
  MenuPopover,
  MenuTrigger,
} from '@fluentui/react-components';
import type { IKeytipProps } from '@fluentui/react';
import type {
  ComponentProps,
  ComponentState,
  Slot,
} from '@fluentui/react-components';
import type { AppTabHeader } from './AppTabListTypes';
import type { MenuOpenOnExecuteParameter } from './OnExecuteParameter';

export type AppTabListOverflowMenuSlots = {
  root: NonNullable<Slot<typeof Menu>>;
  menuTrigger: NonNullable<Slot<typeof MenuTrigger>>;
  trigger: NonNullable<Slot<typeof MenuButton>>;
  triggerIcon: NonNullable<Slot<'span'>>;
  menuPopover: NonNullable<Slot<typeof MenuPopover>>;
  menuList: NonNullable<Slot<typeof MenuList>>;
  menuListWrapper: NonNullable<Slot<'div'>>;
};

// Making trigger the primary slot since it's the actual element being rendered when the component is used
export type AppTabListOverflowMenuProps = ComponentProps<
  Partial<AppTabListOverflowMenuSlots>,
  'trigger'
> & {
  ariaLabel?: string;
  topItems: AppTabHeader[];
  overflowItems: AppTabHeader[];
  overflowTabHeaderMenuLauncherIcon: string;
  selectedTabListId?: string;
  onMenuButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  onMenuItemClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: string
  ) => void;
  onOverflowButtonExecute?: (parameter: MenuOpenOnExecuteParameter) => void;
  keytipProps?: IKeytipProps;
};

export type AppTabListOverflowMenuState =
  ComponentState<AppTabListOverflowMenuSlots> &
    Pick<
      AppTabListOverflowMenuProps,
      'onMenuItemClick' | 'overflowItems' | 'topItems'
    > & {
      isOverflowing: boolean;
      menuOpened: boolean;
    };
