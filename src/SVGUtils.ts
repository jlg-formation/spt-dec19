export const xmlns = 'http://www.w3.org/2000/svg';

export class SVGUtils {
  static getCoordonates(svg: SVGSVGElement, event: MouseEvent) {
    const pt = svg.createSVGPoint();
    pt.x = event.clientX;
    pt.y = event.clientY;
    return pt.matrixTransform(svg.getScreenCTM().inverse());
  }

  static addGroup(parent: SVGElement, name: string) {
    const g = document.createElementNS(xmlns, 'g');
    g.setAttribute('class', name);
    parent.appendChild(g);
    return g;
  }

  static removeGroupContent(group: SVGGElement) {
    while (group.hasChildNodes()) {
      group.removeChild(group.firstChild);
    }
  }
}
