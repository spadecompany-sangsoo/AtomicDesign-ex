interface IBoardInfoItemDesc {
  desc: string;
}

const BoardInfoItemDesc = ({ desc }: IBoardInfoItemDesc) => {
  return <h2>{desc}</h2>;
};

export default BoardInfoItemDesc;
