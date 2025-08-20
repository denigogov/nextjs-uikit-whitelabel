interface NotFoundProps {
  error: string;
}

const NotFound: React.FC<NotFoundProps> = ({ error }) => {
  return <div>NotFound Component {error}</div>;
};

export default NotFound;
