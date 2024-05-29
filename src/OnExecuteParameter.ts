export enum InputMethod {
  NotDefined = -1 /* Used only for converting TryToSetIpSelection to use default parameters instead of [AlternateSignature] */,
  Unknown = 0,
  Keyboard = 1,
  Mouse = 2,
  Touch = 3,
  Pen = 4,
  CrossSlide = 9,
}

export enum UILocation {
  ContextMenu = 'ContextMenu',
  Floatie = 'Floatie',
  Ribbon = 'Ribbon',
  SingleLineRibbon = 'SingleLineRibbon',
  MultilineRibbon = 'MultilineRibbon',
  Overflow = 'Overflow',
  TellMe = 'TellMe',
  FarPeripheralControls = 'FarPeripheralControls',
  NearPeripheralControls = 'NearPeripheralControls',
  PeripheralOverflow = 'PeripheralOverflow',
  Header = 'Header',
  FileMenu = 'FileMenu',
  StatusBar = 'StatusBar',
  ActionHub = 'ActionHub',
  ViewerToolbar = 'ViewerToolbar',
  SingleLineToolBar = 'SingleLineToolBar',
  ToolBarOverflow = 'ToolBarOverflow',
  TaskPane = 'TaskPane',
  Canvas = 'Canvas',
}

export interface OnExecuteParameter {
  id: string;
  /** when there is need to get the trigger time of click and any keydown to execute one command, add it */
  triggerTime?: number;
  inputMethod?: InputMethod;
  event?: Event;
  // If executed from a menu. What is the top level id of menu host.
  terminalParentControlId?: string;
}

export interface MenuOpenOnExecuteParameter extends OnExecuteParameter {
  location?: UILocation;
  isShadowRendering?: boolean;
}
