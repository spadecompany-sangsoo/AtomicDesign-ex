import BoardTemplates from '@/components/templates/BoardTemplates';
import { useQuery } from '@tanstack/react-query';
import { getInformation } from '@/libs/api/board/board-api';
import { IInformation } from '@/@types/board/information';
import Layout from '@/pages/Layout';
import BoardInfoItem from '@/components/molecules/BoardInfoItem';

const InformationPage = () => {
  const { data, isLoading, isSuccess } = useQuery<IInformation[]>(['information'], getInformation);

  return (
    <Layout>
      {isSuccess ? (
        <BoardTemplates>
          <BoardTemplates.BoardHead className="mx-20">
            <BoardTemplates.BoardHead.BoardTitle text="Information" />
            <BoardTemplates.BoardHead.BoardLengthTxt length={data.length} />
          </BoardTemplates.BoardHead>
          <BoardTemplates.BoardList
            data={data}
            renderListItem={(item) => <BoardInfoItem item={item as IInformation} key={item.id} />}
          />
        </BoardTemplates>
      ) : null}
    </Layout>
  );
};

export default InformationPage;
