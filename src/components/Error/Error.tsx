import { SerializedError } from 'types/common.types';

interface ErrorProps {
  errors: SerializedError | null
}

const Error: React.FC<ErrorProps> = ({ errors }) => {
  console.log(errors);
  return (
    <div>Errors...</div>
  );
};

export default Error;
