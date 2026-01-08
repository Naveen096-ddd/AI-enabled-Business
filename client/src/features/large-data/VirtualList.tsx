import {
  FixedSizeList as List,
  ListChildComponentProps
} from "react-window";

type Item = {
  name: string;
};

type Props = {
  data: Item[];
};

export const LargeList = ({ data }: Props) => {
  const Row = ({ index, style }: ListChildComponentProps) => (
    <div style={style}>{data[index].name}</div>
  );

  return (
    <List
      height={400}
      width={600}
      itemCount={data.length}
      itemSize={35}
    >
      {Row}
    </List>
  );
};
