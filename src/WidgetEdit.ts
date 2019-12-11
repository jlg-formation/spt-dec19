import { Widget } from './Widget';
import { EditCallback } from './EditionPoint';
import { Mode } from './Mode';

export class WidgetEdit {

  constructor(public widget: Widget, public label: string) {}

  getEditCallback(): EditCallback {
    return (ev: MouseEvent, label: string, x: number, y: number) => {
      console.log('edit...');

      const orig = this.widget.getOrigin();
      const startX = ev.pageX;
      const startY = ev.pageY;

      const mousemove = () => {
        console.log('mousemove');
        this.widget.edit(this.label, orig, { x: ev.pageX - startX, y: ev.pageY - startY });
        this.widget.parent.mode = Mode.EDITION;
      };

      const mouseup = (evt: MouseEvent) => {
        evt.stopPropagation();
        evt.preventDefault();
        console.log('mouseup');
        document.removeEventListener('mousemove', mousemove);
        document.removeEventListener('mouseup', mouseup);
      };

      document.addEventListener('mousemove', mousemove);
      document.addEventListener('mouseup', mouseup);
    };
  }
}
