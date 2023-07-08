export type SubItemType = {
  title: string;
  subTitle: string;
};

export type ItemType = {
  title: string;
  subItems: SubItemType[];
};

export type HeaderProps = {
  list: ItemType[];
};

export type LogoProps = {
  href?: string;
};

export type ButtonProps = {
  onClick: () => void;
};
