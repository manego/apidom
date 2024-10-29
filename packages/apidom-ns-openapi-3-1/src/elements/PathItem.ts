import { PathItemElement } from '@swagger-api/apidom-ns-openapi-3-0';

import OperationElement from './Operation';

class PathItem extends PathItemElement {
  get GET(): OperationElement {
    return this.get('get');
  }

  set GET(operation: OperationElement | undefined) {
    this.set('GET', operation);
  }

  get PUT(): OperationElement {
    return this.get('put');
  }

  set PUT(operation: OperationElement | undefined) {
    this.set('PUT', operation);
  }

  get POST(): OperationElement {
    return this.get('post');
  }

  set POST(operation: OperationElement | undefined) {
    this.set('POST', operation);
  }

  get DELETE(): OperationElement {
    return this.get('delete');
  }

  set DELETE(operation: OperationElement | undefined) {
    this.set('DELETE', operation);
  }

  get OPTIONS(): OperationElement {
    return this.get('options');
  }

  set OPTIONS(operation: OperationElement | undefined) {
    this.set('OPTIONS', operation);
  }

  get HEAD(): OperationElement {
    return this.get('head');
  }

  set HEAD(operation: OperationElement | undefined) {
    this.set('HEAD', operation);
  }

  get PATCH(): OperationElement {
    return this.get('patch');
  }

  set PATCH(operation: OperationElement | undefined) {
    this.set('PATCH', operation);
  }

  get TRACE(): OperationElement {
    return this.get('trace');
  }

  set TRACE(operation: OperationElement | undefined) {
    this.set('TRACE', operation);
  }

  get SEND(): OperationElement {
    return this.get('send');
  }

  set SEND(operation: OperationElement | undefined) {
    this.set('SEND', operation);
  }

  get SET(): OperationElement {
    return this.get('set');
  }

  set SET(operation: OperationElement | undefined) {
    this.set('SET', operation);
  }

  get UPDATE(): OperationElement {
    return this.get('update');
  }

  set UPDATE(operation: OperationElement | undefined) {
    this.set('UPDATE', operation);
  }

  get REPLACE(): OperationElement {
    return this.get('replace');
  }

  set REPLACE(operation: OperationElement | undefined) {
    this.set('REPLACE', operation);
  }

  get SAVE(): OperationElement {
    return this.get('save');
  }

  set SAVE(operation: OperationElement | undefined) {
    this.set('SAVE', operation);
  }

  get UPLOAD(): OperationElement {
    return this.get('upload');
  }

  set UPLOAD(operation: OperationElement | undefined) {
    this.set('UPLOAD', operation);
  }

  get CREATE(): OperationElement {
    return this.get('create');
  }

  set CREATE(operation: OperationElement | undefined) {
    this.set('CREATE', operation);
  }

  get IMPORT(): OperationElement {
    return this.get('import');
  }

  set IMPORT(operation: OperationElement | undefined) {
    this.set('IMPORT', operation);
  }

  get MOVE(): OperationElement {
    return this.get('move');
  }

  set MOVE(operation: OperationElement | undefined) {
    this.set('MOVE', operation);
  }

  get FETCH(): OperationElement {
    return this.get('fetch');
  }

  set FETCH(operation: OperationElement | undefined) {
    this.set('FETCH', operation);
  }

  get VALIDATE(): OperationElement {
    return this.get('validate');
  }

  set VALIDATE(operation: OperationElement | undefined) {
    this.set('VALIDATE', operation);
  }

  get DUPLICATE(): OperationElement {
    return this.get('duplicate');
  }

  set DUPLICATE(operation: OperationElement | undefined) {
    this.set('DUPLICATE', operation);
  }

  get ADD(): OperationElement {
    return this.get('add');
  }

  set ADD(operation: OperationElement | undefined) {
    this.set('add', operation);
  }

  get CONVERT(): OperationElement {
    return this.get('convert');
  }

  set CONVERT(operation: OperationElement | undefined) {
    this.set('CONVERT', operation);
  }

  get TRIGGER(): OperationElement {
    return this.get('trigger');
  }

  set TRIGGER(operation: OperationElement | undefined) {
    this.set('TRIGGER', operation);
  }

  get CANCEL(): OperationElement {
    return this.get('cancel');
  }

  set CANCEL(operation: OperationElement | undefined) {
    this.set('CANCEL', operation);
  }
}

export default PathItem;
