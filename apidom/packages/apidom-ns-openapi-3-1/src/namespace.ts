import { NamespacePluginOptions } from 'minim';

import CallbackElement from './elements/Callback';
import ComponentsElement from './elements/Components';
import ContactElement from './elements/Contact';
import ExternalDocumentationElement from './elements/ExternalDocumentation';
import InfoElement from './elements/Info';
import LicenseElement from './elements/License';
import OpenapiElement from './elements/Openapi';
import OpenApi3_1Element from './elements/OpenApi3-1';
import OperationElement from './elements/Operation';
import ParameterElement from './elements/Parameter';
import PathItemElement from './elements/PathItem';
import PathsElement from './elements/Paths';
import ReferenceElement from './elements/Reference';
import RequestBodyElement from './elements/RequestBody';
import ResponseElement from './elements/Response';
import ResponsesElement from './elements/Responses';
import SchemaElement from './elements/Schema';
import SecurityRequirementElement from './elements/SecurityRequirement';
import ServerElement from './elements/Server';
import ServerVariableElement from './elements/ServerVariable';

const openApi3_1 = {
  namespace: (options: NamespacePluginOptions) => {
    const { base } = options;

    base.register('callback', CallbackElement);
    base.register('components', ComponentsElement);
    base.register('contact', ContactElement);
    base.register('externalDocumentation', ExternalDocumentationElement);
    base.register('info', InfoElement);
    base.register('license', LicenseElement);
    base.register('openapi', OpenapiElement);
    base.register('openApi3_1', OpenApi3_1Element);
    base.register('operation', OperationElement);
    base.register('parameter', ParameterElement);
    base.register('pathItem', PathItemElement);
    base.register('paths', PathsElement);
    base.register('reference', ReferenceElement);
    base.register('requestBody', RequestBodyElement);
    base.register('response', ResponseElement);
    base.register('responses', ResponsesElement);
    base.register('schema', SchemaElement);
    base.register('securityRequirement', SecurityRequirementElement);
    base.register('server', ServerElement);
    base.register('serverVariable', ServerVariableElement);

    return base;
  },
};

export default openApi3_1;
