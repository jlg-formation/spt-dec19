import { Widget } from "./Widget";

export class WidgetMove {
  
  constructor(public widget: Widget) {}

  getMoveCallback() {
    return (ev: MouseEvent) => {
      console.log('move...');

      const orig = this.widget.getOrigin();
      const startX = ev.pageX;
      const startY = ev.pageY;

      const mousemove = (event: MouseEvent) => {
        console.log('mousemove');
        this.widget.move(orig, { x: event.pageX - startX, y: event.pageY - startY });
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
    }
  }
}
