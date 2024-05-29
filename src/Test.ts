import { assertSlots } from '@fluentui/react-components';
import type {
  ComboboxSlots,
  ComboboxState,
  ComponentState,
} from '@fluentui/react-components';

export type MyState = ComponentState<ComboboxSlots>;

export function foo() {
  const state: ComboboxState = {} as ComboboxState;
  assertSlots<ComboboxSlots>(state);
}
