export const xmlns = 'http://www.w3.org/2000/svg';

export class SVGUtils {
  static getCoordonates(svg: SVGSVGElement, event: MouseEvent) {
    const pt = svg.createSVGPoint();
    pt.x = event.clientX;
    pt.y = event.clientY;
    return pt.matrixTransform(svg.getScreenCTM().inverse());
  }
}
