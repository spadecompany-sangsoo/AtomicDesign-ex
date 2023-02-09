interface IBoardNewsItemTitle {
  title: string;
}

const BoardNewsItemTitle = ({ title }: IBoardNewsItemTitle) => {
  return <h6>{title}</h6>;
};

export default BoardNewsItemTitle;
