export interface Item {
  name: string;
  id: number;
};

export interface Material {
  name: string;
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
