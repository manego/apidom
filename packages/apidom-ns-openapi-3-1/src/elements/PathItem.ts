import { PathItemElement } from '@swagger-api/apidom-ns-openapi-3-0';

import OperationElement from './Operation';

class PathItem extends PathItemElement {
  get ACCEPT(): OperationElement {
    return this.get('accept');
  }

  set ACCEPT(operation: OperationElement | undefined) {
    this.set('ACCEPT', operation);
  }

  get ADD(): OperationElement {
    return this.get('add');
  }

  set ADD(operation: OperationElement | undefined) {
    this.set('ADD', operation);
  }

  get APPLY(): OperationElement {
    return this.get('apply');
  }

  set APPLY(operation: OperationElement | undefined) {
    this.set('APPLY', operation);
  }

  get CANCEL(): OperationElement {
    return this.get('cancel');
  }

  set CANCEL(operation: OperationElement | undefined) {
    this.set('CANCEL', operation);
  }

  get CHANGEPASSWORD(): OperationElement {
    return this.get('changepassword');
  }

  set CHANGEPASSWORD(operation: OperationElement | undefined) {
    this.set('CHANGEPASSWORD', operation);
  }

  get CHANGEUSERNAME(): OperationElement {
    return this.get('changeusername');
  }

  set CHANGEUSERNAME(operation: OperationElement | undefined) {
    this.set('CHANGEUSERNAME', operation);
  }

  get CHECK(): OperationElement {
    return this.get('check');
  }

  set CHECK(operation: OperationElement | undefined) {
    this.set('CHECK', operation);
  }

  get CHECKAUTH(): OperationElement {
    return this.get('checkauth');
  }

  set CHECKAUTH(operation: OperationElement | undefined) {
    this.set('CHECKAUTH', operation);
  }

  get CONSENT(): OperationElement {
    return this.get('consent');
  }

  set CONSENT(operation: OperationElement | undefined) {
    this.set('CONSENT', operation);
  }

  get CONVERT(): OperationElement {
    return this.get('convert');
  }

  set CONVERT(operation: OperationElement | undefined) {
    this.set('CONVERT', operation);
  }

  get CREATE(): OperationElement {
    return this.get('create');
  }

  set CREATE(operation: OperationElement | undefined) {
    this.set('CREATE', operation);
  }

  get DELETE(): OperationElement {
    return this.get('delete');
  }

  set DELETE(operation: OperationElement | undefined) {
    this.set('DELETE', operation);  
  }

  get DUPLICATE(): OperationElement {
    return this.get('duplicate');
  }

  set DUPLICATE(operation: OperationElement | undefined) {
    this.set('DUPLICATE', operation);
  }

  get EXPORT(): OperationElement {
    return this.get('export');
  }

  set EXPORT(operation: OperationElement | undefined) {
    this.set('EXPORT', operation);
  }

  get FETCH(): OperationElement {
    return this.get('fetch');
  }

  set FETCH(operation: OperationElement | undefined) {
    this.set('FETCH', operation);
  }

  get GET(): OperationElement {
    return this.get('get');
  }

  set GET(operation: OperationElement | undefined) {
    this.set('GET', operation);
  }

  get HEAD(): OperationElement {
    return this.get('head');
  }

  set HEAD(operation: OperationElement | undefined) {
    this.set('HEAD', operation);
  }

  get IMPORT(): OperationElement {
    return this.get('import');
  }

  set IMPORT(operation: OperationElement | undefined) {
    this.set('IMPORT', operation);
  }

  get INVALIDATE(): OperationElement {
    return this.get('invalidate');
  }

  set INVALIDATE(operation: OperationElement | undefined) {
    this.set('INVALIDATE', operation);
  }

  get LOGIN(): OperationElement {
    return this.get('login');
  }

  set LOGIN(operation: OperationElement | undefined) {
    this.set('LOGIN', operation);
  }

  get LOGOUT(): OperationElement {
    return this.get('logout');
  }

  set LOGOUT(operation: OperationElement | undefined) {
    this.set('LOGOUT', operation);
  }

