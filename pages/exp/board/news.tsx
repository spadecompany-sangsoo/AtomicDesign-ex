import BoardTemplates from '@/components/templates/BoardTemplates';
import { useQuery } from '@tanstack/react-query';
import { getNews } from '@/libs/api/board/board-api';
import Layout from '@/pages/Layout';
import { INews } from '@/@types/board/news';
import BoardNewsItem from '@/components/molecules/BoardNewsItem';

const NewsPage = () => {
  const { data, isLoading, isSuccess } = useQuery<INews[]>(['news'], getNews);

  return (
    <Layout>
      {isSuccess ? (
        <BoardTemplates>
          <BoardTemplates.BoardHead>
            <BoardTemplates.BoardHead.BoardTitle text="News" />
            <BoardTemplates.BoardHead.BoardLengthTxt length={data.length} />
          </BoardTemplates.BoardHead>
          <BoardTemplates.BoardList
            data={data}
            renderListItem={(item) => <BoardNewsItem item={item as INews} key={item.id} />}
          />
        </BoardTemplates>
      ) : null}
    </Layout>
  );
};

export default NewsPage;
