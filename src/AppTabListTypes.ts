import type { IKeytipProps } from '@fluentui/react/lib/Keytip';

export type TabType = 'default' | 'contextual' | 'addInMissingTab';

export interface AppTabHeader {
  /**
   * The title to display for the given tab header.
   */
  title: string;

  /**
   * A unique identifier for the tab.
   */
  id: string;

  /**
   * The type of tab. Used to make sure the contextual tabs are styled differently. If no type is provided, the tab is assumed
   * to be of default type.
   */
  tabType?: TabType;

  /**
   * Set this to true if the tab header should render in a disabled state and not respond to click or keyboard events.
   */
  disabled?: boolean;

  /**
   * Optional Keytip for this TabHeader
   */
  keytipProps?: IKeytipProps;

  /**
   * The ID of an adjacent tab that should be rendered in a 'group' with this tab
   */
  connectedTabId?: string;
}
