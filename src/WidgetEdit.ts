import { Widget } from './Widget';
import { EditCallback } from './EditionPoint';

export class WidgetEdit {
  constructor(public widget: Widget, public label: string) {}

  getEditCallback(): EditCallback {
    return (ev: MouseEvent, label: string, x: number, y: number) => {
      console.log('edit...');
    };
  }
}
