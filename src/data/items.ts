import itemGroups from './items.json';

export interface Item {
  name: string;
  id: number;
}

export interface ItemGroup {
  name: string;
  subgroups?: ItemGroup[];
  items?: Item[];
};

interface Data {
  itemGroups: ItemGroup[],
};

const data: Data = {
  itemGroups,
};

let itemMap = new Map<number, Item>();
const putItemsToMap = (items: Item[]) => {
  items.forEach((item) => {
    itemMap.set(item.id, item);
  });
};
const putItemGrouptoMap = (itemGroup: ItemGroup) => {
  if (itemGroup.items) {
    putItemsToMap(itemGroup.items);
  }
  if (itemGroup.subgroups) {
    itemGroup.subgroups.forEach((subgroup) => {
      putItemGrouptoMap(subgroup);
    });
  }
};

export const loadItems = () => {
  if (itemMap.size > 0) {
    return;
  }

  data.itemGroups.forEach((group) => {
    putItemGrouptoMap(group);
  })
};
export const findItem = (id:number): Item => {
  if(itemMap.has(id)) {
    return itemMap.get(id) as Item;
  } else {
    throw Error(`Cannot find item with id: ${id}`);
  }
};
