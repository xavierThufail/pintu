import { MockIcon } from "../../assets";
import { categories } from "../../constants";

const Item = ({ title }: { title: string }) => (
  <div className="p-2 flex items-center rounded-lg bg-blue-100 min-w-fit text-blue-700 mr-2 cursor-pointer">
    <MockIcon width={20} height={20} />
    <span className="pl-2 text-xs font-bold">{title}</span>
  </div>
);

const CategoriesContent = () => {
  return (
    <div className="px-4 pt-6 flex overflow-scroll">
      {categories.map((category) => (
        <Item key={category} title={category} />
      ))}
    </div>
  );
};

CategoriesContent.displayName = 'CategoriesContent';

export default CategoriesContent;