interface IBoardInfoItemTitle {
  title: string;
}

const BoardInfoItemTitle = ({ title }: IBoardInfoItemTitle) => {
  return <h2>{title}</h2>;
};

export default BoardInfoItemTitle;
