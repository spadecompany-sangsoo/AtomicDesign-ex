interface IBoardParagraphItemDesc {
  desc: string;
}

const BoardParagraphItemDesc = ({ desc }: IBoardParagraphItemDesc) => {
  return <h6>{desc}</h6>;
};

export default BoardParagraphItemDesc;
