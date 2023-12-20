import type {ApiDoc} from "@/components/TypeDoc/api-docs.types.ts";
import type {ItemType} from "antd/es/menu/hooks/useItems";
import type {ApiDocItemType} from "@/components/TypeDoc/types.ts";

const createGroup = (name: string, key: string, items: ApiDocItemType[]): ItemType => ({
  type: "group",
  label: name,

  children: items.map((item) => createItem(item, key))
})

const createItem = (item: ApiDocItemType, parentKey: string): ItemType => ({
  key: `${parentKey}/${item.name}`,
  label: item.name
});

const useTypeDocMenu = ({ functions, interfaces, classes, typeAliases, variables, namespaces, enums }: ApiDoc, basePath: string) => {
  const menuConfig: ItemType[] = [];

  if(functions && functions.length > 0) {
    menuConfig.push(
      createGroup("Functions", `${basePath}/functions`, functions));
  }
  if(classes && classes.length > 0) {
    menuConfig.push(
      createGroup("Classes", `${basePath}/classes`, classes));
  }
  if(typeAliases && typeAliases.length > 0) {
    menuConfig.push(
      createGroup("Types", `${basePath}/typeAliases`, typeAliases));
  }
  if(interfaces && interfaces.length > 0) {
    menuConfig.push(
      createGroup("Interfaces", `${basePath}/interfaces`, interfaces));
  }
  if(variables && variables.length > 0) {
    menuConfig.push(
      createGroup("Variables", `${basePath}/variables`, variables));
  }
  if(namespaces && namespaces.length > 0) {
    menuConfig.push(
      createGroup("Namespaces", `${basePath}/namespaces`, namespaces));
  }
  if(enums && enums.length > 0) {
    menuConfig.push(
      createGroup("Enums", `${basePath}/enums`, enums));
  }

  return menuConfig;
}

export default useTypeDocMenu;