  get MOVE(): OperationElement {
    return this.get('move');
  }

  set MOVE(operation: OperationElement | undefined) {
    this.set('MOVE', operation);
  }

  get OPTIONS(): OperationElement {
    return this.get('options');
  }

  set OPTIONS(operation: OperationElement | undefined) {
    this.set('OPTIONS', operation);
  }

  get PATCH(): OperationElement {
    return this.get('patch');
  }

  set PATCH(operation: OperationElement | undefined) {
    this.set('PATCH', operation);
  }

  get POST(): OperationElement {
    return this.get('post');
  }

  set POST(operation: OperationElement | undefined) {
    this.set('POST', operation);
  }

  get PROCESS(): OperationElement {
    return this.get('process');
  }

  set PROCESS(operation: OperationElement | undefined) {
    this.set('PROCESS', operation);
  }

  get PUT(): OperationElement {
    return this.get('put');
  }

  set PUT(operation: OperationElement | undefined) {
    this.set('PUT', operation);
  }

  get RECOVERPASSWORD(): OperationElement {
    return this.get('recoverpassword');
  }

  set RECOVERPASSWORD(operation: OperationElement | undefined) {
    this.set('RECOVERPASSWORD', operation);
  }

  get RENEWTOKEN(): OperationElement {
    return this.get('renewtoken');
  }

  set RENEWTOKEN(operation: OperationElement | undefined) {
    this.set('RENEWTOKEN', operation);
  }

  get REPLACE(): OperationElement {
    return this.get('replace');
  }

  set REPLACE(operation: OperationElement | undefined) {
    this.set('REPLACE', operation);
  }

  get REQCHANGEUSERNAME(): OperationElement {
    return this.get('reqchangeusername');
  }

  set REQCHANGEUSERNAME(operation: OperationElement | undefined) {
    this.set('REQCHANGEUSERNAME', operation);
  }

  get REVOKE(): OperationElement {
    return this.get('revoke');
  }

  set REVOKE(operation: OperationElement | undefined) {
    this.set('REVOKE', operation);
  }

  get SAVE(): OperationElement {
    return this.get('save');
  }

  set SAVE(operation: OperationElement | undefined) {
    this.set('SAVE', operation);
  }

  get SEND(): OperationElement {
    return this.get('send');
  }

  set SEND(operation: OperationElement | undefined) {
    this.set('SEND', operation);
  }

  get SENDMAIL(): OperationElement {
    return this.get('sendmail');
  }

  set SENDMAIL(operation: OperationElement | undefined) {
    this.set('SENDMAIL', operation);
  }

  get SET(): OperationElement {
    return this.get('set');
  }

  set SET(operation: OperationElement | undefined) {
    this.set('SET', operation);
  }

  get START(): OperationElement {
    return this.get('start');
  }

  set START(operation: OperationElement | undefined) {
    this.set('START', operation);
  }

  get TRACE(): OperationElement {
    return this.get('trace');
  }

  set TRACE(operation: OperationElement | undefined) {
    this.set('TRACE', operation);  

  }

  get TRIGGER(): OperationElement {
    return this.get('trigger');
  }

  set TRIGGER(operation: OperationElement | undefined) {
    this.set('TRIGGER', operation);
  }

  get UPDATE(): OperationElement {
    return this.get('update');
  }

  set UPDATE(operation: OperationElement | undefined) {
    this.set('UPDATE', operation);
  }

  get UPLOAD(): OperationElement {
    return this.get('upload');
  }

  set UPLOAD(operation: OperationElement | undefined) {
    this.set('UPLOAD', operation);
  }

  get VALIDATE(): OperationElement {
    return this.get('validate');
  }

  set VALIDATE(operation: OperationElement | undefined) {
    this.set('VALIDATE', operation);
  }

  get VERIFYSSO(): OperationElement {
    return this.get('verifysso');
  }

  set VERIFYSSO(operation: OperationElement | undefined) {
    this.set('VERIFYSSO', operation)
  }
}

export default PathItem;
