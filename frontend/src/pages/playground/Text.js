import BackButton from '../../components/common/BackButton';

const TextPage = () => {
  return (
    <>
      <BackButton />
      <h2 style={{ textDecoration: 'underline' }}>Text Page</h2>
      <div>
        <h1>A primary header</h1>
        <h2>A secondary header</h2>
        <h3>A tertiary header</h3>
        <h4>A quaternary header</h4>
        <h5>A quinary header</h5>
        <h6>h6</h6>
        <p>
          This is a paragraph stating this practice page is for UI test
          scenarios
        </p>
      </div>
    </>
  );
};

export default TextPage;
