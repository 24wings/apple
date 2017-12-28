/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
declare var wx: any;
declare var WeixinJSBridge: any;
interface Field {
  key: string, label: string, value: any, controlType: string, validators?: any
}