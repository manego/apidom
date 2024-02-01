import { ObjectElement } from '@swagger-api/apidom-core';
import { FallbackVisitor, FallbackVisitorOptions } from '@swagger-api/apidom-ns-openapi-3-0';

export type { FallbackVisitorOptions as DependentRequiredVisitorOptions };

class DependentRequiredVisitor extends FallbackVisitor {
  public declare readonly element: ObjectElement;

  ObjectElement(objectElement: ObjectElement) {
    const result = super.enter(objectElement);
    this.element.classes.push('json-schema-dependentRequired');
    return result;
  }
}

export default DependentRequiredVisitor;
