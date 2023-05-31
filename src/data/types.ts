export interface Item {
  name: string;
  id: number;
};

export interface ItemGroup {
  name: string;
  subgroups: ItemGroup[] | null;
  items: Item[] | null;
};

export interface Material {
  item: Item;
  quantity: number;
};

export interface IndustryFlow {
  outcome: Material;
  materials: Material[];
};

export interface Blueprint {
  id: number;
  name: string;
  manufacturing: IndustryFlow | null,
  reaction: IndustryFlow | null,
};

export interface BlueprintGroup {
  name: string;
  subgroups: BlueprintGroup[] | null;
  blueprints: Blueprint[] | null;
};
