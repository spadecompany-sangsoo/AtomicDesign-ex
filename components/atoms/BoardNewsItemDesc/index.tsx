interface IBoardNewsItemDesc {
  desc: string;
}

const BoardNewsItemDesc = ({ desc }: IBoardNewsItemDesc) => {
  return <h6>{desc}</h6>;
};

export default BoardNewsItemDesc;
