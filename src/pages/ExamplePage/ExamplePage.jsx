import { useParams } from 'react-router-dom';

const ExamplePage = () => {
  const params = useParams();

  return <div>Example, mon param est : {params.id}</div>;
};

export default ExamplePage;
