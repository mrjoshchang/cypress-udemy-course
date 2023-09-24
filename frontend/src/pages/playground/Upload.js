import BackButton from '../../components/common/BackButton';
import FileUpload from '../../components/FileUpload';

const UploadPage = () => {
  return (
    <>
      <BackButton />
      <h2 style={{ textDecoration: 'underline' }}>Upload Page</h2>
      <div>
        <FileUpload />
      </div>
    </>
  );
};

export default UploadPage;
